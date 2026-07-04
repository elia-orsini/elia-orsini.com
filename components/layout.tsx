import React from "react";

export default function Layout(props) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-gray-100 text-red-600">
      <main className="mx-auto w-full flex-1">
        <div className="flex min-h-screen flex-col">{props.children}</div>
      </main>
    </div>
  );
}
