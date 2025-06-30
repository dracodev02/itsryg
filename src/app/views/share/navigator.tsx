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
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    // Observe each section
    navigators.forEach((navigator) => {
      const section = document.getElementById(navigator.id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer on component unmount
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
    <div className="flex gap-x-8 items-end">
      {navigators.map((navigator, index) => {
        return (
          <div
            key={index}
            className={`${
              activeSection === navigator.id
                ? "text-foreground"
                : "text-gray-500"
            } cursor-pointer hover:text-foreground hover:underline font-semibold text-xl`}
            onClick={() => scrollToSection(navigator.id)}
          >
            {navigator.label}
          </div>
        );
      })}
    </div>
  );
};

export default Navigator;
