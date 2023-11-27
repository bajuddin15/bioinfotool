const useData = () => {
  const sidebarData = [
    {
      name: "Biotool Hub",
      href: "/",
      data: [
        {
          name: "Overview",
          href: "/",
        },
        {
          name: "Outlook",
          href: "/outlook",
        },
      ],
    },
    {
      name: "Featured Bioinformatics Tools",
      href: "/bioinformatics-tools",
      data: [
        {
          name: "BLAST",
          href: `/bioinformatics-tools/${getNameAsHref("BLAST")}`,
        },
        {
          name: "I-TASSER",
          href: `/bioinformatics-tools/${getNameAsHref("I-TASSER")}`,
        },
        {
          name: "GATK (Genome Analysis Toolkit)",
          href: `/bioinformatics-tools/${getNameAsHref("GATK")}`,
        },
        {
          name: "AutoDock Vina",
          href: `/bioinformatics-tools/${getNameAsHref("AutoDock Vina")}`,
        },
        {
          name: "QIIME 2",
          href: `/bioinformatics-tools/${getNameAsHref("QIIME2")}`,
        },
        {
          name: "MaxQuant",
          href: `/bioinformatics-tools/${getNameAsHref("MaxQuant")}`,
        },
        {
          name: "Cufflinks",
          href: `/bioinformatics-tools/${getNameAsHref("Cufflinks")}`,
        },
        {
          name: "RaptorX",
          href: `/bioinformatics-tools/${getNameAsHref("RaptorX")}`,
        },
        {
          name: "DAVID Bioinformatics Resources",
          href: `/bioinformatics-tools/${getNameAsHref(
            "DAVID Bioinformatics Resources"
          )}`,
        },
        {
          name: "SwissDock",
          href: `/bioinformatics-tools/${getNameAsHref("SwissDock")}`,
        },
        {
          name: "Pymol",
          href: `/bioinformatics-tools/${getNameAsHref("Pymol")}`,
        },
      ],
    },
    {
      name: "Bioinformatics Tools - Curated List",
      href: "/bioinformatics-tools/curated-list",
      data: [
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
      ],
    },
  ];

  function getNameAsHref(name: string) {
    return name.toLowerCase().replace(/ /g, "-");
  }

  const state = {
    sidebarData,
  };
  return {
    state,
  };
};

export default useData;

const data = [
  {
    name: "Sequence Analysis :",
    data: [
      {
        name: "BLAST (Basic Local Alignment Search Tool):",
        data: [
          {
            website: {
              name: "BLAST",
              href: "https://blast.com",
            },
            description:
              "A powerful tool for comparing a query sequence against a database, allowing for sequence similarity searches.",
          },
        ],
      },
    ],
  },
];
