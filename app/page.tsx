"use client";
import Image from "next/image";
import Link from "next/link";
import { BiPhoneCall, BiStar } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className="relative h-screen bg-deep-blue shadow-accent-blue">
        <video
          autoPlay
          loop
          className="absolute left-0 top-0 h-[90%] w-full object-cover"
        >
          <source src="/hero.mov" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-[28%] left-25 flex flex-col gap-8 w-[50%]">
          <h1 className="text-5xl font-bold leading-[1.2]">
            People and Technology, Perfectly Aligned. The Future Is You.
          </h1>
          <p className="text-md xl:text-lg">
            We're empowering individuals, startups, and businesses unlock their
            full potential in the dynamic tech world. We create environment
            where technology is leveraged to solve real-world problems, enhance
            lives, and build a sustainable future.
          </p>
          <div className="flex gap-5 items-center">
            <button className="btn bg-deep-blue text-accent-blue py-6">
              Get Scholarship
            </button>

            <div className="flex gap-5 items-center">
              <span>Be Future-Ready</span>
              <BiStar className="text-accent-blue" />
            </div>
          </div>
        </div>

        <div className="sticky top-0">
          <div className="bg-deep-blue flex justify-center gap-2 py-2 w-full">
            <span className="text-xs">
              We empower individuals and organizations through cutting-edge tech
              training.
            </span>
            <BiPhoneCall size={20} />
            <Link href="tel:+2347038628610" className="text-xs">
              0703 862 8610
            </Link>
          </div>

          <nav
            className={`flex justify-center gap-50 items-center py-2 ${
              scrolled ? "bg-white text-deep-blue" : "text-white bg-transparent"
            }`}
          >
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={120} height={80} />
            </Link>

            <ul className="flex gap-10">
              <Link
                href="#"
                className="text-base font-medium hover:text-accent-blue transition-all duration-300 ease-in"
              >
                Why 1411 Group
              </Link>

              <Link
                href="#"
                className="text-base font-medium hover:text-accent-blue transition-all duration-300 ease-in"
              >
                About Us
              </Link>

              <Link
                href="#"
                className="text-base font-medium hover:text-accent-blue transition-all duration-300 ease-in"
              >
                Bootcamp
              </Link>

              <Link
                href="#"
                className="text-base font-medium hover:text-accent-blue transition-all duration-300 ease-in"
              >
                Contact Us
              </Link>
            </ul>

            <button className="btn bg-deep-blue hover:bg-accent-blue transition-all duration-300 ease-in border-0">
              Apply now
            </button>
          </nav>
        </div>

        <section className="absolute bottom-[-18px] left-1/4">
          <div className="flex gap-10 justify-center items-center py-8">
            <div className="flex flex-col gap- border-l-2 border-accent-blue px-2">
              <h2 className="text-lg font-medium">Discover 1411 </h2>
              <span className="text-sm">Innovative tech programs</span>
            </div>

            <div className="flex flex-col gap- border-l-2 border-accent-blue px-2">
              <h2 className="text-lg font-medium">Tech Solutions</h2>
              <span className="text-sm">
                Custom software solutions for your business
              </span>
            </div>

            <div className="flex flex-col gap- border-l-2 border-accent-blue px-2">
              <h2 className="text-lg font-medium">Work Placement</h2>
              <span className="text-sm">
                In-demand skills for global tech career
              </span>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="flex bg-white justify-center items-center px-60 gap-4">
          <div className="py-14 text-gray-400 text-xl md:text-right">
            Our trusted partners and clients, together, we drive success and
            make a lasting impact in the industry.
          </div>

          <marquee behavior="" direction="left">
            <div className="flex gap-2">
              <Image
                src="/dc.png"
                alt="datacamp donates"
                width={100}
                height={100}
              />

              <Image
                src="/axa-logo.png"
                alt="Axa"
                width={100}
                height={100}
              />

              <Image
                src="/vida.png"
                alt="vida"
                width={100}
                height={100}
              />

              <Image
                src="/vfd-tech.png"
                alt="vfd"
                width={100}
                height={100}
              />

              <Image
                src="/coa.jpg"
                alt="coa"
                width={100}
                height={100}
              />

              <Image
                src="/anchor.png"
                alt="anchor"
                width={100}
                height={100}
              />
            </div>
          </marquee>
        </section>
      </main>
    </div>
  );
}
