import React from "react";
import Image from "next/image";
import type { GetUserDetailsResponse } from "@acme/types";
import { Button } from "../Button";
import { Link } from "../Link";
import { BsGithub } from "react-icons/bs";
import { Skeleton } from "../Skeleton";
import { AiFillHome } from "react-icons/ai";

export const allowedInfo = [
  "name",
  "login",
  "company",
  "location",
  "followers",
  "following",
  "public_repos",
  "avatar_url",
];

const UserDetails: React.FC<GetUserDetailsResponse> = ({
  name,
  avatar_url,
  ...rest
}) => {
  return (
    <div className="mx-auto flex max-w-xl flex-wrap justify-between gap-y-8">
      <div className="flex w-full flex-col gap-y-3 md:w-[45%]">
        <div className="relative mx-auto aspect-square w-60 overflow-hidden rounded-full md:w-full">
          <Skeleton animationDuration={2000} circle />
          <Image alt="Avatar" src={avatar_url} fill />
        </div>
        <span className="text-center text-2xl font-semibold text-primary-500 md:text-3xl">
          {name}
        </span>
      </div>
      <div className="flex w-full flex-col justify-center md:w-[45%]">
        <div className="flex w-full flex-col gap-y-2">
          {Object.keys(rest).map((key) => {
            type Key = keyof typeof rest;

            if (!allowedInfo.includes(key as Key)) return;

            return (
              <div key={key} className="flex w-full gap-x-4">
                <span className="w-1/2 font-semibold capitalize">
                  {key.replaceAll("_", " ")}
                </span>
                <span className="w-1/2 break-all">{rest[key as Key]}</span>
              </div>
            );
          })}
        </div>
        <Button
          className="mt-6 mb-3 self-start"
          component={Link}
          external
          href={rest.html_url}
          icon={BsGithub}
        >
          Visit Github Profile
        </Button>
        <Button
          className="self-start"
          icon={AiFillHome}
          component={Link}
          href={"/"}
        >
          Back to home
        </Button>
      </div>
    </div>
  );
};

export default UserDetails;
