import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Briefcase,
  Code2,
  Copy,
  ExternalLink,
  FolderGit2,
  Github,
  Home,
  Linkedin,
  Mail,
  MessageCircle,
  User,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { profile, projects } from "@/data/portfolioData";
import { OPEN_COMMAND_MENU } from "@/lib/commandMenu";


const sections = [
  { id: "top", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "contact", label: "Contact", icon: Mail },
];

const CommandMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_COMMAND_MENU, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_COMMAND_MENU, onOpen);
    };
  }, []);

  const run = useCallback((fn: () => void) => {
    setOpen(false);
    // let the dialog close (and restore scroll lock) before acting
    setTimeout(fn, 50);
  }, []);

  const goTo = (id: string) =>
    run(() => {
      if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });

  const openUrl = (url: string) => run(() => window.open(url, "_blank", "noopener,noreferrer"));

  const copyEmail = () =>
    run(async () => {
      try {
        await navigator.clipboard.writeText(profile.email);
        toast.success("Email copied", { description: profile.email });
      } catch {
        toast.error("Couldn't copy — " + profile.email);
      }
    });

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search sections, projects, actions…" />
      <CommandList className="max-h-[420px]">
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigate">
          {sections.map(({ id, label, icon: Icon }) => (
            <CommandItem key={id} value={`go ${label}`} onSelect={() => goTo(id)}>
              <Icon className="mr-2" /> {label}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />
        <CommandGroup heading="Contact">
          <CommandItem value="copy email" onSelect={copyEmail}>
            <Copy className="mr-2" /> Copy email address
            <CommandShortcut>{profile.email}</CommandShortcut>
          </CommandItem>
          <CommandItem value="send email" onSelect={() => run(() => (window.location.href = `mailto:${profile.email}`))}>
            <Mail className="mr-2" /> Send an email
          </CommandItem>
          <CommandItem value="whatsapp chat" onSelect={() => openUrl(`https://wa.me/${profile.whatsapp}`)}>
            <MessageCircle className="mr-2" /> Chat on WhatsApp
          </CommandItem>
          <CommandItem value="linkedin" onSelect={() => openUrl(profile.linkedin)}>
            <Linkedin className="mr-2" /> LinkedIn
          </CommandItem>
          <CommandItem value="github" onSelect={() => openUrl(profile.github)}>
            <Github className="mr-2" /> GitHub
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />
        <CommandGroup heading="Projects">
          {projects.map((p) => (
            <CommandItem
              key={p.title}
              value={`${p.title} ${p.category} ${p.tags.join(" ")}`}
              onSelect={() => (p.link ? openUrl(p.link) : goTo("projects"))}
            >
              <FolderGit2 className="mr-2" />
              <span className="truncate">{p.title}</span>
              <CommandShortcut className="flex items-center gap-1 tracking-normal">
                {p.link ? <><ExternalLink className="!w-3 !h-3" /> open</> : "private"}
              </CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>

      </CommandList>
    </CommandDialog>
  );
};

export default CommandMenu;
