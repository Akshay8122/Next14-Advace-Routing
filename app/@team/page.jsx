"use client";
import { deleteCookie } from "../lib/cookieBasedAuth";
import { getSignOut } from "../lib/getSignOut";
import Image from "next/image";
import { useRouter } from "next/navigation";
import YouTubeEmbed from "../lib/getIframeVideo";

export default function Team() {
  const router = useRouter();
  return (
    <>
      <div className="w-6/12 bg-gray-200">
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-red-500 m-3  rounded-md w-20 p-1.5  font-bold  text-white"
            onClick={async () => {
              deleteCookie();
              getSignOut();
              router.push("/login");
            }}
          >
            Logout
          </button>
        </div>
        <div>
          <h2 className="text-center justify-center  text-black text-3xl font-bold">
            Welcome to parallel route
          </h2>
        </div>
        <div className="mt-5">
          <YouTubeEmbed videoId="gfU1iZnjRZM" width={300} height={300} />
          <br />

          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuEynx9zEbXCWExlihi4xX1NJ-pkFNu4Fvzo_cONavRg&s"
            }
            alt="next-img"
            height={1000}
            width={800}
            quality={100}
            // fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </>
  );
}
