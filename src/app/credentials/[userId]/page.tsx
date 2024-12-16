"use client";

import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useUser } from "@clerk/nextjs";

const CredentialsPage: React.FC = () => {
  const { user } = useUser();
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [issuer, setIssuer] = useState("");
  const [issueDate, setIssueDate] = useState<string>("");
  const [hashOption, setHashOption] = useState<"supabase" | "gmail">("supabase");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Upload to IPFS using Pinata
  const uploadToIPFS = async (file: File): Promise<string> => {
    const PINATA_API_KEY = process.env.PINATA_SECRET_KEY;
    const PINATA_API_SECRET = process.env.PINATA_SECRET_KEY;
    const PINATA_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(PINATA_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${btoa(PINATA_API_KEY + ":" + PINATA_API_SECRET)}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file to IPFS.");
      }

      const result = await response.json();
      return `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
    } catch (error) {
      console.error("Pinata upload error:", error);
      throw new Error("An error occurred while uploading to IPFS.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file || !title || !issuer || !issueDate || !user?.id) {
      alert("Please fill in all fields and select a file to upload.");
      return;
    }

    setLoading(true);
    try {
      const ipfsUrl = await uploadToIPFS(file);
      const ipfsHash = ipfsUrl.split("/").pop();

      if (!ipfsHash) {
        throw new Error("Invalid IPFS hash.");
      }

      if (hashOption === "supabase") {
        const { error } = await supabase.from("Certificate").insert([
          {
            user_id: user.id,
            title,
            issuer,
            issue_date: issueDate,
            ipfs_hash: ipfsHash,
          },
        ]);

        if (error) {
          throw new Error(`Failed to save certificate to Supabase: ${error.message}`);
        }

        setSuccessMessage("Certificate stored in Supabase successfully!");
      } else if (hashOption === "gmail") {
        console.log(`Sending IPFS hash to email: ${ipfsUrl}`);
        setSuccessMessage("IPFS hash sent to Gmail successfully!");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred during the upload.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Credentials Page</h1>

      <div className="mb-4">
        <input
          type="file"
          accept="application/pdf,image/*"
          onChange={handleFileChange}
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Issuer"
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </div>

      <div className="mb-4">
        <input
          type="date"
          value={issueDate}
          onChange={(e) => setIssueDate(e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </div>

      <div className="mb-4">
        <label>
          <input
            type="radio"
            value="supabase"
            checked={hashOption === "supabase"}
            onChange={() => setHashOption("supabase")}
          />
          Store hash in Supabase
        </label>
        <label className="ml-4">
          <input
            type="radio"
            value="gmail"
            checked={hashOption === "gmail"}
            onChange={() => setHashOption("gmail")}
          />
          Send hash to Gmail
        </label>
      </div>

      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload and Save"}
      </button>

      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
    </div>
  );
};

export default CredentialsPage;
