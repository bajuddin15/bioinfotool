const toolsData = [
  {
    name: "BLAST",
    description:
      "Basic Local Alignment Search Tool for comparing biological sequences.",
    userRating: "⭐⭐⭐⭐⭐ (5.0)",
    reviews: [
      "BLAST is an essential tool for every bioinformatician. It's fast, accurate, and easy to use!",
      "I use BLAST daily for my sequence alignment needs. It never disappoints.",
      "BLAST saved me countless hours of work. The results are always reliable.",
    ],
  },
  {
    name: "I-TASSER",
    description: "Hierarchical approach for protein structure prediction.",
    userRating: "⭐⭐⭐⭐⭐ (4.7)",
    reviews: [
      "I-TASSER consistently delivers accurate protein structure predictions. A go-to tool for structural bioinformatics.",
      "Easy to use, and the results are impressive. It has become an integral part of my protein structure work.",
      "I-TASSER's server is reliable, and the models generated are of high quality.",
    ],
  },
  {
    name: "GATK (Genome Analysis Toolkit)",
    description:
      "Toolkit for variant discovery in high-throughput sequencing data.",
    userRating: "⭐⭐⭐⭐⭐ (4.9)",
    reviews: [
      "GATK is a robust toolkit with excellent documentation. It's a staple for variant calling in genomics.",
      "I've been using GATK for years, and it never fails to deliver accurate variant calls. A must-have for genomic analysis.",
      "The best tool for sensitive and specific variant calling. Highly recommended for large-scale studies.",
    ],
  },
  {
    name: "AutoDock Vina",
    description: "Open-source molecular docking and virtual screening.",
    userRating: "⭐⭐⭐⭐⭐ (4.8)",
    reviews: [
      "AutoDock Vina is an exceptional tool for molecular docking studies. The accuracy and speed are unmatched, making it a staple in my research.",
      "I rely on AutoDock Vina for virtual screening projects. Its open-source nature and robust algorithms make it a go-to choice.",
      "The user-friendly interface of AutoDock Vina, coupled with its advanced features, has significantly improved my molecular docking workflows.",
    ],
  },
  {
    name: "QIIME 2",
    description:
      "Quantitative Insights Into Microbial Ecology for microbiome analysis.",
    userRating: "⭐⭐⭐⭐⭐ (4.9)",
    reviews: [
      "QIIME 2 is a game-changer for microbiome analysis. It's comprehensive, user-friendly, and provides accurate results.",
      "The visualizations in QIIME 2 are incredibly helpful for interpreting complex microbial community data. A must-have for any microbiologist.",
      "QIIME 2 has streamlined my microbiome research. The plugins cover a wide range of analyses, making it versatile for different projects.",
    ],
  },
  {
    name: "MaxQuant",
    description: "Quantitative analysis of large-scale mass spectrometry data.",
    userRating: "⭐⭐⭐⭐⭐ (4.9)",
    reviews: [
      "MaxQuant is a game-changer for proteomics research. Accurate quantification and user-friendly interface.",
      "The software's sensitivity and speed are unmatched.",
    ],
  },
  {
    name: "Cufflinks",
    description:
      "Assembles transcripts, estimates abundances, and tests for differential expression.",
    userRating: "⭐⭐⭐⭐ (4.3)",
    reviews: [
      "Cufflinks is a solid choice for transcriptomics. It handles complex RNA-Seq data well, and the differential expression analysis is robust.",
      "I've used Cufflinks for multiple projects, and it consistently delivers accurate transcript assemblies. The interface is intuitive and user-friendly.",
      "Cufflinks remains one of my go-to tools for RNA-Seq analysis. The statistical insights provided are invaluable for understanding gene expression patterns.",
    ],
  },
  {
    name: "RaptorX",
    description:
      "Deep learning-based tool for accurate and high-throughput protein structure prediction.",
    userRating: "⭐⭐⭐⭐⭐ (4.7)",
    reviews: [
      "RaptorX is a revolutionary tool for protein structure prediction. Its deep learning approach provides accurate models, saving time in my structural biology projects.",
      "The accuracy of RaptorX in predicting protein structures is impressive. It has become an essential part of my structural bioinformatics toolkit.",
      "RaptorX consistently outperforms other structure prediction tools. The user interface is straightforward, and the results are highly reliable.",
    ],
  },
  {
    name: "DAVID Bioinformatics Resources",
    description: "Functional annotation and enrichment analysis of gene lists.",
    userRating: "⭐⭐⭐⭐⭐ (4.6)",
    reviews: [
      "DAVID is a comprehensive resource for functional annotation. It simplifies the analysis of gene lists and provides valuable insights into biological functions.",
      "I've used DAVID for pathway analysis, and the results are consistently accurate. The interface is intuitive, making it accessible for researchers with varying levels of bioinformatics expertise.",
      "DAVID is my go-to for functional enrichment analysis. It's an invaluable tool for unraveling the biological significance of gene sets in my studies.",
    ],
  },
  {
    name: "SwissDock",
    description: "Functional annotation and enrichment analysis of gene lists.",
    userRating: "⭐⭐⭐⭐⭐ (4.6)",
    reviews: [
      "SwissDock is a comprehensive resource for functional annotation. It simplifies the analysis of gene lists and provides valuable insights into biological functions.",
      "I've used SwissDock for pathway analysis, and the results are consistently accurate. The interface is intuitive, making it accessible for researchers with varying levels of bioinformatics expertise.",
      "SwissDock is my go-to for functional enrichment analysis. It's an invaluable tool for unraveling the biological significance of gene sets in my studies.",
    ],
  },
  {
    name: "PyMOL",
    description: "Open-source molecular visualization system.",
    userRating: "⭐⭐⭐⭐ (4.4)",
    reviews: [
      "PyMOL is a versatile and powerful tool for visualizing molecular structures. Great for educational purposes.",
      "I appreciate the flexibility of PyMOL. It's my preferred choice for creating stunning molecular graphics.",
      "The scripting capabilities make PyMOL a favorite for customizing visualizations.",
    ],
  },
];

const useData = () => {
  const state = {
    toolsData,
  };
  return {
    state,
  };
};

export default useData;
