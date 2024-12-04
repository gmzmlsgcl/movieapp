import Movies from "@/components/Movies";
import React from "react";

const page = async ({ searchParams }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTRkMGU2YTVmN2UwYmZiODAyYjQ4NzkzZDhkZjNiYiIsIm5iZiI6MTczMjg3NjM1Ny41NDg5MzI4LCJzdWIiOiI2NzNmMWIxOTc2NGRhNDI1MWU4NzdlMzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ZpXDQOS966g1EE8j9mRGT5ieRbbom4t9JsxvSIWF77c",
    },
  };

  const data = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    options
  )
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => console.error(err));

  // console.log(searchParams.genre, "searchParams");
  // console.log(res, "res");
  console.log(data, "data");

  return (
    <div className="flex items-center just flex-wrap gap-3">
      {data.results?.map((res, i) => (
        <Movies key={i} res={res} />
      ))}
    </div>
  );
};

export default page;
