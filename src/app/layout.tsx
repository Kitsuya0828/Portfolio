"use client";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      
        <body>
            {children}
        </body>
      
    </html>
  );
}