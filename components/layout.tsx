import React from "react";
import { ioskeleyMono } from "../lib/fonts";

export default function Layout(props) {
  return (
    <div
      className={`${ioskeleyMono.variable} ${ioskeleyMono.className} flex min-h-screen flex-col overflow-x-hidden bg-gray-100 text-red-600`}
    >
      <main className="mx-auto w-full flex-1">
        <div className="flex min-h-screen flex-col">{props.children}</div>
      </main>
    </div>
  );
}
