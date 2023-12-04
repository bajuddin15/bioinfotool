import Wrapper from "@/components/Wrapper";
import React from "react";

const Outlook = () => {
  return (
    <Wrapper>
      {/* header */}
      <div className="flex flex-col gap-5 my-5">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Biotool Hub
        </h2>

        {/* overview */}
        <div>
          <h2 className="text-lg font-semibold">Outlook :</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-5">
            The journey doesn&apos;t stop here; we have exciting plans for the
            future of Biotool Hub:
          </p>
          <ul className="text-muted-foreground text-sm flex flex-col gap-4 mt-1">
            <li>
              <span className="text-pink-600 font-semibold">
                1. Expanded Tool Coverage:
              </span>{" "}
              We aim to continually broaden our tool coverage, incorporating
              emerging tools and technologies that push the boundaries of
              bioinformatics research and analysis.
            </li>
            <li>
              <span className="text-pink-600 font-semibold">
                2. Educational Resources:
              </span>{" "}
              Look forward to a growing repository of tutorials, guides, and
              educational content to assist users at every skill level in
              mastering the use of bioinformatics tools.
            </li>
            <li>
              <span className="text-pink-600 font-semibold">
                3. Tool Developer Collaboration:
              </span>{" "}
              We invite tool developers to showcase their innovations, fostering
              collaboration and providing a platform for recognition within the
              bioinformatics community.
            </li>
            <li>
              <span className="text-pink-600 font-semibold">
                4. Enhanced User Experience:
              </span>{" "}
              We are committed to refining and enhancing the user experience
              based on your feedback. Expect improvements in navigation, search
              functionality, and overall usability.
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-5">
            Join us on this exciting journey as we strive to empower the
            bioinformatics community with the tools and knowledge needed to
            unlock new frontiers in biological discovery. [Your Website Name] is
            not just a repository; it&apos;s a dynamic hub for bioinformatics
            excellence. Explore, learn, and innovate with us!
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Outlook;
