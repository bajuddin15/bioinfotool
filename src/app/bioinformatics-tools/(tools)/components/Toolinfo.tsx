import React from "react";

interface IProps {
  data: any;
  index: number;
}
const Toolinfo: React.FC<IProps> = ({ data, index }) => {
  return (
    <div className="flex flex-col gap-5 my-5">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
        Featured Bioinformatics Tools
      </h2>
      <div className="flex flex-col gap-5 text-muted-foreground">
        <h4 className="text-lg font-bold">
          {index + 1}. {data.name}
        </h4>
        <p className="text-sm">
          <span className="font-bold text-slate-500">Description : </span>
          {data.description}
        </p>
        <p className="text-sm">
          <span className="font-bold text-slate-500">User Rating : </span>
          {data.userRating}
        </p>
        <div className="text-sm">
          <h4 className="font-bold text-slate-500">Reviews : </h4>
          <ul className="list-disc ml-10 mt-2 flex flex-col gap-3">
            {data.reviews.map((review: string, index: number) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Toolinfo;
