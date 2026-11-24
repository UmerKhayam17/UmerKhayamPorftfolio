import { useEffect, useState } from "react";
import { profile } from "@/data/portfolioData";

const roles = profile.roles;

const TypewriterText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const atEnd = !deleting && charIndex === currentRole.length;
    const timeout = atEnd ? 2000 : deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < currentRole.length) {
        setCharIndex(charIndex + 1);
      } else if (!deleting && charIndex === currentRole.length) {
        setDeleting(true);
      } else if (deleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <span className="text-gradient-primary">
      {roles[roleIndex].slice(0, charIndex)}
      <span className="animate-pulse-slow text-primary">|</span>
    </span>
  );
};

export default TypewriterText;
