"use client";

import React, { useState, useEffect } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedFirstTime");

    if (!hasLoadedBefore) {

      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoadedFirstTime", "true");
      }, 2000); 

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen bg-black text-white">Loading...</div>;
  }

  return <>{children}</>;
}