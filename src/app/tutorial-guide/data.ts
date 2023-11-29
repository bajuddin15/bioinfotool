const tutorialsData = [
  {
    name: "Getting Started",
    href: `/tutorial-guide/${getNameAsHref("Getting Started")}`,
    data: [
      {
        name: "Introduction to Bioinformatics",
        data: [
          "A beginner-friendly guide covering the basics of bioinformatics, including key concepts, tools, and common analyses.",
          "https://omicstutorials.com/?p=493",
        ],
      },
      {
        name: "Setting Up Your Bioinformatics Environment",
        data: [
          "Step-by-step instructions on configuring your bioinformatics environment, including essential software installations and configurations.",
          "https://xindong95.github.io/how-to-configure-a-bioinformatics-environment/",
        ],
      },
    ],
  },
  {
    name: "Sequence Analysis",
    href: `/tutorial-guide/${getNameAsHref("Sequence Analysis")}`,
    data: [
      {
        name: "Introduction to BLAST",
        data: [
          "Learn the fundamentals of Basic Local Alignment Search Tool (BLAST) for sequence alignment. Includes practical examples and tips for effective use.",
          "https://youtu.be/wc7bp4PkQPM?si=Zn3e_Gr9V7W2Hx5a",
        ],
      },
      {
        name: "FASTQC Tutorial",
        data: [
          "A hands-on guide to using FASTQC for quality control of high-throughput sequence data. Understand how to interpret results and improve data quality.",
          "https://youtu.be/bz93ReOv87Y?si=6Dd9TmWr7WiHn6km",
        ],
      },
      // Add other tutorials in Sequence Analysis here
    ],
  },
  {
    name: "Genomics",
    href: `/tutorial-guide/${getNameAsHref("Genomics")}`,
    data: [
      {
        name: "BEDTools Basics",
        data: [
          "Explore the basics of using BEDTools for manipulating genomic features. Walkthroughs and examples demonstrate its powerful functionalities.",
          "https://youtu.be/OCESUxaUxJE?si=toC_9h4RjZ8ZO94C",
        ],
      },
      {
        name: "Samtools Guide",
        data: [
          "Dive into the programs and commands of Samtools for interacting with high-throughput sequencing data. Learn efficient ways to handle SAM/BAM files.",
          "https://youtube.com/playlist?list=PLCUI3G058BiUpNP0t3yH_YapkihxO1bno&si=QzwZCNipvxzLb20y",
        ],
      },
      // Add other tutorials in Genomics here
    ],
  },
  {
    name: "Proteomics",
    href: `/tutorial-guide/${getNameAsHref("Proteomics")}`,
    data: [
      {
        name: "MaxQuant Tutorial",
        data: [
          "Comprehensive tutorial on MaxQuant for quantitative analysis of large-scale mass spectrometry data. Understand its features and optimize your proteomics workflow.",
          "https://youtu.be/S8aXguaMt1A?si=Bsa32dGMsRoDBCej",
        ],
      },
      {
        name: "Proteome Discoverer Guide",
        data: [
          "Step-by-step instructions on using Proteome Discoverer for mass spectrometry-based proteomics. Explore its data processing and visualization capabilities.",
          "https://youtu.be/zgc8itos5_4?si=gM-TCwtYMxp9cFzF",
        ],
      },
      // Add other tutorials in Proteomics here
    ],
  },
  {
    name: "Structural Bioinformatics",
    href: `/tutorial-guide/${getNameAsHref("Structural Bioinformatics")}`,
    data: [
      {
        name: "I-TASSER Tutorial",
        data: [
          "An in-depth guide to using I-TASSER for hierarchical protein structure prediction. Walkthroughs and examples for accurate modeling.",
          "https://youtu.be/XSxxMXJTvfM?si=3x1JFxCdmEhHV7X9",
        ],
      },
      {
        name: "PyMOL Basics",
        data: [
          "Learn the basics of PyMOL for molecular visualization. Create stunning molecular graphics and explore its scripting capabilities.",
          "https://youtu.be/6zuNyy5umJc?si=mMSeRSLHPAm-GmxW",
        ],
      },
      // Add other tutorials in Structural Bioinformatics here
    ],
  },
  {
    name: "Transcriptomics",
    href: `/tutorial-guide/${getNameAsHref("Transcriptomics")}`,
    data: [
      {
        name: "Cufflinks Walkthrough",
        data: [
          "Walkthrough on using Cufflinks for transcript assembly and differential expression analysis. Tips for interpreting results and optimizing analyses.",
          "https://youtu.be/sz6l9YG427g?si=F97bqDOVaxRN4D74",
        ],
      },
      // Add other tutorials in Transcriptomics here
    ],
  },
  {
    name: "Functional Annotation",
    href: `/tutorial-guide/${getNameAsHref("Functional Annotation")}`,
    data: [
      {
        name: "DAVID Resources Tutorial",
        data: [
          "Understand how to use DAVID Bioinformatics Resources for functional annotation and enrichment analysis. Unlock the biological insights hidden in your gene lists.",
          "https://youtu.be/EuCH5mqRylE?si=aA4Blp9PbB3Xovvg",
        ],
      },
      // Add other tutorials in Functional Annotation here
    ],
  },
  {
    name: "Molecular Docking",
    href: `/tutorial-guide/${getNameAsHref("Molecular Docking")}`,
    data: [
      {
        name: "AutoDock Vina Guide",
        data: [
          "Master the usage of AutoDock Vina for molecular docking and virtual screening. Tips for optimizing parameters and analyzing results.",
          "https://youtu.be/Sux91FJ3Xe8?si=qAqGkcvEDrT2qo-s",
        ],
      },
      {
        name: "SwissDock Tutorial",
        data: [
          "Step-by-step instructions on using SwissDock, leveraging the EADock DSS engine for accurate molecular docking.",
          "https://youtu.be/wof58PEf1yo?si=GWJsKr-ollEV4zGX",
        ],
      },
      // Add other tutorials in Molecular Docking here
    ],
  },
];

function getNameAsHref(name: string) {
  return name.toLowerCase().replace(/ /g, "-");
}

const useData = () => {
  const state = {
    tutorialsData,
  };
  return {
    state,
  };
};

export default useData;
