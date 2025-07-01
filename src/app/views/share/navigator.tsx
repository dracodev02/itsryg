"use client";
import { useState, useEffect } from "react";

interface NavigatorItem {
  id: string;
  label: string;
}

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navigator = () => {
  const navigators: NavigatorItem[] = [
    {
      id: "home",
      label: "Home",
    },
    {
      id: "products",
      label: "Products",
    },
    {
      id: "communityAndEvents",
      label: "Community & Events",
    },
    {
      id: "partners",
      label: "Partners",
    },
    {
      id: "about",
      label: "About",
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  const [activeSection, setActiveSection] = useState(navigators[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    navigators.forEach((navigator) => {
      const section = document.getElementById(navigator.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navigators.forEach((navigator) => {
        const section = document.getElementById(navigator.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [navigators]);

  return (
    <div className="relative">
      <button
        className="md:hidden flex items-center p-2 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-x-8 items-end max-[1200px]:gap-x-4">
        {navigators.map((navigator, index) => (
          <div
            key={index}
            className={`${
              activeSection === navigator.id
                ? "text-foreground"
                : "text-gray-500"
            } cursor-pointer hover:text-foreground hover:underline font-semibold text-lg max-[1200px]:text-base`}
            onClick={() => scrollToSection(navigator.id)}
          >
            {navigator.label}
          </div>
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        onBlur={() => setIsMenuOpen(false)}
        className={`${
          isMenuOpen ? "block" : "hidden"
        }  absolute top-full right-0 w-48 bg-white shadow-lg rounded-lg mt-2 z-50`}
      >
        {navigators.map((navigator, index) => (
          <div
            key={index}
            className={`${
              activeSection === navigator.id
                ? "text-foreground bg-gray-100"
                : "text-gray-500"
            } cursor-pointer hover:text-foreground hover:bg-gray-100 font-semibold text-base px-4 py-2 first:rounded-t-lg last:rounded-b-lg`}
            onClick={() => {
              scrollToSection(navigator.id);
              setIsMenuOpen(false);
            }}
          >
            {navigator.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigator;
