const toolkitData = [
  {
    name: "Sequence Analysis",
    data: [
      "DNA Sequence Analysis Tools",
      "RNA Sequence Analysis Tools",
      "Protein Sequence Analysis Tools",
    ],
  },
  {
    name: "Structural Bioinformatics",
    data: [
      "Protein Structure Prediction",
      "Molecular Docking Tools",
      "Structural Variant Analysis",
    ],
  },
  {
    name: "Genomics",
    data: [
      "Genome Assembly Tools",
      "Variant Calling Tools",
      "Comparative Genomics Tools",
    ],
  },
  {
    name: "Transcriptomics",
    data: [
      "RNA-Seq Analysis Tools",
      "Differential Gene Expression Analysis Tools",
    ],
  },
  {
    name: "Proteomics",
    data: [
      "Mass Spectrometry Data Analysis Tools",
      "Protein Identification Tools",
    ],
  },
  {
    name: "Metagenomics",
    data: ["Metagenome Analysis Tools", "Taxonomic Classification Tools"],
  },
  {
    name: "Phylogenetics",
    data: [
      "Phylogenetic Tree Construction Tools",
      "Evolutionary Analysis Tools",
    ],
  },
  {
    name: "Systems Biology",
    data: ["Systems Biology Modeling Tools", "Pathway Analysis Tools"],
  },
  {
    name: "Functional Genomics",
    data: ["Functional Annotation Tools", "Gene Ontology Tools"],
  },
  {
    name: "Immunoinformatics",
    data: ["Epitope Prediction Tools", "Vaccine Design Tools"],
  },
  {
    name: "Cheminformatics",
    data: ["Molecular Descriptor Calculation Tools", "Virtual Screening Tools"],
  },
  {
    name: "Structural Variant Analysis",
    data: [
      "Structural Variant Detection Tools",
      "Copy Number Variation Analysis Tools",
    ],
  },
  {
    name: "Epigenomics",
    data: [
      "DNA Methylation Analysis Tools",
      "Histone Modification Analysis Tools",
    ],
  },
  {
    name: "Neuroinformatics",
    data: [
      "Brain Structure Analysis Tools",
      "Functional Neuroimaging Analysis Tools",
    ],
  },
  {
    name: "Environmental Bioinformatics",
    data: ["Environmental Genomics Tools", "Ecological Data Analysis Tools"],
  },
];

const useData = () => {
  const state = {
    toolkitData,
  };
  return {
    state,
  };
};

export default useData;
