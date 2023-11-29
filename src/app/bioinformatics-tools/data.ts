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

const toolsList = [
  {
    name: "Sequence Analysis",
    data: [
      {
        name: "BLAST (Basic Local Alignment Search Tool)",
        description:
          "A powerful tool for comparing a query sequence against a database, allowing for sequence similarity searches.",
      },
      {
        name: "Samtools",
        description:
          "A suite of programs for interacting with high-throughput sequencing data, including file format conversion and variant calling.",
      },
      {
        name: "BEDTools",
        description:
          "A set of utilities for manipulating genomic features, such as intersecting and merging datasets.",
      },
      {
        name: "BioPython",
        description:
          "A collection of tools for biological computation in Python, offering interfaces for sequence analysis and manipulation.",
      },
      {
        name: "HMMER",
        description:
          "Software suite for protein sequence similarity searches using profile hidden Markov models (HMMs).",
      },
      {
        name: "MAFFT (Multiple Alignment using Fast Fourier Transform)",
        description:
          "A tool for multiple sequence alignment, particularly useful for large datasets.",
      },
      {
        name: "EMBOSS",
        description:
          "A bioinformatics software package that includes over 100 command-line tools for sequence analysis and annotation.",
      },
      {
        name: "Trimmomatic",
        description:
          "A tool for trimming and filtering Illumina NGS data, particularly useful for preprocessing raw sequence reads.",
      },
      {
        name: "IGV (Integrative Genomics Viewer)",
        description:
          "A high-performance visualization tool for interactive exploration of large, integrated genomic datasets.",
      },
      {
        name: "UCSC Genome Browser",
        description:
          "An interactive web-based tool for visualizing and exploring genomic data, including DNA sequences.",
      },
    ],
  },
  {
    name: "RNA Sequence analysis Tools",
    data: [
      {
        name: "TopHat and HISAT (Hierarchical Indexing for Spliced Alignment of Transcripts)",
        description:
          "Used for mapping RNA-Seq reads to a genome, allowing the identification of splicing events.",
      },
      {
        name: "STAR (Spliced Transcripts Alignment to a Reference)",
        description:
          "High-performance RNA-Seq aligner for spliced alignments, enabling the discovery of novel and known splice junctions.",
      },
      {
        name: "Cufflinks",
        description:
          "Assembles transcripts, estimates their abundances, and tests for differential expression and regulation.",
      },
      {
        name: "DESeq2 and edgeR",
        description:
          "Tools for differential expression analysis, helping identify genes with significant changes in expression between conditions.",
      },
      {
        name: "StringTie",
        description:
          "Assembles and quantifies transcript expression from RNA-Seq data, particularly useful for novel transcript discovery.",
      },
      {
        name: "Salmon",
        description:
          "A fast and accurate transcript quantification method, providing robust quantification of transcript abundance.",
      },
      {
        name: "BEDTools",
        description:
          "A suite of tools for manipulating genomic features, useful for intersecting, merging, and comparing datasets.",
      },
      {
        name: "FeatureCounts",
        description:
          "Counts mapped reads for genomic features such as genes, exons, and transcripts.",
      },
      {
        name: "RSEM (RNA-Seq by Expectation Maximization)",
        description:
          "Estimates gene and isoform expression levels from RNA-Seq data, providing quantification at both gene and isoform levels.",
      },
      {
        name: "HISAT2 (Hierarchical Indexing for Spliced Alignment of Transcripts 2)",
        description:
          "A fast and sensitive alignment program for mapping RNA-Seq reads to a genome.",
      },
    ],
  },
  {
    name: "Protein Sequence Analysis Tools",
    data: [
      {
        name: "BLASTp (Basic Local Alignment Search Tool for proteins)",
        website: "BLASTp",
        description:
          "Performs protein sequence similarity searches against a protein sequence database.",
      },
      {
        name: "InterProScan",
        website: "InterProScan",
        description:
          "Scans protein sequences against InterPro's signatures to predict domains and functional sites.",
      },
      {
        name: "NCBI CDD (Conserved Domain Database)",
        website: "CDD",
        description:
          "Identifies conserved domains in protein sequences using position-specific scoring matrices.",
      },
      {
        name: "SMART (Simple Modular Architecture Research Tool)",
        website: "SMART",
        description:
          "Identifies protein domains, families, and motifs in protein sequences.",
      },
      {
        name: "Pfam",
        website: "Pfam",
        description:
          "A large database of protein families, each represented by multiple sequence alignments and hidden Markov models.",
      },
      {
        name: "Protein BLAST (PSI-BLAST)",
        website: "PSI-BLAST",
        description:
          "An iterative version of BLASTp that helps to detect distant homologs.",
      },
      {
        name: "Clustal Omega",
        website: "Clustal Omega",
        description:
          "Performs multiple sequence alignment for protein sequences.",
      },
      {
        name: "HMMER",
        website: "HMMER",
        description:
          "Utilizes profile hidden Markov models for sequence alignment and searching.",
      },
      {
        name: "Phyre2 (Protein Homology/analogY Recognition Engine V 2.0)",
        website: "Phyre2",
        description:
          "Predicts protein structure and function based on homologous templates.",
      },
      {
        name: "SWISS-MODEL",
        website: "SWISS-MODEL",
        description: "An automated protein structure homology-modeling server.",
      },
      {
        name: "TMHMM (TransMembrane prediction using Hidden Markov Models)",
        website: "TMHMM",
        description: "Predicts transmembrane helices in protein sequences.",
      },
      {
        name: "SignalP",
        website: "SignalP",
        description:
          "Predicts the presence and location of signal peptide cleavage sites in protein sequences.",
      },
      {
        name: "ProtParam",
        website: "ProtParam",
        description:
          "Computes various physical and chemical parameters for a protein sequence.",
      },
      {
        name: "Protein Structure Prediction Center (CASP)",
        website: "CASP",
        description:
          "Participate in community-wide experiments for the prediction of protein structure.",
      },
      {
        name: "Protein Data Bank (PDB)",
        website: "PDB",
        description:
          "Access a repository of experimentally determined three-dimensional structures of biological macromolecules.",
      },
    ],
  },
  {
    name: "Protein Structure Prediction",
    data: [
      {
        name: "I-TASSER (Iterative Threading ASSEmbly Refinement)",
        website: "I-TASSER",
        description:
          "An iterative method that combines threading, ab initio modeling, and atomic-level structure refinement.",
      },
      {
        name: "SWISS-MODEL",
        website: "SWISS-MODEL",
        description:
          "An automated protein structure homology-modeling server that generates 3D models based on known structures.",
      },
      {
        name: "AlphaFold",
        website: "AlphaFold",
        description:
          "Developed by DeepMind, AlphaFold uses deep learning techniques to predict protein structure with remarkable accuracy.",
      },
      {
        name: "RaptorX",
        website: "RaptorX",
        description:
          "A deep learning-based method for protein structure prediction and contact map prediction.",
      },
      {
        name: "Rosetta",
        website: "Rosetta",
        description:
          "A suite of software tools for macromolecular modeling and protein structure prediction using a variety of methods.",
      },
      {
        name: "Phyre2 (Protein Homology/analogY Recognition Engine V 2.0)",
        website: "Phyre2",
        description:
          "Predicts protein structure and function based on homology modeling, threading, and ab initio methods.",
      },
      {
        name: "Modeller",
        website: "Modeller",
        description:
          "A software package for homology or comparative modeling of protein three-dimensional structures.",
      },
      {
        name: "QUARK",
        website: "QUARK",
        description:
          "An ab initio protein structure prediction server that combines fragment assembly and iterative refinement.",
      },
      {
        name: "ROSETTA (Rosetta Online Server that Includes Everyone)",
        website: "ROSETTA",
        description:
          "An online platform for protein structure prediction using the ROSETTA software.",
      },
      {
        name: "HHPred (Homology detection and structure prediction by HMM-HMM comparison)",
        website: "HHPred",
        description:
          "Integrates homology detection and structure prediction based on hidden Markov models.",
      },
      {
        name: "PHYREX (Protein Homology/analogY Recognition Engine)",
        website: "PHYREX",
        description:
          "An extension of Phyre2 that provides additional features for more accurate structure predictions.",
      },
      {
        name: "C-I-TASSER (Contact-assisted Iterative Threading ASSEmbly Refinement)",
        website: "C-I-TASSER",
        description:
          "Integrates contact maps into the I-TASSER pipeline for improved accuracy.",
      },
      {
        name: "SWISS-MODEL Workspace",
        website: "SWISS-MODEL Workspace",
        description:
          "Allows users to interactively build and evaluate homology models using the SWISS-MODEL pipeline.",
      },
      {
        name: "GenTHREADER",
        website: "GenTHREADER",
        description:
          "A web-based tool for protein fold recognition and 3D structure prediction.",
      },
      {
        name: "Robetta Server",
        website: "Robetta Server",
        description:
          "An automated protein structure prediction server using the ROSETTA software.",
      },
    ],
  },
  {
    name: "Molecular Docking Tools",
    data: [
      {
        name: "AutoDock Vina",
        website: "AutoDock Vina",
        description:
          "An open-source molecular docking program known for its speed and accuracy in predicting ligand-protein binding.",
      },
      {
        name: "SwissDock",
        website: "SwissDock",
        description:
          "Provided by the Swiss Institute of Bioinformatics, SwissDock is an online docking service using the EADock DSS engine.",
      },
      {
        name: "DOCK",
        website: "DOCK",
        description:
          "A suite of programs for molecular docking and virtual screening, widely used in academia and industry.",
      },
      {
        name: "HADDOCK (High Ambiguity Driven biomolecular DOCKing)",
        website: "HADDOCK",
        description:
          "Integrates experimental or bioinformatics-driven information to guide the docking process.",
      },
      {
        name: "FlexPepDock",
        website: "FlexPepDock",
        description:
          "Part of the Rosetta suite, designed specifically for peptide docking.",
      },
      {
        name: "PatchDock",
        website: "PatchDock",
        description:
          "A geometry-based molecular docking algorithm that is particularly useful for unbound structures.",
      },
      {
        name: "ZDOCK (ZLab DOCKing algorithm)",
        website: "ZDOCK",
        description:
          "A fast Fourier transform-based molecular docking program for predicting protein-protein interactions.",
      },
      {
        name: "ClusPro",
        website: "ClusPro",
        description:
          "An online server for protein-protein, protein-peptide, and protein-DNA docking.",
      },
      {
        name: "Hex",
        website: "Hex",
        description:
          "A fast Fourier transform-based docking program for predicting protein-protein interactions.",
      },
      {
        name: "PyRx (Python Prescription)",
        website: "PyRx",
        description:
          "A virtual screening software for computational drug discovery that utilizes AutoDock Vina.",
      },
      {
        name: "GRAMM-X",
        website: "GRAMM-X",
        description:
          "A protein-protein docking prediction server that uses an FFT-based approach.",
      },
      {
        name: "FRED (Fast Rigid Exhaustive Docking)",
        website: "FRED",
        description:
          "A high-performance docking program for ligand-based virtual screening.",
      },
      {
        name: "ArgusLab",
        website: "ArgusLab",
        description:
          "A molecular modeling, graphics, and drug design program with docking capabilities.",
      },
      {
        name: "iDock",
        website: "iDock",
        description:
          "An integrative approach that combines molecular dynamics simulations with docking.",
      },
      {
        name: "VinaMPI",
        website: "VinaMPI",
        description:
          "A parallel version of AutoDock Vina for high-throughput virtual screening.",
      },
    ],
  },
  {
    name: "Structural Variant Analysis Tools",
    data: [
      {
        name: "Manta",
        website: "Manta",
        description:
          "A structural variant caller that identifies large indels and SVs from Illumina sequencing data.",
      },
      {
        name: "Delly",
        website: "Delly",
        description:
          "A structural variant discovery tool that integrates short-range and long-range paired-end mapping information.",
      },
      {
        name: "Lumpy",
        website: "Lumpy",
        description:
          "A probabilistic framework for structural variant discovery using multiple alignment signals.",
      },
      {
        name: "GRIDSS (Gaussian Regression-based Identification of Deletions, Insertions, and Structural Substitutions)",
        website: "GRIDSS",
        description:
          "A tool for sensitive and specific detection of genomic rearrangements using split-read analysis.",
      },
      {
        name: "BreakDancer",
        website: "BreakDancer",
        description:
          "An algorithm for the detection of genomic structural variation from paired-end sequencing data.",
      },
      {
        name: "Pindel",
        website: "Pindel",
        description:
          "A program for detecting breakpoints of large deletions, medium-sized insertions, inversions, tandem duplications, and other structural variants.",
      },
      {
        name: "TIDDIT (TITAN Integrated Deletion Detection)",
        website: "TIDDIT",
        description:
          "A tool for detecting deletions from large-scale sequencing data.",
      },
      {
        name: "SoftSV",
        website: "SoftSV",
        description:
          "A tool for visualizing and analyzing structural variants from aligned sequence data.",
      },
      {
        name: "Sniffles",
        website: "Sniffles",
        description:
          "A structural variation caller that uses third-generation sequencing data (PacBio or Oxford Nanopore).",
      },
      {
        name: "BioGraph",
        website: "BioGraph",
        description:
          "A comprehensive platform for analyzing structural variants using a combination of short-read and linked-read sequencing technologies.",
      },
      {
        name: "Delly2",
        website: "Delly2",
        description:
          "An updated version of Delly, providing improved structural variant detection.",
      },
      {
        name: "MELT (Mobile Element Locator Tool)",
        website: "MELT",
        description:
          "A tool designed for mobile element insertion detection and structural variant discovery.",
      },
      {
        name: "Crest",
        website: "Crest",
        description:
          "A tool for the detection of genomic structural variation in diverse types of high-throughput sequencing data.",
      },
      {
        name: "SVABA (Structural Variant Assembly by Breakpoint Analysis)",
        website: "SVABA",
        description:
          "A structural variant caller that integrates information from split reads and discordant paired-end reads.",
      },
      {
        name: "Mosaic Alterations Detector (MAD)",
        website: "MAD",
        description:
          "A tool designed for the detection of mosaic structural variations using deep sequencing data.",
      },
    ],
  },
  {
    name: "Genome Assembly Tools",
    data: [
      {
        name: "SPAdes (St. Petersburg Genome Assembler)",
        website: "SPAdes",
        description:
          "An assembler designed for single-cell and multi-cell bacterial genome projects, as well as small eukaryotic genomes.",
      },
      {
        name: "MaSuRCA (Maryland Super-Read Celera Assembler)",
        website: "MaSuRCA",
        description:
          "A hybrid assembler that uses both short and long reads to improve assembly quality.",
      },
      {
        name: "SOAPdenovo2",
        website: "SOAPdenovo2",
        description:
          "A tool for de novo genome assembly using short reads, designed for scalability and efficiency.",
      },
      {
        name: "ALLPATHS-LG",
        website: "ALLPATHS-LG",
        description:
          "A whole-genome shotgun assembler designed for high-quality de novo genome assembly.",
      },
      {
        name: "Canu",
        website: "Canu",
        description:
          "A single-molecule sequence assembler for long-read sequencing technologies such as PacBio and Oxford Nanopore.",
      },
      {
        name: "Flye",
        website: "Flye",
        description:
          "An assembler for long and error-prone reads, particularly designed for small genomes.",
      },
      {
        name: "Miniasm",
        website: "Miniasm",
        description:
          "A minimalistic assembler that works well with long-read sequencing technologies.",
      },
      {
        name: "Celera Assembler (CABOG)",
        website: "Celera Assembler",
        description:
          "Originally developed for the Human Genome Project, it is suitable for assembling large and complex genomes.",
      },
      {
        name: "SPAdes Meta",
        website: "SPAdes Meta",
        description:
          "An extension of SPAdes for metagenomic data, capable of handling complex microbial communities.",
      },
      {
        name: "ABySS",
        website: "ABySS",
        description:
          "A de Bruijn graph-based assembler designed for short-read sequencing data.",
      },
      {
        name: "IDBA-UD (Iterative De Bruijn Graph Assembler for Short-Read Data)",
        website: "IDBA-UD",
        description:
          "An iterative assembler that progressively refines the assembly using longer k-mers.",
      },
      {
        name: "MetaSPAdes",
        website: "MetaSPAdes",
        description:
          "An extension of SPAdes designed specifically for metagenomic datasets.",
      },
      {
        name: "Velvet",
        website: "Velvet",
        description:
          "Uses de Bruijn graphs for short read assembly and is particularly effective for small genomes.",
      },
      {
        name: "Newbler (GS De Novo Assembler)",
        website: "Newbler",
        description:
          "Originally developed for 454 sequencing data, it supports de novo assembly of both short and long reads.",
      },
      {
        name: "Shovill",
        website: "Shovill",
        description:
          "A pipeline for assembling bacterial genomes from Illumina sequencing data.",
      },
    ],
  },
  {
    name: "Genomic Variant Calling Tools",
    data: [
      {
        name: "GATK (Genome Analysis Toolkit)",
        website: "GATK",
        description:
          "A toolkit developed by the Broad Institute for variant discovery in high-throughput sequencing data, supporting germline and somatic variant calling.",
      },
      {
        name: "Samtools",
        website: "Samtools",
        description:
          "A suite of programs for interacting with high-throughput sequencing data, including variant calling and format conversion.",
      },
      {
        name: "BCFtools",
        website: "BCFtools",
        description:
          "A set of utilities for variant calling and manipulation of variant call files (VCFs) generated by Samtools.",
      },
      {
        name: "VarScan",
        website: "VarScan",
        description:
          "A platform-independent variant caller for detecting germline and somatic variants in NGS data.",
      },
      {
        name: "FreeBayes",
        website: "FreeBayes",
        description:
          "A Bayesian genetic variant detector that is designed for calling SNPs, indels, and complex variants.",
      },
      {
        name: "Platypus",
        website: "Platypus",
        description:
          "A variant caller designed for detecting SNPs, indels, and complex mutations in both germline and somatic contexts.",
      },
      {
        name: "MuTect2",
        website: "MuTect2",
        description:
          "A part of the GATK toolkit, MuTect2 is specifically designed for somatic mutation detection in cancer genomes.",
      },
      {
        name: "SNVer",
        website: "SNVer",
        description:
          "A statistical tool for variant calling in populations using next-generation sequencing data.",
      },
      {
        name: "Scalpel",
        website: "Scalpel",
        description:
          "A variant discovery software designed for detecting substitutions, insertions, and deletions in whole-genome sequencing data.",
      },
      {
        name: "DeepVariant",
        website: "DeepVariant",
        description:
          "Developed by Google, DeepVariant uses deep learning to call variants from genomic sequencing data.",
      },
      {
        name: "VarDict",
        website: "VarDict",
        description:
          "A variant caller for both germline and somatic variants, known for its speed and sensitivity.",
      },
      {
        name: "Strelka",
        website: "Strelka",
        description:
          "A somatic variant caller designed to identify small variants in tumor-normal paired sequencing data.",
      },
      {
        name: "LoFreq",
        website: "LoFreq",
        description:
          "A variant caller for detecting rare variants in deep sequencing data.",
      },
      {
        name: "VarScan 2",
        website: "VarScan 2",
        description:
          "The second version of VarScan, supporting both germline and somatic variant calling.",
      },
      {
        name: "SNPTools",
        website: "SNPTools",
        description:
          "A suite of tools for the analysis of high-throughput sequencing data, including variant calling and annotation.",
      },
    ],
  },
  {
    name: "Comparative Genomics Tools",
    data: [
      {
        name: "BLAST (Basic Local Alignment Search Tool)",
        website: "BLAST",
        description:
          "BLAST is widely used for sequence similarity searches, helping to identify homologous genes and genomic regions across different species.",
      },
      {
        name: "Mauve",
        website: "Mauve",
        description:
          "A software package for aligning and visualizing multiple genome sequences, particularly useful for detecting genomic rearrangements.",
      },
      {
        name: "Artemis Comparison Tool (ACT)",
        website: "ACT",
        description:
          "ACT is used for visualizing comparisons between two or more DNA sequences or annotations.",
      },
      {
        name: "OrthoMCL",
        website: "OrthoMCL",
        description:
          "An algorithm for identifying orthologous protein-coding genes in multiple genomes, helping to define gene families.",
      },
      {
        name: "SyntenyMapper",
        website: "SyntenyMapper",
        description:
          "A tool for visualizing synteny blocks and rearrangements between two or more genomes.",
      },
      {
        name: "QUAST (Quality Assessment Tool for Genome Assemblies)",
        website: "QUAST",
        description:
          "QUAST is used to evaluate and compare the quality of genome assemblies, providing comprehensive statistics and visualizations.",
      },
      {
        name: "EDGAR (Efficient Database framework for comparative Genome Analyses using BLAST score Ratios)",
        website: "EDGAR",
        description:
          "EDGAR is a bioinformatics platform for comparative genomics, facilitating the analysis of microbial genomes.",
      },
      {
        name: "RVIZ (RNA-seq VISualization)",
        website: "RVIZ",
        description:
          "RVIZ is a tool for visualizing and comparing RNA-seq data across multiple samples or conditions.",
      },
      {
        name: "Roary",
        website: "Roary",
        description:
          "Roary is a tool for rapidly annotating bacterial genomes and identifying core and accessory genes.",
      },
      {
        name: "OrthoFinder",
        website: "OrthoFinder",
        description:
          "OrthoFinder is a tool for identifying orthogroups and orthologous genes in multiple genomes.",
      },
      {
        name: "BRIG (BLAST Ring Image Generator)",
        website: "BRIG",
        description:
          "BRIG generates circular comparison figures for multiple genomes based on BLAST comparisons.",
      },
      {
        name: "Geneious Prime",
        website: "Geneious Prime",
        description:
          "Geneious Prime is a comprehensive bioinformatics software platform that includes tools for comparative genomics.",
      },
      {
        name: "GenoPlotR",
        website: "GenoPlotR",
        description:
          "GenoPlotR is an R package for generating static and interactive plots of genomic data.",
      },
      {
        name: "CMG-biotools",
        website: "CMG-biotools",
        description:
          "A collection of tools for comparative microbial genomics, including gene prediction and annotation.",
      },
      {
        name: "EGGNOG (Evolutionary Gene and Orthologous Group Nomenclature)",
        website: "EGGNOG",
        description:
          "EGGNOG provides a database of orthologous groups and functional annotations across multiple organisms.",
      },
    ],
  },
  {
    name: "Differential Gene Expression Analysis Tools",
    data: [
      {
        name: "DESeq2",
        website: "DESeq2",
        description:
          "An R/Bioconductor package for differential gene expression analysis using negative binomial generalized linear models.",
      },
      {
        name: "edgeR",
        website: "edgeR",
        description:
          "An R/Bioconductor package for differential expression analysis of digital gene expression data.",
      },
      {
        name: "limma",
        website: "limma",
        description:
          "An R/Bioconductor package for the analysis of gene expression microarray and RNA-seq data.",
      },
      {
        name: "Cufflinks/Cuffdiff",
        website: "Cufflinks",
        description:
          "A suite of tools for transcriptome assembly and differential expression analysis of RNA-seq data.",
      },
      {
        name: "Ballgown",
        website: "Ballgown",
        description:
          "An R/Bioconductor package for flexible, interactive differential expression analysis of RNA-seq data.",
      },
      {
        name: "Sleuth",
        website: "Sleuth",
        description:
          "An R-based tool for differential analysis of transcript abundance using kallisto output.",
      },
      {
        name: "SAMseq",
        website: "SAMseq",
        description:
          "An R/Bioconductor package for significance analysis of microarrays, suitable for small sample sizes.",
      },
      {
        name: "voom-limma",
        website: "limma",
        description:
          "The voom-limma approach combines precision weights from the voom method with linear modeling from limma for RNA-seq data analysis.",
      },
      {
        name: "NOISeq",
        website: "NOISeq",
        description:
          "A non-parametric approach for differential expression analysis, particularly suitable for small-sample RNA-seq data.",
      },
      {
        name: "DEGSeq",
        website: "DEGSeq",
        description:
          "An R/Bioconductor package for identifying differentially expressed genes based on the read count data.",
      },
      {
        name: "HTSeq/DESeq",
        website: "HTSeq, DESeq",
        description:
          "HTSeq provides tools to work with high-throughput sequencing data, and DESeq is often used in conjunction for differential expression analysis.",
      },
      {
        name: "MaAsLin2",
        website: "MaAsLin2",
        description:
          "Multivariate Association with Linear Models for Microbiome data (MaAsLin2) is designed for microbiome data, allowing for the analysis of associations between microbial features and metadata.",
      },
      {
        name: "BaySeq",
        website: "BaySeq",
        description:
          "An R/Bioconductor package for identifying differential expression in RNA-seq data using a Bayesian approach.",
      },
      {
        name: "EBSeq",
        website: "EBSeq",
        description:
          "An empirical Bayesian approach for identifying differentially expressed genes from RNA-seq data.",
      },
      {
        name: "DEGFinder",
        website: "DEGFinder",
        description:
          "An R/Bioconductor package for finding differentially expressed genes using variance modeling.",
      },
    ],
  },
  {
    name: "Phylogenetic Tree Construction Tools",
    data: [
      {
        name: "RAxML (Randomized Axelerated Maximum Likelihood)",
        website: "RAxML",
        description:
          "A fast and widely used tool for maximum likelihood-based phylogenetic tree inference, supporting various models of sequence evolution.",
      },
      {
        name: "IQ-TREE",
        website: "IQ-TREE",
        description:
          "A versatile tool that combines maximum likelihood, Bayesian inference, and parsimony methods for accurate phylogenetic tree estimation.",
      },
      {
        name: "PhyML",
        website: "PhyML",
        description:
          "A maximum likelihood-based method for phylogenetic tree reconstruction, suitable for large datasets.",
      },
      {
        name: "MrBayes",
        website: "MrBayes",
        description:
          "A Bayesian inference tool for phylogenetic analysis that uses Markov chain Monte Carlo (MCMC) methods.",
      },
      {
        name: "BEAST (Bayesian Evolutionary Analysis Sampling Trees)",
        website: "BEAST",
        description:
          "A Bayesian framework for estimating phylogenetic trees and parameters under various evolutionary models.",
      },
      {
        name: "FastTree",
        website: "FastTree",
        description:
          "A tool for inferring approximately-maximum-likelihood phylogenetic trees quickly, suitable for large datasets.",
      },
      {
        name: "MEGA (Molecular Evolutionary Genetics Analysis)",
        website: "MEGA",
        description:
          "A comprehensive software suite for molecular evolution analysis, including phylogenetic tree construction.",
      },
      {
        name: "PhyloBayes",
        website: "PhyloBayes",
        description:
          "A Bayesian Monte Carlo Markov Chain (MCMC) method for phylogenetic tree reconstruction under complex models.",
      },
      {
        name: "FastME",
        website: "FastME",
        description:
          "A tool for inferring phylogenetic trees using distance-based methods.",
      },
      {
        name: "Neighbor-Joining (implemented in many tools)",
        description:
          "A distance-based method for phylogenetic tree construction, commonly implemented in software like PHYLIP and MEGA.",
      },
      {
        name: "Clustal Omega",
        website: "Clustal Omega",
        description:
          "A multiple sequence alignment tool that can be used as a preliminary step for phylogenetic tree construction.",
      },
      {
        name: "PhyloSift",
        website: "PhyloSift",
        description:
          "A tool for phylogenetic analysis that combines marker gene identification, alignment, and tree construction.",
      },
      {
        name: "FIGTREE",
        website: "FIGTREE",
        description:
          "A graphical viewer for exploring and visualizing phylogenetic trees.",
      },
      {
        name: "ETE Toolkit (Environment for Tree Exploration)",
        website: "ETE Toolkit",
        description:
          "A Python toolkit for the analysis and visualization of phylogenetic trees.",
      },
      {
        name: "Dendroscope",
        website: "Dendroscope",
        description:
          "A tool for visualizing and navigating large phylogenetic trees.",
      },
    ],
  },
  {
    name: "Metagenome Analysis Tools",
    data: [
      {
        name: "QIIME 2 (Quantitative Insights Into Microbial Ecology)",
        website: "QIIME 2",
        description:
          "An open-source bioinformatics platform for analyzing and visualizing microbial community data from 16S rRNA gene sequencing and whole-genome shotgun sequencing.",
      },
      {
        name: "MetaPhlAn",
        website: "MetaPhlAn",
        description:
          "A metagenomic taxonomic profiling tool that characterizes microbial communities based on unique clade-specific marker genes.",
      },
      {
        name: "Kraken 2",
        website: "Kraken 2",
        description:
          "A taxonomic sequence classifier that assigns taxonomic labels to metagenomic sequences using exact k-mer matches.",
      },
      {
        name: "MEGAN (Metagenome Analyzer)",
        website: "MEGAN",
        description:
          "A comprehensive tool for analyzing metagenomic data, including taxonomic and functional analysis and visualization.",
      },
      {
        name: "HUMAnN (HMP Unified Metabolic Analysis Network)",
        website: "HUMAnN",
        description:
          "A tool for functional profiling of microbial communities, providing insights into the metabolic potential of the microbiome.",
      },
      {
        name: "MetaBAT",
        website: "MetaBAT",
        description:
          "A metagenome binning tool for reconstructing individual genomes from complex microbial communities.",
      },
      {
        name: "MaxBin",
        website: "MaxBin",
        description:
          "An algorithm for metagenome binning, separating assembled contigs into discrete bins corresponding to different microbial species.",
      },
      {
        name: "CONCOCT",
        website: "CONCOCT",
        description:
          "A binning algorithm for metagenomic data that uses nucleotide composition and coverage information.",
      },
      {
        name: "MAGpy",
        website: "MAGpy",
        description:
          "A toolkit for analyzing metagenome-assembled genomes (MAGs) and assessing their quality and completeness.",
      },
      {
        name: "CheckM",
        website: "CheckM",
        description:
          "A tool for assessing the quality of metagenome-assembled genomes and estimating their completeness and contamination.",
      },
      {
        name: "MetaBat2",
        website: "MetaBat2",
        description:
          "An updated version of MetaBat, offering improvements in metagenome binning accuracy.",
      },
      {
        name: "KrakenUniq",
        website: "KrakenUniq",
        description:
          "An extension of Kraken for detecting and quantifying unique sequences in metagenomic samples.",
      },
      {
        name: "MOCAT2 (Meta'omic Analysis Toolkit 2)",
        website: "MOCAT2",
        description:
          "A modular pipeline for metagenomic data analysis, including taxonomic profiling, functional annotation, and pathway analysis.",
      },
      {
        name: "MetaPhyler",
        website: "MetaPhyler",
        description:
          "A taxonomic profiling tool that utilizes both marker gene and marker operon information for improved accuracy.",
      },
      {
        name: "Kaiju",
        website: "Kaiju",
        description:
          "A taxonomic classification tool that uses protein-level information to assign taxonomic labels to metagenomic sequences.",
      },
    ],
  },
  {
    name: "Systems Biology Modelling Tools",
    data: [
      {
        name: "COPASI (Complex Pathway Simulator)",
        website: "COPASI",
        description:
          "A software tool for modeling and simulation of biochemical systems, supporting both deterministic and stochastic simulation methods.",
      },
      {
        name: "CellDesigner",
        website: "CellDesigner",
        description:
          "A process diagram editor for creating graphical models of biochemical and cellular processes, supporting Systems Biology Markup Language (SBML).",
      },
      {
        name: "Virtual Cell",
        website: "Virtual Cell",
        description:
          "A software environment for modeling and simulating complex cell biological systems, providing a user-friendly interface.",
      },
      {
        name: "SBML (Systems Biology Markup Language) Tools",
        website: "SBML",
        description:
          "Various tools support SBML, a standard format for representing computational models in systems biology.",
      },
      {
        name: "BioNetGen",
        website: "BioNetGen",
        description:
          "A rule-based modeling platform for specifying and simulating complex biochemical systems.",
      },
      {
        name: "BioPAX (Biological Pathway Exchange)",
        website: "BioPAX",
        description:
          "A standard language for exchanging biological pathway data, enabling interoperability between pathway databases and analysis tools.",
      },
      {
        name: "PySCeS (Python Simulator for Cellular Systems)",
        website: "PySCeS",
        description:
          "A Python-based simulator for modeling and simulating biochemical systems, offering a range of analysis tools.",
      },
      {
        name: "Gepasi",
        website: "Gepasi",
        description:
          "A software package for modeling biochemical systems and performing steady-state and dynamic simulations.",
      },
      {
        name: "JWS Online",
        website: "JWS Online",
        description:
          "An online platform for building, simulating, and analyzing kinetic models in systems biology.",
      },
      {
        name: "MATLAB/SimBiology",
        website: "MATLAB/SimBiology",
        description:
          "MATLAB's SimBiology toolbox provides a graphical environment for modeling, simulating, and analyzing systems biology.",
      },
      {
        name: "VANTED (Visualization and Analysis of Networks containing Experimental Data)",
        website: "VANTED",
        description:
          "A tool for the analysis and visualization of biological networks and experimental data.",
      },
      {
        name: "COMBINE Archive",
        website: "COMBINE Archive",
        description:
          "A standard for bundling models and associated data for sharing and reproducibility in computational biology.",
      },
      {
        name: "Snoopy",
        website: "Snoopy",
        description:
          "A tool for the analysis and visualization of dynamical systems, including biological models.",
      },
      {
        name: "Tellurium",
        website: "Tellurium",
        description:
          "An integrated environment for modeling and simulating biochemical systems using standards like SBML.",
      },
      {
        name: "Simulink (MathWorks)",
        website: "Simulink",
        description:
          "Simulink is a MATLAB-based platform for modeling, simulating, and analyzing multidomain dynamical systems.",
      },
    ],
  },
  {
    name: "Database And Retrieval Tools",
    data: [
      {
        name: "Entrez Utilities (E-Utilities)",
        description:
          "The NCBI E-Utilities provide a set of server-side programs allowing users to query and retrieve data from various NCBI databases, including PubMed, GenBank, and more.",
        link: "NCBI E-Utilities",
      },
      {
        name: "BioMart",
        description:
          "BioMart is a federated query system for retrieving data from multiple biological databases, including Ensembl, UniProt, and more.",
        link: "BioMart",
      },
      {
        name: "SRA Toolkit",
        description:
          "The Sequence Read Archive (SRA) Toolkit is used to access and manipulate raw sequencing data from the SRA repository.",
        link: "SRA Toolkit",
      },
      {
        name: "UCSC Genome Browser Table Browser",
        description:
          "The Table Browser allows users to query and retrieve genomic annotations, comparative genomics, and more from the UCSC Genome Browser.",
        link: "UCSC Table Browser",
      },
      {
        name: "Ensembl BioMart",
        description:
          "Ensembl BioMart provides an interface for querying Ensembl databases, enabling retrieval of genomic, functional, and comparative genomics data.",
        link: "Ensembl BioMart",
      },
      {
        name: "UniProt Retrieve/ID Mapping",
        description:
          "UniProt offers tools for retrieving protein sequence and annotation data, as well as converting between different protein identifiers.",
        link: "UniProt Retrieve/ID Mapping",
      },
      {
        name: "KEGG API",
        description:
          "The KEGG API allows programmatic access to KEGG databases, enabling retrieval of pathway, gene, and functional information.",
        link: "KEGG API",
      },
      {
        name: "Reactome Data Service",
        description:
          "The Reactome Data Service provides programmatic access to the Reactome pathway database, allowing retrieval of pathway and network data.",
        link: "Reactome Data Service",
      },
      {
        name: "EBI Search",
        description:
          "EBI Search enables users to search and retrieve data from various European Bioinformatics Institute (EBI) databases, including UniProt, InterPro, and more.",
        link: "EBI Search",
      },
      {
        name: "dbGaP Data Browser",
        description:
          "The dbGaP Data Browser facilitates exploration of genetic studies by enabling retrieval of genotype and phenotype data from dbGaP.",
        link: "dbGaP Data Browser",
      },
    ],
  },
  {
    name: "Functional Genomics Tools",
    data: [
      {
        name: "Gene Ontology (GO) Tools",
        description:
          "GO tools assist in the functional annotation of genes by categorizing them into defined terms related to molecular function, biological process, and cellular component.",
        link: "Gene Ontology",
      },
      {
        name: "DAVID Bioinformatics Resources",
        description:
          "DAVID (Database for Annotation, Visualization, and Integrated Discovery) offers tools for functional annotation, enrichment analysis, and visualization of gene lists.",
        link: "DAVID",
      },
      {
        name: "Enrichr",
        description:
          "Enrichr is a web-based tool for gene set enrichment analysis, providing links to various databases for functional annotation.",
        link: "Enrichr",
      },
      {
        name: "WebGestalt",
        description:
          "WebGestalt is an enrichment analysis tool that allows users to perform functional enrichment analysis, pathway analysis, and network analysis.",
        link: "WebGestalt",
      },
      {
        name: "PANTHER (Protein ANalysis THrough Evolutionary Relationships) Classification System",
        description:
          "PANTHER provides tools for functional classification of genes and proteins, offering an extensive ontology for biological processes, molecular functions, and pathways.",
        link: "PANTHER",
      },
      {
        name: "STRING (Search Tool for the Retrieval of Interacting Genes/Proteins)",
        description:
          "STRING is a database and tool for predicting protein-protein interactions and functional associations between genes.",
        link: "STRING",
      },
      {
        name: "GSEA (Gene Set Enrichment Analysis)",
        description:
          "GSEA is a computational method for analyzing gene expression data to identify enriched biological pathways and functional gene sets.",
        link: "GSEA",
      },
      {
        name: "Reactome",
        description:
          "Reactome is a curated database of biological pathways and reactions. Its tools enable pathway analysis and visualization.",
        link: "Reactome",
      },
      {
        name: "MSigDB (Molecular Signatures Database)",
        description:
          "MSigDB provides a collection of gene sets for use in gene set enrichment analysis, covering various biological processes, pathways, and functional annotations.",
        link: "MSigDB",
      },
      {
        name: "GOATOOLS",
        description:
          "GOATOOLS is a Python library for performing Gene Ontology and other functional annotation analyses, facilitating the interpretation of large gene lists.",
        link: "GOATOOLS",
      },
    ],
  },
  {
    name: "Homology Modeling Tools",
    data: [
      {
        name: "SWISS-MODEL",
        description:
          "SWISS-MODEL is an automated protein structure homology-modeling server that provides high-quality models for a wide range of species.",
        link: "SWISS-MODEL",
      },
      {
        name: "Modeller",
        description:
          "Modeller is a software package for automated protein structure modeling, using a combination of comparative and ab initio methods.",
        link: "Modeller",
      },
      {
        name: "Phyre2 (Protein Homology/analogY Recognition Engine 2)",
        description:
          "Phyre2 is an online tool for protein structure prediction that employs homology modeling and other techniques to generate structural models.",
        link: "Phyre2",
      },
      {
        name: "I-TASSER (Iterative Threading ASSEmbly Refinement)",
        description:
          "I-TASSER is a hierarchical approach to protein structure prediction that includes template-based modeling, fragment assembly, and iterative refinement.",
        link: "I-TASSER",
      },
      {
        name: "RaptorX",
        description:
          "RaptorX is a protein structure prediction server that uses template-based modeling and advanced machine learning techniques for accurate modeling.",
        link: "RaptorX",
      },
      {
        name: "RosettaCM (Rosetta Comparative Modeling)",
        description:
          "RosettaCM is part of the Rosetta suite and is specifically designed for high-accuracy comparative protein structure modeling.",
        link: "RosettaCM",
      },
      {
        name: "SWISS-MODEL Workspace",
        description:
          "SWISS-MODEL Workspace is an interactive web-based interface that allows users to perform homology modeling, model assessment, and visualization.",
        link: "SWISS-MODEL Workspace",
      },
      {
        name: "Geno3D",
        description:
          "Geno3D is a homology modeling program that predicts the three-dimensional structure of a protein based on the alignment with homologous structures.",
        link: "Geno3D",
      },
      {
        name: "HHpred",
        description:
          "HHpred is a tool for sensitive protein homology detection and structure prediction using pairwise comparison of hidden Markov models (HMMs).",
        link: "HHpred",
      },
      {
        name: "Robetta",
        description:
          "Robetta is a protein structure prediction server that incorporates homology modeling, ab initio modeling, and model refinement.",
        link: "Robetta",
      },
    ],
  },
  {
    name: "Microbiome Analysis Tools",
    data: [
      {
        name: "QIIME 2 (Quantitative Insights Into Microbial Ecology 2)",
        description:
          "QIIME 2 is an open-source bioinformatics platform for microbiome analysis. It provides tools for processing and analyzing microbial community data from 16S rRNA and metagenomic sequencing.",
        link: "QIIME 2",
      },
      {
        name: "mothur",
        description:
          "mothur is a bioinformatics tool for microbial ecology. It supports the analysis of 16S rRNA gene sequencing data and provides a suite of tools for community profiling and diversity analysis.",
        link: "mothur",
      },
      {
        name: "PICRUSt (Phylogenetic Investigation of Communities by Reconstruction of Unobserved States)",
        description:
          "PICRUSt predicts functional gene content in microbial communities based on 16S rRNA data. It allows for the inference of metagenomes and functional capabilities.",
        link: "PICRUSt",
      },
      {
        name: "MetaPhlAn",
        description:
          "MetaPhlAn is a metagenomic profiling tool that identifies microbial organisms and their relative abundance in shotgun metagenomic data.",
        link: "MetaPhlAn",
      },
      {
        name: "LEfSe (Linear discriminant analysis Effect Size)",
        description:
          "LEfSe is a tool for identifying features (taxa or functional elements) that are differentially abundant between two or more biological conditions in metagenomic studies.",
        link: "LEfSe",
      },
      {
        name: "QIIME (Quantitative Insights Into Microbial Ecology)",
        description:
          "QIIME is a widely used software suite for the analysis of microbial communities based on 16S rRNA gene sequencing data. QIIME 1 is an earlier version, while QIIME 2 is the updated version.",
        link: "QIIME 1 | QIIME 2",
      },
      {
        name: "Kraken",
        description:
          "Kraken is a taxonomic sequence classifier that assigns taxonomic labels to DNA sequences, enabling rapid and accurate profiling of microbial communities.",
        link: "Kraken",
      },
      {
        name: "MEGAN (Metagenome Analyzer)",
        description:
          "MEGAN is a comprehensive tool for metagenomic analysis that provides visualization and analysis of taxonomic and functional information from shotgun sequencing data.",
        link: "MEGAN",
      },
      {
        name: "STAMP (Statistical Analysis of Metagenomic Profiles)",
        description:
          "STAMP is a software package for statistical analysis of metagenomic data. It provides visualization and statistical tests for differential abundance analysis.",
        link: "STAMP",
      },
      {
        name: "MetaStats",
        description:
          "MetaStats is a tool for detecting differentially abundant features in metagenomic data. It employs statistical methods for comparing microbial community compositions.",
        link: "MetaStats",
      },
    ],
  },
  {
    name: "Structural Bioinformatics Tools",
    data: [
      {
        name: "PyMOL",
        description:
          "PyMOL is a user-friendly, open-source molecular visualization system that allows users to visualize and analyze 3D structures of biological macromolecules.",
        link: "PyMOL",
      },
      {
        name: "ChimeraX",
        description:
          "ChimeraX is a powerful tool for the visualization and analysis of molecular structures. It supports tasks such as structural analysis, model building, and interactive visualization.",
        link: "ChimeraX",
      },
      {
        name: "RasMol",
        description:
          "RasMol is a molecular graphics visualization tool for viewing and analyzing biological macromolecules. It supports various molecular file formats.",
        link: "RasMol",
      },
      {
        name: "VMD (Visual Molecular Dynamics)",
        description:
          "VMD is a molecular visualization program that allows users to visualize and analyze molecular dynamics simulations, quantum chemistry calculations, and more.",
        link: "VMD",
      },
      {
        name: "Modeller",
        description:
          "Modeller is a software package for protein structure modeling using comparative modeling techniques. It predicts 3D structures based on homologous structures.",
        link: "Modeller",
      },
      {
        name: "Phenix",
        description:
          "Phenix (Python-based Hierarchical Environment for Integrated Xtallography) is a software suite for the automated determination of macromolecular structures by X-ray crystallography and other methods.",
        link: "Phenix",
      },
      {
        name: "Swiss-PdbViewer",
        description:
          "Swiss-PdbViewer is an application for analyzing and visualizing 3D structures of proteins and nucleic acids. It supports multiple file formats.",
        link: "Swiss-PdbViewer",
      },
      {
        name: "MolProbity",
        description:
          "MolProbity is a tool for validating the accuracy and reliability of 3D structures of macromolecules. It provides analysis and validation of protein structures.",
        link: "MolProbity",
      },
      {
        name: "DALI (Distance-matrix ALIgnment)",
        description:
          "DALI is a structural comparison tool that aligns protein structures based on their three-dimensional coordinates, allowing for the identification of structural similarities.",
        link: "DALI",
      },
      {
        name: "COOT (Crystallographic Object-Oriented Toolkit)",
        description:
          "COOT is a molecular graphics program specifically designed for model building and validation of crystallographic structures.",
        link: "COOT",
      },
    ],
  },
  {
    name: "Miscelleaneous Tools",
    data: [
      {
        name: "Bioconda",
        description:
          "Bioconda is a distribution of bioinformatics software for the Conda package manager. It provides a large collection of bioinformatics tools and libraries.",
        link: "Bioconda",
      },
      {
        name: "Galaxy",
        description:
          "Galaxy is an open-source platform for data integration and analysis in bioinformatics. It offers a web-based interface for constructing and running data analysis workflows.",
        link: "Galaxy",
      },
      {
        name: "Biopython",
        description:
          "Biopython is an open-source collection of Python tools and libraries for computational biology and bioinformatics, providing modules for tasks such as sequence analysis and structural bioinformatics.",
        link: "Biopython",
      },
      {
        name: "BEDTools",
        description:
          "BEDTools is a suite of utilities for comparing, summarizing, and manipulating genomic features. It allows for efficient handling of genomic datasets.",
        link: "BEDTools",
      },
      {
        name: "IGV (Integrative Genomics Viewer)",
        description:
          "IGV is a high-performance visualization tool for interactive exploration of large, integrated genomic datasets.",
        link: "IGV",
      },
      {
        name: "BWA (Burrows-Wheeler Aligner)",
        description:
          "BWA is a software package for mapping low-divergent sequences against a large reference genome, such as those from next-generation sequencing platforms.",
        link: "BWA",
      },
      {
        name: "NCBI BLAST",
        description:
          "The Basic Local Alignment Search Tool (BLAST) is a suite of programs for comparing nucleotide or protein sequences against a database for homology searching.",
        link: "NCBI BLAST",
      },
      {
        name: "FastQC",
        description:
          "FastQC is a quality control tool for high-throughput sequence data. It provides a detailed report on the quality of sequencing data.",
        link: "FastQC",
      },
      {
        name: "SAMtools",
        description:
          "SAMtools is a suite of programs for interacting with high-throughput sequencing data in the SAM/BAM format. It includes tools for file conversion, indexing, and variant calling.",
        link: "SAMtools",
      },
      {
        name: "BEDOPS",
        description:
          "BEDOPS is a suite of tools for manipulating genomic datasets, including operations such as set operations, statistical calculations, and file format conversions.",
        link: "BEDOPS",
      },
    ],
  },
];

const useData = () => {
  const state = {
    toolsData,
    toolsList,
  };
  return {
    state,
  };
};

export default useData;
