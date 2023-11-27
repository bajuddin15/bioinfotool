import Wrapper from "@/components/Wrapper";
import React from "react";
import { Link } from "lucide-react";

const page = () => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-5 my-5">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Bioinformatics Tools - Curated List
        </h2>
        <div>
          <h4 className="text-xl font-semibold mb-5">Sequence Analysis :</h4>
          <ul className="list-disc ml-10 flex flex-col gap-5">
            <li>
              <h6 className="text-base font-bold text-yellow-500">
                BLAST (Basic Local Alignment Search Tool):
              </h6>
              <ul className="ml-10 text-sm text-muted-foreground flex flex-col space-y-1">
                <li className="flex items-center gap-2">
                  <span className="font-bold">Website:</span>
                  <a
                    href=""
                    target="_blank"
                    className="flex items-center gap-2 text-blue-500"
                  >
                    BLAST <Link size={16} color="blue" />
                  </a>
                </li>
                <li>
                  <span className="font-bold">Description:</span> A powerful
                  tool for comparing a query sequence against a database,
                  allowing for sequence similarity searches.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default page;
