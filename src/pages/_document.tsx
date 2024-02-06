import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head
        title="JRendel"
      />
      <body className="
        bg-gradient-to-r from-blue-200 to-cyan-200
        dark:bg-gradient-to-r dark:from-blue-800 dark:to-cyan-800
        text-gray-800
        dark:text-gray-200
        transition-all
        ease-in-out
        duration-500
        w-full
        h-full
        overflow-x-hidden
      ">
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}
