"use client";
import Image from "next/image";
import Link from "next/link";
import cn from "@/utils";
import { useStateCtx } from "@/app/appcontext";
import useWindowHeight from "@/hooks";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { CloseSquare, HambergerMenu } from "iconsax-react";

const NAV_LINKS = [
  { id: 1, link: "home", label: "home" },
  { id: 2, link: "services", label: "services" },
  { id: 3, link: "about-us", label: "about us" },
  { id: 4, link: "contacts", label: "contacts" },
];

const NavBar = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();

  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <nav
      className={cn(
        " max-[500px]:py-2   px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center  transition-colors duration-500",
        scrollHeight > 200
          ? " fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 opacity-0 animate-slideDown bg-white/90 py-2 border-b border-gray-200 shadow-md"
          : "sm:py-6 py-4",
        {
          "bg-white/60 ": scrollHeight > 800 && scrollHeight < 4300,
        }
      )}
    >
      <Link
        href="/?path=home"
        className={cn(
          " max-sm:w-[120px] max-[450px]:w-[100px]",
          scrollHeight > 200 ? "w-[120px] " : "w-fit"
        )}
      >
        <Image src="/logo.png" alt="logo" width={155} height={55} />
      </Link>
      <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
        {NAV_LINKS.map((link) => (
          <Link
            href={
              link.link === "home"
                ? "/?path=home"
                : `${link.link}?path=${link.link}`
            }
            key={link.id}
            onClick={() => {
              setIsActive(link.link);
            }}
            className={cn(
              " w-full   flex justify-center capitalize text-base relative font-medium",
              isActive === link.link ? "text-brand-main" : "text-brand-blue"
            )}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex">
        <button type="button">
          <Link href="" className="text-brand-blue">
            Login
          </Link>
        </button>
      </div>
      <button
        tabIndex={0}
        className="lg:hidden text-2xl text-brand-main"
        onClick={() => setShowMobileMenu(true)}
      >
        <HambergerMenu />
      </button>
      <MobileNav />
    </nav>
  );
};

export function SkeletonNavbar() {
  return (
    <div className="w-full flex justify-between items-center gap-x-2 h-[56px] px-2 sm:px-4 sm:py-6 py-4">
      <div className="animate-pulse [animation-delay:0.4s] bg-black/20 h-full w-full max-w-[100px] rounded-md" />

      <div className="hidden lg:flex items-center gap-x-2 md:gap-x-6 w-full max-w-[500px] justify-center h-full">
        <div className="animate-pulse [animation-delay:0.5s] bg-black/20 h-full w-full rounded-full" />
        <div className="animate-pulse [animation-delay:0.4s] bg-black/20 h-full w-full rounded-full" />
        <div className="animate-pulse [animation-delay:0.3s] bg-black/20 h-full w-full rounded-full" />
        <div className="animate-pulse [animation-delay:0.2s] bg-black/20 h-full w-full rounded-full" />
      </div>

      <div className="animate-pulse [animation-delay:0.1s] bg-black/20 h-full w-full max-w-[70px] lg:max-w-[200px] rounded-md lg:rounded-full" />
    </div>
  );
}

const MobileNav = () => {
  const { showMobileMenu, setShowMobileMenu } = useStateCtx();

  const [isActive, setIsActive] = useState("");
  const searchParams = useSearchParams().get("path");

  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showMobileMenu]);

  return (
    <>
      <div
        className={cn(
          "lg:hidden fixed min-h-screen w-full bg-black/50 top-0 left-0 z-20 transition-all duration-300",
          showMobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setShowMobileMenu(false)}
      />
      <nav
        className={cn(
          "pt-20 lg:hidden  px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full max-w-[300px] sm:max-w-[70%] md:max-w-[50%] justify-between items-center bg-white/90 backdrop-blur-lg fixed right-0 top-0 z-50 h-screen transition-all opacity-0",
          showMobileMenu
            ? "translate-x-0 duration-1000 opacity-100"
            : "translate-x-full duration-300"
        )}
      >
        <button
          autoFocus
          aria-label="close menu"
          type="button"
          className="outline-none text-brand-blue text-2xl sm:text-4xl absolute top-2 right-2 h-12 w-12"
          onClick={() => setShowMobileMenu(false)}
          tabIndex={0}
        >
          <CloseSquare />
        </button>
        <div className="flex flex-col items-start h-full gap-y-10 ">
          {NAV_LINKS.map((link) => (
            <Link
              tabIndex={0}
              aria-label={link.label}
              href={
                link.link === "home"
                  ? "/?path=home"
                  : `${link.link}?path=${link.link}`
              }
              key={link.id}
              onClick={() => {
                setIsActive(link.link);
                setShowMobileMenu(false);
              }}
              className={cn(
                " w-full   flex justify-center capitalize text-base relative font-medium",
                isActive === link.link ? "text-brand-main" : "text-brand-blue"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="lg:hidden flex flex-col gap-y-5 [&>button]:border-primary-light [&>button]:border [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-md [&>button:last-child]:bg-primary-light  [&>button:last-child]:text-white [&>button]:font-medium [&>button]:text-primary-light">
            <button type="button">
              <Link href="" className="text-brand-blue">
                Login
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
