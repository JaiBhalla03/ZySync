'use client';
import { useState, useEffect } from "react";
import LoadingPage from "./components/LoadingPage";
import Dashboard from "./components/Dashboard";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a data fetch or delay
    setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 1000);
  }, []);

  return (
    <div className="bg-[#050505] font-poppins">
      {loading ? (
        <LoadingPage/>
      ) : (
        <div className='h-screen'>
          {/* now this is the real page which come after loading now for this it will first check with the user has login or not  */}
          <Dashboard/>
        </div>
      )}
    </div>
  );
}
