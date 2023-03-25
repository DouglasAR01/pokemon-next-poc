import { Html, Head, Main, NextScript } from "next/document";
import { CSSProperties } from "react";

export default function Document() {
  const bodyStyles: CSSProperties = {
    backgroundColor: "var(--surface-ground)",
    margin: 0,
  };
  return (
    <Html>
      <Head />
      <body style={bodyStyles}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
