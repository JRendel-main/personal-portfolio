import React from 'react'
import Layout from '@/components/Layout'
import ProjectCards from '@/components/ProjectCards'
import { ProjectList } from '@/constants/Projects'

const index = () => {
  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-1 justify-center mt-7">
            <h1 className="text-4xl font-bold text-center">My Recent 
            <span className="text-purple-300"> Works</span>
            </h1>
            <h1 className="text-2l font-small text-center">Here are the few projects I&apos;ve worked on recently.</h1>
        </div>
        <div className="grid grid-cols-3 justify-between content-center gap-5 mt-8">
            {ProjectList.map((project, index) => (
                <ProjectCards
                key={index}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                projectImage={project.projectImage}
                projectLink={project.projectLink}
                projectDemo={project.projectDemo}
                projectTags={project.projectTags}
                projectType={project.projectType}
                />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default index
