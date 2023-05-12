"use client";
import Image from "next/image";
import React from "react";
import Profpict from "./../../public/profpict.png";

type Props = {
  name: string;
  role: string;
};

const Profile = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#0A5F59] w-72 h-64 gap-1 rounded-t-3xl">
      <Image src={Profpict} alt="" width={65} height={65} />
      <div className="font-bold text-lg">{props.name}Bayu Wicaksono</div>
      <div className="text-gray-500">{props.role}Staf Akademik</div>
      <div className=""></div>
    </div>
  );
};

export default Profile;
