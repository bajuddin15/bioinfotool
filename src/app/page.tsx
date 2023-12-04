import { toolsCardImgData } from "@/assets/images";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const toolsData = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Wrapper>
      {/* header */}
      <div className="flex flex-col gap-5 my-5">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Biotool Hub
        </h2>

        {/* overview */}
        <div>
          <h2 className="text-lg font-semibold">Overview :</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Welcome to Biotool Hub, your ultimate destination for bioinformatics
            tools and resources! We are dedicated to providing a comprehensive
            repository of cutting-edge tools designed to meet the diverse needs
            of bioinformatics enthusiasts, researchers, and students. Whether
            you&apos;re delving into sequence analysis, exploring structural
            bioinformatics, or venturing into genomics, our curated collection
            of tools offers a one-stop solution for your bioinformatics
            endeavors.
          </p>
        </div>

        {/* what sets up apart */}
        <div>
          <h2 className="text-lg font-semibold">What Sets Us Apart:</h2>
          <ul className="text-muted-foreground text-sm flex flex-col gap-4 mt-1">
            <li>
              <span className="text-pink-600 font-semibold">
                1. Categorized Repository:
              </span>{" "}
              Our user-friendly interface organizes tools into categories,
              making it easy for you to navigate and find the perfect tool for
              your specific requirements.
            </li>
            <li>
              <span className="text-pink-600 font-semibold">
                2. Up-to-Date Information:
              </span>{" "}
              We strive to keep our repository current, regularly updating tool
              lists to ensure you have access to the latest and most relevant
              resources in the dynamic field of bioinformatics.
            </li>
            <li>
              <span className="text-pink-600 font-semibold">
                3. User Ratings and Reviews:
              </span>{" "}
              Benefit from the collective wisdom of the bioinformatics
              community. User ratings and reviews help you make informed
              decisions about the tools you choose.
            </li>
            <li>
              <span className="text-pink-600 font-semibold">
                4. Interactive Community Forum:
              </span>{" "}
              Join our community forum to engage with fellow bioinformaticians,
              ask questions, share insights, and stay abreast of the latest
              trends and discussions in the field.
            </li>
          </ul>
        </div>

        {/* all tools in cards */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
          {toolsCardImgData.map((tool, index) => (
            <Link
              href={tool.href}
              key={index}
              className="bg-white h-40 rounded-3xl p-5 shadow-md border border-gray-300 flex flex-col justify-between"
            >
              <Image src={tool.img} alt={tool.name} className="w-full h-4/5" />
              <p className="text-xs text-muted-foreground text-center">
                {tool.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
