import React from "react";
import Layout from "@/components/Layout";

const index = () => {
  return (
    <Layout>
      <div className="container">
        <div className="mb-5">
          <h1 className="text-5xl font-extrabold">Skills</h1>
        </div>
        <div className="flex justify-center mt-5">
          <div className="flex justify-between mx-5 gap-4">
            <div className="flex justify-center">
              <div className="w-1/2 bg-slate-100 dark:bg-slate-900">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-2xl font-bold">
                      Programming Languages
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-xl italic">JavaScript</h1>
                    <h1 className="text-xl italic">TypeScript</h1>
                    <h1 className="text-xl italic">Python</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-1/2 bg-slate-100 dark:bg-slate-900">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-2xl font-bold">Frontend</h1>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-xl italic">React</h1>
                    <h1 className="text-xl italic">NextJS</h1>
                    <h1 className="text-xl italic">TailwindCSS</h1>
                    <h1 className="text-xl italic">Material UI</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-1/2 bg-slate-100 dark:bg-slate-900">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-2xl font-bold">Backend</h1>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-xl italic">ExpressJS</h1>
                    <h1 className="text-xl italic">NodeJS</h1>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-1/2 bg-slate-100 dark:bg-slate-900">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-2xl font-bold">Database</h1>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-xl italic">MongoDB</h1>
                      <h1 className="text-xl italic">MySQL</h1>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-1/2 bg-slate-100 dark:bg-slate-900">
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-2xl font-bold">Others</h1>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-xl italic">Git</h1>
                        <h1 className="text-xl italic">Github</h1>
                        <h1 className="text-xl italic">Gitlab</h1>
                        <h1 className="text-xl italic">Bitbucket</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default index;
