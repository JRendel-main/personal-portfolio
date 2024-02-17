import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>JRendels || Web Developer</title>
      </Head>
      <body
        className="
        bg-gradient-to-r from-violet-200 to-pink-200
        dark:from-zinc-800 dark:to-slate-800
        transition-all
        ease-in-out
        duration-500
      "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
