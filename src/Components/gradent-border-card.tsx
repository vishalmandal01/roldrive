import React from "react";

export default function GradentBorderCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="h-[42px] w-[48px] flex items-center justify-center "
      style={{
        background: "linear-gradient(161.03deg, #FDC65C 9.06%, #4A4A4A 92.27%)",
        borderRadius: "8px",
        padding: "2px",
      }}
    >
      <div
        style={{
          background: "#20313F",
          borderRadius: "6px",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        {children}
      </div>
    </div>
  );
}
