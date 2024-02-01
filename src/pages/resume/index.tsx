import React from 'react'
import Layout from '@/components/Layout'
import Education from '@/components/Education'


const index = () => {
  return (
    <Layout>
        <div className="container">
            <div className="mb-5">
            <Education />
            </div>
        </div>
    </Layout>
  )
}

export default index
