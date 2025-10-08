// src/app/ClientWrapper.tsx
"use client";
import { useState, useEffect } from "react";
import PackmanLoader from "./components/PackmanLoader";
import HomeSection from "./components/Home";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PackmanLoader />;

  return <>{children}</>;
}
