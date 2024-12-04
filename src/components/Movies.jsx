"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ res }) => {
  const router = useRouter();
  console.log(res?.id, "RESİD");
  return (
    <div
      onClick={() => res?.id && router.push(`/movie/${res?.id}`)}
      className="w-[250px] h-[300px] relative"
    >
      <Image
        width={200}
        height={300}
        alt={res?.name || "Movie Poster"}
        src={
          `https://image.tmdb.org/t/p/original/` + res.poster_path ||
          res?.backdrop_path
        }
      />
      <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-xl font-bold cursor-pointer">{res?.name}</div>
        <div>
          {res?.vote_average}- {res?.first_air_date}
        </div>
      </div>
    </div>
  );
};

export default Movies;
