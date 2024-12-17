
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";


let supabase: SupabaseClient<any, "public", any>;
try {
  supabase = createClient(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
    `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
  );
} catch (error) {
  console.error("Error creating Supabase client: ", error);
}

const NotesPage = () => {
  const [courseName, setCourseName] = useState("");
  const [provider, setProvider] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase
      .from('CertificationCourses')
      .insert([
        {
          CourseName: courseName,
          Provider: provider,
          Duration: parseInt(duration),
        },
      ]);

      if (error) throw error;
      setMessage("Course added successfully!");
      setCourseName("");
      setProvider("");
      setDuration("");
    } catch (error) {
      setMessage("Failed to add course. " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-500">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">Add a Course</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
                className="bg-white bg-opacity-50 border-2 border-cyan-500 rounded-lg p-2 w-full text-black placeholder-black"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Provider"
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                required
                className="bg-white bg-opacity-50 border-2 border-cyan-500 rounded-lg p-2 w-full text-black placeholder-black"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Duration in Hours"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
                className="bg-white bg-opacity-50 border-2 border-cyan-500 rounded-lg p-2 w-full text-black placeholder-black"
              />
            </div>
            <button type="submit" disabled={loading} className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
              {loading ? "Adding..." : "Add Course"}
            </button>
          </form>
          {message && <p className="text-white">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
