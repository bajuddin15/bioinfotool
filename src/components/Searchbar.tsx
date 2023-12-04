"use client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";

const searchbarData = [
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
        href: `/bioinformatics-tools/${getNameAsHref("Genome Assembly Tools")}`,
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
        href: `/bioinformatics-tools/${getNameAsHref("Miscelleaneous Tools")}`,
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

function generateUniqueKey() {
  return "_" + Math.random().toString(36).substr(2, 9); // Generate a random string
}

const Searchbar = () => {
  if (typeof window === 'undefined') {
    return null; // Return null or a placeholder if running on the server
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={windowWidth < 550 ? "" : "border border-gray-300"}
          style={{
            width: windowWidth < 550 ? 50 : 220,
            padding: "7px 15px",
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: windowWidth < 550 ? "center" : "space-between",
            backgroundColor: "#fffcfc",
          }}
        >
          {windowWidth < 550 ? (
            <div>
              <Search size={24} color="black" />
            </div>
          ) : (
            <>
              <p className="text-xs">Search here...</p>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="p-4">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            {searchbarData.map((item, idx) => (
              <>
                <Link key={generateUniqueKey()} href={item.href}>
                  <CommandGroup heading={item.name}>
                    {item.data.map((inerItem, index) => (
                      <Link key={generateUniqueKey()} href={inerItem.href}>
                        <CommandItem>{inerItem.name}</CommandItem>
                      </Link>
                    ))}
                  </CommandGroup>
                </Link>
                <CommandSeparator />
              </>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default Searchbar;
