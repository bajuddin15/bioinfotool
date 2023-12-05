"use client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Link from "next/link";
import { usePathname } from "next/navigation";

const searchbarData = [
  {
    id: 1,
    name: "Biotool Hub",
    href: "/",
    data: [
      {
        id: 2,
        name: "Overview",
        href: "/",
      },
      {
        id: 3,
        name: "Outlook",
        href: "/outlook",
      },
      {
        id: 4,
        name: "Bioinformatics Toolkit",
        href: "/discover-toolkit",
      },
    ],
  },
  {
    id: 5,
    name: "Featured Bioinformatics Tools",
    href: `/bioinformatics-tools/${getNameAsHref("BLAST")}`,
    data: [
      {
        id: 6,
        name: "BLAST",
        href: `/bioinformatics-tools/${getNameAsHref("BLAST")}`,
      },
      {
        id: 7,
        name: "I-TASSER",
        href: `/bioinformatics-tools/${getNameAsHref("I-TASSER")}`,
      },
      {
        id: 8,
        name: "GATK (Genome Analysis Toolkit)",
        href: `/bioinformatics-tools/${getNameAsHref("GATK")}`,
      },
      {
        id: 9,
        name: "AutoDock Vina",
        href: `/bioinformatics-tools/${getNameAsHref("AutoDock Vina")}`,
      },
      {
        id: 10,
        name: "QIIME 2",
        href: `/bioinformatics-tools/${getNameAsHref("QIIME2")}`,
      },
      {
        id: 11,
        name: "MaxQuant",
        href: `/bioinformatics-tools/${getNameAsHref("MaxQuant")}`,
      },
      {
        id: 12,
        name: "Cufflinks",
        href: `/bioinformatics-tools/${getNameAsHref("Cufflinks")}`,
      },
      {
        id: 13,
        name: "RaptorX",
        href: `/bioinformatics-tools/${getNameAsHref("RaptorX")}`,
      },
      {
        id: 14,
        name: "DAVID Bioinformatics Resources",
        href: `/bioinformatics-tools/${getNameAsHref(
          "DAVID Bioinformatics Resources"
        )}`,
      },
      {
        id: 15,
        name: "SwissDock",
        href: `/bioinformatics-tools/${getNameAsHref("SwissDock")}`,
      },
      {
        id: 16,
        name: "Pymol",
        href: `/bioinformatics-tools/${getNameAsHref("Pymol")}`,
      },
    ],
  },
  {
    id: 17,
    name: "Bioinformatics Tools - Curated List",
    href: "/bioinformatics-tools/curated-list",
    data: [
      {
        id: 18,
        name: "Sequence Analysis",
        href: `/bioinformatics-tools/${getNameAsHref("Sequence Analysis")}`,
      },
      {
        id: 19,
        name: "RNA Sequence Analysis Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "RNA Sequence Analysis Tools"
        )}`,
      },
      {
        id: 20,
        name: "Protein Sequence Analysis Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Protein Sequence Analysis Tools"
        )}`,
      },
      {
        id: 21,
        name: "Protein Structure Prediction",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Protein Structure Prediction"
        )}`,
      },
      {
        id: 22,
        name: "Molecular Docking Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Molecular Docking Tools"
        )}`,
      },
      {
        id: 23,
        name: "Structural Variant Analysis Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Structural Variant Analysis Tools"
        )}`,
      },
      {
        id: 24,
        name: "Genome Assembly Tools",
        href: `/bioinformatics-tools/${getNameAsHref("Genome Assembly Tools")}`,
      },
      {
        id: 25,
        name: "Genomic Variant Calling Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Genomic Variant Calling Tools"
        )}`,
      },
      {
        id: 26,
        name: "Comparative Genomics Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Comparative Genomics Tools"
        )}`,
      },
      {
        id: 27,
        name: "Differential Gene Expression Analysis Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Differential Gene Expression Analysis Tools"
        )}`,
      },
      {
        id: 28,
        name: "Phylogenetic Tree Construction Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Phylogenetic Tree Construction Tools"
        )}`,
      },
      {
        id: 29,
        name: "Metagenome Analysis Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Metagenome Analysis Tools"
        )}`,
      },
      {
        id: 30,
        name: "Systems Biology Modelling Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Systems Biology Modelling Tools"
        )}`,
      },
      {
        id: 31,
        name: "Database And Retrieval Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Database And Retrieval Tools"
        )}`,
      },
      {
        id: 32,
        name: "Functional Genomics Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Functional Genomics Tools"
        )}`,
      },
      {
        id: 33,
        name: "Homology Modeling Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Homology Modeling Tools"
        )}`,
      },
      {
        id: 34,
        name: "Microbiome Analysis Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Microbiome Analysis Tools"
        )}`,
      },
      {
        id: 35,
        name: "Structural Bioinformatics Tools",
        href: `/bioinformatics-tools/${getNameAsHref(
          "Structural Bioinformatics Tools"
        )}`,
      },
      {
        id: 36,
        name: "Miscelleaneous Tools",
        href: `/bioinformatics-tools/${getNameAsHref("Miscelleaneous Tools")}`,
      },
    ],
  },
  {
    id: 37,
    name: "Tutorials and Guides",
    href: "/tutorial-guide",
    data: [
      {
        id: 38,
        name: "Getting Started",
        href: `/tutorial-guide/${getNameAsHref("Getting Started")}`,
      },
      {
        id: 39,
        name: "Sequence Analysis",
        href: `/tutorial-guide/${getNameAsHref("Sequence Analysis")}`,
      },
      {
        id: 40,
        name: "Genomics",
        href: `/tutorial-guide/${getNameAsHref("Genomics")}`,
      },
      {
        id: 41,
        name: "Proteomics",
        href: `/tutorial-guide/${getNameAsHref("Proteomics")}`,
      },
      {
        id: 42,
        name: "Structural Bioinformatics",
        href: `/tutorial-guide/${getNameAsHref("Structural Bioinformatics")}`,
      },
      {
        id: 43,
        name: "Transcriptomics",
        href: `/tutorial-guide/${getNameAsHref("Transcriptomics")}`,
      },
      {
        id: 44,
        name: "Functional Annotation",
        href: `/tutorial-guide/${getNameAsHref("Functional Annotation")}`,
      },
      {
        id: 45,
        name: "Molecular Docking",
        href: `/tutorial-guide/${getNameAsHref("Molecular Docking")}`,
      },
    ],
  },
];

function getNameAsHref(name: string) {
  return name.toLowerCase().replace(/ /g, "-");
}

const Searchbar = () => {
  const pathName = usePathname();
  const [windowWidth, setWindowWidth] = useState(1300);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

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

  useEffect(() => {
    setIsToggleOpen(false);
  }, [pathName]);

  return (
    <Dialog
      open={isToggleOpen}
      onOpenChange={() => setIsToggleOpen(!isToggleOpen)}
    >
      <DialogTrigger>
        <div
          onClick={() => setIsToggleOpen(!isToggleOpen)}
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
                <Link key={item.id} href={item.href}>
                  <CommandGroup heading={item.name}>
                    {item.data.map((inerItem, index) => (
                      <Link key={inerItem.id} href={inerItem.href}>
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
