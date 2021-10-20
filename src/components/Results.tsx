import { MovieApi } from "interfaces/api/types";
import React from "react";
import { Thumbnail } from "./Thumbnail";
// import FlipMovie from "react-flip-move"
type Props = {
  results: MovieApi[];
};

export const Results: React.VFC<Props> = ({ results }: Props) => {
  return (
    <div className="sm:grid 3xl:flex flex-wrap md:grid-cols-2 xl:grid-cols-3 gap-3 justify-center px-4 my-4">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};
