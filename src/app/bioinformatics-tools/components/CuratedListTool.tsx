import React from "react";

const CuratedListTool = ({ data, index }: { data: any; index: number }) => {
  return (
    <div className="flex flex-col gap-5 my-5">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
        Bioinformatics Tools - Curated List
      </h2>
      <div>
        <h4 className="text-xl font-semibold mb-5">
          {index + 1}. {data.name} :
        </h4>
        <ul className=" ml-10 flex flex-col gap-5">
          {data.data.map((item: any, index: number) => (
            <li key={index}>
              <h6 className="text-sm font-bold text-pink-500">{item.name}:</h6>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold">Description:</span>{" "}
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CuratedListTool;
