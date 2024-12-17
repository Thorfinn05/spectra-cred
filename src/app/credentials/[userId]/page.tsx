"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadFile = async () => {
    try {
      if (!file) {
        alert("No file selected");
        return;
      }

      setUploading(true);
      const data = new FormData();
      data.set("file", file);
      const uploadRequest = await fetch("/api/files", {
        method: "POST",
        body: data,
      });
      const ipfsUrl = await uploadRequest.json();
      setUrl(ipfsUrl);
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      alert("Trouble uploading file");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target?.files?.[0]);
  };

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-800 via-gray-900 to-black text-white px-4">
  <div className="flex flex-col items-center space-y-8 p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-2xl">
    {/* Title */}
    <h1 className="text-3xl font-extrabold text-center tracking-wide bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
      Upload Your Files Securely
    </h1>

    {/* File Input Section */}
    <div className="flex flex-col items-center space-y-4">
      <label
        htmlFor="file-upload"
        className="cursor-pointer px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-white rounded-lg text-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
      >
        Select a File
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleChange}
        className="hidden"
      />
    </div>

    {/* Upload Button */}
    <button
      type="button"
      disabled={uploading}
      onClick={uploadFile}
      className={`px-8 py-4 rounded-lg text-lg font-bold transition-transform duration-300 ${
        uploading
          ? "bg-gradient-to-r from-gray-500 to-gray-700 cursor-not-allowed opacity-70"
          : "bg-gradient-to-r from-purple-500 to-cyan-400 hover:scale-105 hover:shadow-2xl"
      }`}
    >
      {uploading ? (
        <div className="flex items-center gap-3">
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 100 8H4z"
            ></path>
          </svg>
          Uploading...
        </div>
      ) : (
        "Upload"
      )}
    </button>

    {/* Success Message */}
    {!uploading && url && (
      <div className="mt-6 flex flex-col items-center space-y-2">
        <p className="text-lg font-medium text-green-400">
          🎉 File uploaded successfully!
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-400 text-white rounded-lg font-medium hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          View File
        </a>
      </div>
    )}
  </div>
</main>


  );
}
