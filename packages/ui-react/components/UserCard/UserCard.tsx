import React from "react";
import type { User } from "@acme/types";
import Image from "next/image";
import { Skeleton } from "../Skeleton";

export interface UserCardProps {
  name: string;
  avatar_url: User["avatar_url"];
}

const UserCard: React.FC<UserCardProps> = ({ name, avatar_url }) => {
  return (
    <div className="flex w-full max-w-[18rem] items-center gap-x-3 sm:max-w-lg md:max-w-xl">
      <div className="relative aspect-square min-w-[3rem] overflow-hidden rounded-full">
        <Skeleton animationDuration={2000} circle />
        <Image alt="Avatar" src={avatar_url} fill />
      </div>
      <span className="break-all text-left text-lg font-semibold text-primary-500 sm:text-xl">
        {name}
      </span>
    </div>
  );
};

export default UserCard;
