import { jsPDF } from "jspdf";
import { experiences, profile, projects, skillCategories } from "@/data/portfolioData";

// ======================= CONFIGURATION =======================
const CONFIG = {
  page: { width: 210, height: 297, topMargin: 18, bottomMargin: 20 },
  leftMargin: 15,
  rightMargin: 15,
  lineHeight: 5.5,
  bulletIndent: 5,
  colors: {
    text: [33, 33, 33],
    secondary: [100, 100, 100],
    accent: [41, 128, 185],     // subtle blue for section titles (optional)
    lightGray: [240, 240, 240],
  },
  fonts: {
    name: 22,
    role: 12,
    section: 13,
    jobTitle: 11,
    company: 10,
    body: 10,
    small: 9.5,
  },
};

// ======================= MAIN FUNCTION =======================
export const downloadResume = () => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  let y = CONFIG.page.topMargin;
  const contentWidth = CONFIG.page.width - CONFIG.leftMargin - CONFIG.rightMargin;

  // Helper: new page if needed
  const ensurePage = (spaceNeeded: number) => {
    if (y + spaceNeeded > CONFIG.page.height - CONFIG.page.bottomMargin) {
      doc.addPage();
      y = CONFIG.page.topMargin;
    }
  };

  // Helper: draw text with formatting (resets after)
  const drawText = (
    text: string,
    x: number,
    y: number,
    options?: { fontSize?: number; fontStyle?: string; color?: [number, number, number] }
  ) => {
    if (options?.fontSize) doc.setFontSize(options.fontSize);
    if (options?.fontStyle) doc.setFont("helvetica", options.fontStyle);
    if (options?.color) doc.setTextColor(...options.color);
    doc.text(text, x, y);
    // Reset
    doc.setFontSize(CONFIG.fonts.body);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...CONFIG.colors.text);
  };

  // Helper: wrapped text with hanging indent support
  const wrappedText = (
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number = CONFIG.lineHeight,
    indentFirstLine: number = 0
  ) => {
    const lines = doc.splitTextToSize(text, maxWidth);
    lines.forEach((line: string, idx: number) => {
      const offsetX = idx === 0 ? indentFirstLine : 0;
      doc.text(line, x + offsetX, y + idx * lineHeight);
    });
    return lines.length * lineHeight;
  };

  // Section title with underline
  const sectionTitle = (title: string) => {
    ensurePage(10);
    drawText(title, CONFIG.leftMargin, y, {
      fontSize: CONFIG.fonts.section,
      fontStyle: "bold",
      color: CONFIG.colors.accent,
    });
    y += 4;
    doc.setDrawColor(180, 180, 180);
    doc.line(CONFIG.leftMargin, y, CONFIG.leftMargin + contentWidth, y);
    y += 6;
  };

  // ========== HEADER ==========
  drawText(profile.name, CONFIG.leftMargin, y, {
    fontSize: CONFIG.fonts.name,
    fontStyle: "bold",
  });
  y += 8;

  drawText(profile.role, CONFIG.leftMargin, y, {
    fontSize: CONFIG.fonts.role,
    fontStyle: "italic",
    color: CONFIG.colors.secondary,
  });
  y += 6;

  // Contact line - split into two lines if too long (never overflows)
  const contactRaw = `${profile.location} | ${profile.phone} | ${profile.email} | ${profile.linkedin.replace(/^https?:\/\//, "")}`;
  const contactLines = doc.splitTextToSize(contactRaw, contentWidth);
  contactLines.forEach((line: string) => {
    drawText(line, CONFIG.leftMargin, y, { fontSize: CONFIG.fonts.small });
    y += CONFIG.lineHeight;
  });
  y += 4;

  // ========== SUMMARY ==========
  sectionTitle("PROFESSIONAL SUMMARY");
  const summaryHeight = wrappedText(profile.summary, CONFIG.leftMargin, y, contentWidth);
  y += summaryHeight + 6;

  // ========== SKILLS ==========
  sectionTitle("TECHNICAL SKILLS");
  skillCategories.forEach((cat) => {
    ensurePage(CONFIG.lineHeight);
    // Label with fixed width for perfect alignment
    const label = `${cat.title}:`;
    const labelWidth = doc.getTextWidth(label);
    drawText(label, CONFIG.leftMargin, y, { fontSize: CONFIG.fonts.body, fontStyle: "bold" });
    const skillsText = cat.skills.join(", ");
    const skillsX = CONFIG.leftMargin + labelWidth + 2;
    const availableWidth = contentWidth - labelWidth - 2;
    // Wrap skills text if needed
    const skillLines = doc.splitTextToSize(skillsText, availableWidth);
    skillLines.forEach((line: string, idx: number) => {
      const lineY = y + idx * CONFIG.lineHeight;
      ensurePage(CONFIG.lineHeight);
      doc.text(line, skillsX, lineY);
    });
    y += skillLines.length * CONFIG.lineHeight;
  });
  y += 4;

  // ========== EXPERIENCE ==========
  sectionTitle("PROFESSIONAL EXPERIENCE");

  experiences.forEach((exp) => {
    ensurePage(20);
    // --- Job title & date (no overlap) ---
    const titleX = CONFIG.leftMargin;
    const dateText = exp.period;
    const dateWidth = doc.getTextWidth(dateText);
    const maxTitleWidth = contentWidth - dateWidth - 4; // 4mm gap
    let titleText = exp.title;
    let titleLines = [titleText];
    if (doc.getTextWidth(titleText) > maxTitleWidth) {
      // Truncate or wrap? We'll wrap the title.
      titleLines = doc.splitTextToSize(titleText, maxTitleWidth);
    }
    // Draw title lines (first line at current y)
    titleLines.forEach((line: string, idx: number) => {
      drawText(line, titleX, y + idx * CONFIG.lineHeight, {
        fontSize: CONFIG.fonts.jobTitle,
        fontStyle: "bold",
      });
    });
    // Draw date on the same line as the first title line
    drawText(dateText, CONFIG.leftMargin + contentWidth - dateWidth, y, {
      fontSize: CONFIG.fonts.small,
      color: CONFIG.colors.secondary,
    });
    y += titleLines.length * CONFIG.lineHeight + 2;

    // --- Company ---
    drawText(exp.org, CONFIG.leftMargin, y, {
      fontSize: CONFIG.fonts.company,
      fontStyle: "italic",
      color: CONFIG.colors.secondary,
    });
    y += 5;

    // --- Bullet points with hanging indent ---
    exp.points.forEach((point) => {
      ensurePage(5);
      const bulletSymbol = "•";
      const bulletX = CONFIG.leftMargin;
      const textX = bulletX + CONFIG.bulletIndent;
      const textWidth = contentWidth - CONFIG.bulletIndent;
      drawText(bulletSymbol, bulletX, y, { fontSize: CONFIG.fonts.body });
      const linesCount = wrappedText(point, textX, y, textWidth, CONFIG.lineHeight, 0);
      y += linesCount * CONFIG.lineHeight;
    });
    y += 4;
  });

  // ========== PROJECTS ==========
  sectionTitle("SELECTED PROJECTS");

  projects.forEach((proj) => {
    ensurePage(15);
    // Project title
    drawText(proj.title, CONFIG.leftMargin, y, {
      fontSize: CONFIG.fonts.jobTitle,
      fontStyle: "bold",
    });
    y += 5;

    // Description
    const descHeight = wrappedText(proj.desc, CONFIG.leftMargin, y, contentWidth);
    y += descHeight + 3;

    // Tech stack
    drawText(`Tech: ${proj.tags.join(", ")}`, CONFIG.leftMargin, y, {
      fontSize: CONFIG.fonts.small,
      color: CONFIG.colors.secondary,
    });
    y += 4;

    // Link (optional, but keep)
    drawText(`Link: ${proj.link}`, CONFIG.leftMargin, y, {
      fontSize: CONFIG.fonts.small,
      color: CONFIG.colors.secondary,
    });
    y += 7;
  });

  // Save
  doc.save("Umer-Khayam-Resume-Professional.pdf");
};