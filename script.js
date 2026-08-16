import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
  mermaid.initialize({
    startOnLoad: true,
    theme: "base",
    flowchart: { curve: "basis", nodeSpacing: 40, rankSpacing: 45 },
    themeVariables: {
      fontFamily: "-apple-system, Segoe UI, Arial, sans-serif",
      fontSize: "14px",
      primaryColor: "#F1EFE8",
      primaryTextColor: "#2c2c2a",
      primaryBorderColor: "#888780",
      lineColor: "#5F5E5A"
    }
  });
