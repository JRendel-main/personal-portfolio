import Layout from "@/components/Layout";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Layout>
        <div className="container">
          <div className="mb-5">
            <About />
          </div>
        </div>
      </Layout>
    </main>
    
  );
}
