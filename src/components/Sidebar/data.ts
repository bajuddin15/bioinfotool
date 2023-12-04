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
        {
          name: "Bioinformatics Toolkit",
          href: "/discover-toolkit",
        },
      ],
    },
    {
      name: "Featured Bioinformatics Tools",
      href: `/bioinformatics-tools/${getNameAsHref("BLAST")}`,
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
          href: `/bioinformatics-tools/${getNameAsHref("Sequence Analysis")}`,
        },
        {
          name: "RNA Sequence Analysis Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "RNA Sequence Analysis Tools"
          )}`,
        },
        {
          name: "Protein Sequence Analysis Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Protein Sequence Analysis Tools"
          )}`,
        },
        {
          name: "Protein Structure Prediction",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Protein Structure Prediction"
          )}`,
        },
        {
          name: "Molecular Docking Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Molecular Docking Tools"
          )}`,
        },
        {
          name: "Structural Variant Analysis Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Structural Variant Analysis Tools"
          )}`,
        },
        {
          name: "Genome Assembly Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Genome Assembly Tools"
          )}`,
        },
        {
          name: "Genomic Variant Calling Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Genomic Variant Calling Tools"
          )}`,
        },
        {
          name: "Comparative Genomics Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Comparative Genomics Tools"
          )}`,
        },
        {
          name: "Differential Gene Expression Analysis Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Differential Gene Expression Analysis Tools"
          )}`,
        },
        {
          name: "Phylogenetic Tree Construction Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Phylogenetic Tree Construction Tools"
          )}`,
        },
        {
          name: "Metagenome Analysis Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Metagenome Analysis Tools"
          )}`,
        },
        {
          name: "Systems Biology Modelling Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Systems Biology Modelling Tools"
          )}`,
        },
        {
          name: "Database And Retrieval Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Database And Retrieval Tools"
          )}`,
        },
        {
          name: "Functional Genomics Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Functional Genomics Tools"
          )}`,
        },
        {
          name: "Homology Modeling Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Homology Modeling Tools"
          )}`,
        },
        {
          name: "Microbiome Analysis Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Microbiome Analysis Tools"
          )}`,
        },
        {
          name: "Structural Bioinformatics Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Structural Bioinformatics Tools"
          )}`,
        },
        {
          name: "Miscelleaneous Tools",
          href: `/bioinformatics-tools/${getNameAsHref(
            "Miscelleaneous Tools"
          )}`,
        },
      ],
    },
    {
      name: "Tutorials and Guides",
      href: "/tutorial-guide",
      data: [
        {
          name: "Getting Started",
          href: `/tutorial-guide/${getNameAsHref("Getting Started")}`,
        },
        {
          name: "Sequence Analysis",
          href: `/tutorial-guide/${getNameAsHref("Sequence Analysis")}`,
        },
        {
          name: "Genomics",
          href: `/tutorial-guide/${getNameAsHref("Genomics")}`,
        },
        {
          name: "Proteomics",
          href: `/tutorial-guide/${getNameAsHref("Proteomics")}`,
        },
        {
          name: "Structural Bioinformatics",
          href: `/tutorial-guide/${getNameAsHref("Structural Bioinformatics")}`,
        },
        {
          name: "Transcriptomics",
          href: `/tutorial-guide/${getNameAsHref("Transcriptomics")}`,
        },
        {
          name: "Functional Annotation",
          href: `/tutorial-guide/${getNameAsHref("Functional Annotation")}`,
        },
        {
          name: "Molecular Docking",
          href: `/tutorial-guide/${getNameAsHref("Molecular Docking")}`,
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

// const tutorialsData = [
//   {
//     name: "Getting Started",
//     href: `/tutorial-guide/${getNameAsHref("Getting Started")}`,
//     data:[
//       {
//         name:"Introduction to Bioinformatics",
//         data:[
//           "A beginner-friendly guide covering the basics of bioinformatics, including key concepts, tools, and common analyses.",
//           "https://omicstutorials.com/?p=493"
//         ]
//       },

//     ]
//   },
// ]

const toolsList = [
  {
    name: "Sequence Analysis",
    data: [
      {
        name: "BLAST (Basic Local Alignment Search Tool)",
        description:
          ": A powerful tool for comparing a query sequence against a database, allowing for sequence similarity searches",
      },
    ],
  },
];
