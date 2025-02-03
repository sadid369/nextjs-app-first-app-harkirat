import React from "react";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="p-4 border-b text-center">20% off for next 3 days</div>
      <div>{children}</div>
    </div>
  );
}
