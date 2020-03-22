import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1
      style={{
        marginTop: "1.5rem",
      }}
    >
      Find TikTok Videos with #hashtags.
    </h1>
  </Layout> 
)

export default IndexPage
