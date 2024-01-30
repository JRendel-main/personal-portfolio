import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  return (
    <main className={roboto.className}>
      <Layout>
        <div className="container">
          <div className="mb-5">
            <Hero />
          </div>
          <div className="mb-5">
            <About />
          </div>
        </div>
      </Layout>
    </main>
    
  );
}
