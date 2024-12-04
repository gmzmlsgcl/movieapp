"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Tabs() {
  const searchParams = useSearchParams();
  const genre = searchParams.get(`genre`);
  const tabs = [
    {
      name: "en popüler",
      url: "popular",
    },
    {
      name: "en son",
      url: "latest",
    },
    {
      name: "yakında gelecekler",
      url: "upcoming",
    },
  ];
  return (
    <div className="p-5 my-5 bg-gray-200 dark:bg-gray-900 flex items-center justify-center gap-7">
      {tabs.map((tab, i) => (
        <Link
          key={i}
          className={`cursor-pointer hover:opacity-75 transition-opacity ${
            tab.url === genre ? "underline underline-offset-8" : ""
          }`}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}

export default Tabs;
