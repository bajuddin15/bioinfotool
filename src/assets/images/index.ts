import DRT from "./Database and retrieval tools.jpeg";
import FGT from "./Functional Genomics tools.jpeg";
import GT from "./Genomics tools.jpeg";
import HMT from "./Homology modeling tools.jpeg";
import MT from "./Metagenomics tools (1).jpeg";
import MAT from "./Microbiome analysis.jpeg";
import MisT from "./Miscelleaneous tools.jpeg";
import MDT from "./Molecular docking tools.jpeg";
import SAT from "./sequence analysis tools.jpeg";
import SBT from "./Structural Bioinformatics tools.jpeg";
import VCT from "./Variant calling tools.jpeg";

export const toolsCardImgData = [
  {
    name: "Database and retrieval tools",
    img: DRT,
    href: `/bioinformatics-tools/${getNameAsHref(
      "Database And Retrieval Tools"
    )}`,
  },
  {
    name: "Functional Genomics tools",
    img: FGT,
    href: `/bioinformatics-tools/${getNameAsHref("Functional Genomics Tools")}`,
  },
  {
    name: "Genomics tools",
    img: GT,
    href: `/bioinformatics-tools/${getNameAsHref("Genome Assembly Tools")}`,
  },
  {
    name: "Homology modeling tools",
    img: HMT,
    href: `/bioinformatics-tools/${getNameAsHref("Homology Modeling Tools")}`,
  },
  {
    name: "Metagenomics tools",
    img: MT,
    href: `/bioinformatics-tools/${getNameAsHref("Metagenome Analysis Tools")}`,
  },
  {
    name: "Microbiome analysis tools",
    img: MAT,
    href: `/bioinformatics-tools/${getNameAsHref("Microbiome Analysis Tools")}`,
  },
  {
    name: "Miscelleaneous tools",
    img: MisT,
    href: `/bioinformatics-tools/${getNameAsHref("Miscelleaneous Tools")}`,
  },
  {
    name: "Molecular docking tools",
    img: MDT,
    href: `/bioinformatics-tools/${getNameAsHref("Molecular Docking Tools")}`,
  },
  {
    name: "Sequence analysis tools",
    img: SAT,
    href: `/bioinformatics-tools/${getNameAsHref("Sequence Analysis")}`,
  },
  {
    name: "Structural Bioinformatics tools",
    img: SBT,
    href: `/bioinformatics-tools/${getNameAsHref(
      "Structural Bioinformatics Tools"
    )}`,
  },
  {
    name: "Variant calling tools",
    img: VCT,
    href: `/bioinformatics-tools/${getNameAsHref(
      "Genomic Variant Calling Tools"
    )}`,
  },
];

function getNameAsHref(name: string) {
  return name.toLowerCase().replace(/ /g, "-");
}
