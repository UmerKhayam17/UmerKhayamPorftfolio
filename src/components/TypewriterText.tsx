import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "SaaS Architect",
  "MERN Stack Expert",
  "Backend Engineer",
];

const TypewriterText = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < currentRole.length) {
        setCharIndex(charIndex + 1);
      } else if (!deleting && charIndex === currentRole.length) {
        setTimeout(() => setDeleting(true), 2000);
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
