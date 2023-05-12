"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Profile from "./Profile";

type Props = {};

const Sidebar = (props: Props) => {
  const arrlink: { url: any; name: string }[] = [
    { url: "/Dashboard", name: "Dashboard" },
    { url: "/AvailableStudent", name: "Available Student" },
    { url: "/MyProject", name: "My Project" },
    { url: "/PaymentSimulation", name: "Payment Simulation" },
    { url: "/SubmitPayment", name: "Submit Payment" },
  ];
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex flex-col fixed w-72 h-full rounded-3xl bg-[#252B42] text-white">
        <Profile name={''} role={''}/>
        {arrlink.map((value, index) => {
          const isActive = pathname?.startsWith(value.url);
          return (
            <Link
              key={index}
              className={
                isActive
                  ? "m-1 p-2 w-full rounded-l-3xl bg-[#DFEBE9] text-black"
                  : "m-1 p-2 w-full"
              }
              href={value.url}
            >
              <div className="flex flex-row text-size-lg">
                <div className="">❤️</div>
                <div className="">{value.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
