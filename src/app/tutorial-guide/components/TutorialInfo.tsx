import React from "react";

const TutorialInfo = ({ data, index }: { data: any; index: number }) => {
  return (
    <div className="flex flex-col gap-5 my-5">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
        Tutorials and Guides
      </h2>
      <div className="flex flex-col gap-5 text-muted-foreground">
        <div className="text-sm">
          <h4 className="text-lg font-bold">
            {index + 1}. {data.name} :
          </h4>
          <ul className="list-disc ml-10 mt-2 flex flex-col gap-3">
            {data.data.map((item: any, index: number) => (
              <div key={index}>
                <li className="text-yellow-500">{item.name}</li>
                <ul className="list-disc ml-10 mt-1 flex flex-col gap-3">
                  {item.data.map((inerItem: string, index: number) => (
                    <li
                      key={index}
                      className={`${
                        index === 1 ? "text-blue-500 underline" : ""
                      } whitespace-normal break-words`}
                    >
                      {inerItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutorialInfo;
