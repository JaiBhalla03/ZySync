'use client';
import { useState, useEffect } from "react";
import LoadingPage from "./components/LoadingPage";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a data fetch or delay
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000);
  }, []);

  return (
    <div className="bg-[#141414]">
      {!loading ? (
        <LoadingPage/>
      ) : (
        <div>
          {/* Your actual page content goes here */}
          <h1>Welcome to ZySync</h1>
        </div>
      )}
    </div>
  );
}
