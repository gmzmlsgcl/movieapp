import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzI2YjRmZGFhZmI0YmM5MmQ4N2UyYjYzMTdmMmI5MCIsIm5iZiI6MTczMzMwNzU5OS4wODA5OTk5LCJzdWIiOiI2NzUwMmNjZjIxZTFlYWNhYzZmMDIyNDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ltepT4pFoy0X3-pUS3Nn2sIj1iGmGaPagwU0SFiC7hA",
    },
  };

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
  if (!res.ok) throw new Error("Failed to fetch movie data");
  return res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const movie = await getMovie(id);
  console.log(movie, "MOVİE");

  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        width={200}
        height={300}
        alt={movie?.name || "Movie Poster"}
        src={
          `https://image.tmdb.org/t/p/original/` + movie?.poster_path ||
          movie?.backdrop_path
        }
      />
      <div className="absolute">
        <div className="text-2xl font-bold my-3">{movie?.name}</div>
      </div>
    </div>
  );
};

export default Page;
