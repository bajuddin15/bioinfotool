import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const Page = () => {
  const data = [
    {
      name: "Sequence Analysis",
      href: getNameAsHref("Sequence Analysis"),
    },
    {
      name: "RNA Sequence Analysis Tools",
      href: getNameAsHref("RNA Sequence Analysis Tools"),
    },
    {
      name: "Protein Sequence Analysis Tools",
      href: getNameAsHref("Protein Sequence Analysis Tools"),
    },
    {
      name: "Protein Structure Prediction",
      href: getNameAsHref("Protein Structure Prediction"),
    },
    {
      name: "Molecular Docking Tools",
      href: getNameAsHref("Molecular Docking Tools"),
    },
    {
      name: "Structural Variant Analysis Tools",
      href: getNameAsHref("Structural Variant Analysis Tools"),
    },
    {
      name: "Genome Assembly Tools",
      href: getNameAsHref("Genome Assembly Tools"),
    },
    {
      name: "Genomic Variant Calling Tools",
      href: getNameAsHref("Genomic Variant Calling Tools"),
    },
    {
      name: "Comparative Genomics Tools",
      href: getNameAsHref("Comparative Genomics Tools"),
    },
    {
      name: "Differential Gene Expression Analysis Tools",
      href: getNameAsHref("Differential Gene Expression Analysis Tools"),
    },
    {
      name: "Phylogenetic Tree Construction Tools",
      href: getNameAsHref("Phylogenetic Tree Construction Tools"),
    },
    {
      name: "Metagenome Analysis Tools",
      href: getNameAsHref("Metagenome Analysis Tools"),
    },
    {
      name: "Systems Biology Modelling Tools",
      href: getNameAsHref("Systems Biology Modelling Tools"),
    },
  ];

  function getNameAsHref(name: string) {
    return name.toLowerCase().replace(/ /g, "-");
  }

  return (
    <Wrapper>
      {/* header */}
      <div className="flex flex-col gap-5 my-5">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Bioinformatics Tools - Curated List
        </h2>

        <div>
          <p className="text-sm text-muted-foreground mt-1 mb-5">
            Welcome to our curated list of popular bioinformatics tools. Explore
            a diverse set of tools organized into categories, each designed to
            enhance your bioinformatics research. Click on each tool to learn
            more about its features and applications.
          </p>
          <ul className="text-muted-foreground text-sm flex flex-col gap-4 mt-1">
            {data.map((list, index) => (
              <div key={index}>
                <Link href={list.href}>
                  <li>
                    <span className="font-semibold">
                      {index + 1}. {list.name}
                    </span>{" "}
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
