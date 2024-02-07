import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head
        title="JRendel"
      />
      <body className="
        bg-gradient-to-r from-neutral-100 to-stone-200
        dark:from-neutral-800 dark:to-neutral-900
        text-gray-800
        dark:text-gray-200
        transition-all
        ease-in-out
        duration-500
      ">
        
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}
