import React from "react";
import Image from "next/image";

const AboutMeSection = () => {
  return (
    <>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl font-bold m-3 mb-8 flex">
        <p id="about-me" className="mx-auto justify-center p-3 underline">
          ABOUT ME
        </p>
      </div>

      <div className="flex flex-col lg:flex-row md:w-[70%] mt-3 items-center">
        <div className="lg:w-[50%]">
          <Image
            className="mx-auto rounded-md"
            src="/Suveen.jpg"
            alt="Suveen profile pic"
            width={280}
            height={280}
            priority
          />
        </div>
        <div className="p-3 lg:w-[80%] lg:mx-auto">
          <p className="text-xl font-semibold">Hi, I&apos;m Suveen Ellawela</p>
          <p className="mt-3">
            I study <span className="font-semibold">Computer Engineering</span>{" "}
            at National University of Singapore. Currently, I am working as a{" "}
            <span className="font-semibold">Research Intern</span> on{" "}
            <a
              className="font-semibold underline"
              href="https://ahlab.org/project/aisee/"
              target="_blank"
            >
              AI See
            </a>
            , a wearable device for the visually impaired, at the{" "}
            <a
              className="font-semibold underline"
              href="https://ahlab.org"
              target="_blank"
            >
              Augmented Human Lab
            </a>
            .
          </p>
          <p className="mt-3">
            I also co-founded{" "}
            <a
              className="font-semibold underline"
              href="https://folo-up.co/"
              target="_blank"
            >
              FoloUp
            </a>
            , where we provide{" "}
            <span className="font-semibold">
              AI-powered in-depth qualitative interviews.
            </span>
          </p>
          <p className="mt-3">
            You can talk to me about{" "}
            <span className="font-semibold">
              LLMs, Deep Learning, AI agents, HCI, Software Engineering
            </span>{" "}
            and <span className="font-semibold">Startups</span>.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-5 p-3 ">
        <a
          href="https://github.com/SuveenE"
          className="group w-fit rounded-lg border border-transparent py-3 px-1 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <p className="mb-3 text-md font-semibold ">Github</p> */}
          <Image
            className="ml-auto rounded-md"
            src="/github-logo.png"
            alt="company logo"
            width={30}
            height={30}
            priority
          />
        </a>

        <a
          href="https://twitter.com/SuveenE"
          className="group w-fit rounded-lg border border-transparent py-3 px-1 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="ml-auto rounded-md"
            src="/x-logo.png"
            alt="company logo"
            width={30}
            height={30}
            priority
          />
        </a>

        <a
          href="https://www.linkedin.com/in/suveen-ellawela/"
          className="group w-fit rounded-lg border border-transparent py-3 px-1 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="ml-auto rounded-md"
            src="/linkedin.jpg"
            alt="company logo"
            width={30}
            height={30}
            priority
          />{" "}
        </a>

        <a
          href="https://scholar.google.com/citations?hl=en&user=EPo-WiEAAAAJ"
          className="group rounded-lg border border-transparent py-3 px-1 hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="ml-auto rounded-md"
            src="/google-scholar.png"
            alt="company logo"
            width={30}
            height={30}
            priority
          />{" "}
        </a>
      </div>
    </>
  );
};

export default AboutMeSection;