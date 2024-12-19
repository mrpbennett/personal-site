"use client";

import { useEffect, useState } from "react";

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only run client-side code after component is mounted
  if (!isMounted) {
    return null; // or a loading state
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
    </div>
  );
}
