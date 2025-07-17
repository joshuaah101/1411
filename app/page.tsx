"use client";
import Image from "next/image";
import Link from "next/link";
import { BiPhoneCall, BiStar } from "react-icons/bi";
import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
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

        <div className="absolute top-[28%] px-6 lg:px-0 lg:left-25 flex flex-col gap-8 lg:w-[50%] text-white">
          <h1 className="text-3xl lg:text-5xl font-bold leading-[1.2]">
            People and Technology, Perfectly Aligned. The Future Is You.
          </h1>
          <p className="text-md lg:text-lg">
            We're empowering individuals, startups, and businesses unlock their
            full potential in the dynamic tech world. We create environment
            where technology is leveraged to solve real-world problems, enhance
            lives, and build a sustainable future.
          </p>
          <div className="flex flex-col md:flex-row gap-5 md:items-center">
            <button className="btn bg-deep-blue text-accent-blue py-6 text-lg font-normal">
              Get Scholarship
            </button>

            <div className="flex gap-5 items-center">
              <span>Be Future-Ready</span>
              <BiStar className="text-accent-blue" size={30} />
            </div>
          </div>
        </div>

        <div className="sticky top-0">
          <div className="bg-deep-blue hidden md:flex justify-center gap-2 py-2 w-full items-center text-white">
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
            className={`flex ps-5 pe-5 md:ps-0 md:pe-0 py-3 justify-between md:justify-center lg:gap-70 items-center ${
              scrolled ? "bg-white text-deep-blue" : "text-white bg-transparent"
            }`}
          >
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={130} height={80} />
            </Link>

            <ul className="hidden md:flex gap-10">
              <Link
                href="#"
                className="text-base font-medium hover:text-accent-blue transition-all duration-300 ease-in"
              >
                <li>Why 1411 Group</li>
              </Link>

              <Link
                href="#"
                className="text-base font-medium hover:text-accent-blue transition-all duration-300 ease-in"
              >
                <li>About Us</li>
              </Link>

              <div className="relative group">
                <Link
                  href="#"
                  className="text-base font-medium hover:text-accent-blue transition-all duration-300 ease-in"
                >
                  <li>Bootcamp</li>
                </Link>

                {/* secondary menu */}
                <div className="absolute rounded-md bg-deep-blue shadow-2xl shadow-accent-blue text-white ps-10 py-6 w-[350px] hidden z-50 group-hover:block transition-all duration-300 ease-in">
                  <ul className="flex flex-col gap-5">
                    <Link
                      href="#"
                      className="text-sm font-medium hover:text-accent-blue transition-all duration-300 ease-in"
                    >
                      <li>Software Engineering+Cloud</li>
                    </Link>

                    <Link
                      href="#"
                      className="text-sm font-medium hover:text-accent-blue transition-all duration-300 ease-in"
                    >
                      <li>Data Analysis</li>
                    </Link>

                    <Link
                      href="#"
                      className="text-sm font-medium hover:text-accent-blue transition-all duration-300 ease-in"
                    >
                      <li>Project Management</li>
                    </Link>

                    <Link
                      href="#"
                      className="text-sm font-medium hover:text-accent-blue transition-all duration-300 ease-in"
                    >
                      <li>Software Quality Assurance</li>
                    </Link>
                  </ul>
                </div>
              </div>

              <Link
                href="#"
                className="text-base font-medium hover:text-accent-blue transition-all duration-300 ease-in"
              >
                <li>Contact Us</li>
              </Link>
            </ul>

            <button className="hidden md:flex btn bg-deep-blue hover:bg-accent-blue transition-all duration-300 ease-in border-0">
              Apply now
            </button>

            <BiMenu
              size={40}
              className="md:hidden cursor-pointer hover:text-accent-blue"
            />
          </nav>
        </div>

        <section className="hidden lg:flex absolute bottom-[-18px] left-1/4">
          <div className="flex gap-10 justify-center items-center py-8 text-white">
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

      <main className="bg-white flex flex-col gap-10">
        <section className="flex flex-col md:flex-row bg-white justify-center items-center gap-4 md:gap-10 overflow-hidden px-8 md:px-0 py-5">
          <div className="text-gray-400 text-sm md:text-xl md:text-right w-full md:w-[400px]">
            Our trusted partners and clients, together, we drive success and
            make a lasting impact in the industry.
          </div>

          <div className="overflow-hidden relative w-full md:w-[400px] h-[120px]">
            <div className="absolute right-0 flex space-x-1 slide">
              <div className="w-[100px] h-[80px]">
                <Image
                  src="/axa-logo.png"
                  alt="Axa"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>

              <div className="w-[100px] h-[80px]">
                <Image
                  src="/vida.png"
                  alt="vida"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>

              <div className="w-[100px] h-[80px]">
                <Image
                  src="/vfd-tech.png"
                  alt="vfd"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>

              <div className="w-[100px] h-[80px]">
                <Image
                  src="/coa.jpg"
                  alt="coa"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>

              <div className="w-[100px] h-[80px]">
                <Image
                  src="/anchor.png"
                  alt="anchor"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>

              <div className="w-[100px] h-[80px]">
                <Image
                  src="/dc.png"
                  alt="datacamp donates"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col w-full md:max-w-6xl mx-auto gap-20 px-8 md:px-0">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-[500px] h-[300px] flex md:flex-1/2">
              <Image
                src="/marketing-team.jpg"
                alt="marketing team"
                width={500}
                height={300}
                className="object-cover shadow-2xl shadow-accent-blue rounded-t-[50px] rounded-bl-[50px]"
              />
            </div>

            <div className="flex flex-col md:flex-1/2 gap-8">
              <h1 className="font-bold text-xl md:text-3xl">
                Tomorrow's Tech, Today's Innovation
              </h1>

              <p className="text-md md:text-lg">
                Innovation is at the heart of what we do. We offer a range of
                services to support startups and businesses, helping them to
                launch, grow, and scale. Our solutions encompass tech training,
                consulting, and comprehensive support in areas such as software
                development, data analytics, business acceleration, digital
                transformation, and more.
              </p>

              <div className="flex items-center space-x-5">
                <Link
                  href="#"
                  className="font-normal text-teal-500 hover:text-black"
                >
                  Why Choose Us
                </Link>
                <BsArrowUpRight className="text-teal-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 max-w-6xl mx-auto">
            <span className="bg-deep-blue text-accent-blue rounded-[40px] p-3 text-2xl md:text-[70px] font-bold">
              70% off
            </span>

            <h1 className="text-3xl md:text-[80px] font-bold">Scholarship</h1>
          </div>
        </section>
      </main>
    </div>
  );
}
