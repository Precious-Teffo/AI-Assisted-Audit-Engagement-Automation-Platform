import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
  mermaid.initialize({
    startOnLoad: true,
    theme: "base",
    sequence: { actorMargin: 60, messageMargin: 40, boxMargin: 10 },
    themeVariables: {
      fontFamily: "-apple-system, Segoe UI, Arial, sans-serif",
      fontSize: "14px",
      primaryColor: "#F1EFE8",
      primaryTextColor: "#2c2c2a",
      primaryBorderColor: "#888780",
      lineColor: "#5F5E5A",
      actorBkg: "#E6F1FB",
      actorBorder: "#185FA5",
      actorTextColor: "#042C53",
      signalColor: "#5F5E5A",
      signalTextColor: "#2c2c2a",
      labelBoxBkgColor: "#FAECE7",
      labelBoxBorderColor: "#993C1D",
      labelTextColor: "#4A1B0C",
      loopTextColor: "#2c2c2a",
      noteBkgColor: "#DCEEEC",
      noteBorderColor: "#0F766E"
    }
  });
