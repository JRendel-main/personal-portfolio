import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head
        title="JRendel"
      />
      <body className={"bg-slate-100 dark:bg-zinc-900 dark:text-white transition-colors duration-500 ease-in-out"
      }>
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}
