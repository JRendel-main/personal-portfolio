import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Layout>
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <Hero />
          </div>
          <div className="mb-10">
            <About />
          </div>
          <div className="mb-10">
            <Education />
          </div>
          <div className="mb-10">
            <Skills />
          </div>
        </div>
      </Layout>
    </main>
  );
}
