import React from "react"
import { Link, graphql } from 'gatsby'
//import './post.css';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="Home" keywords={[`developer`, `software`, `programmer`]} />
      <h1>My Lambda Labs Experience</h1>
      <p>Welcome to my blog about Software Engineering on a team! Below are 5 blog posts documenting my experience during Lambda School Labs. Labs is a 5-week long team project. Check out my experience!</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
        {postList.edges.map(({ node }, i) => (
          <Link to={node.fields.slug} className="link" >
            <div className="post-list">
              <h1>{node.frontmatter.title}</h1>
            </div>
          </Link>
        ))}
    </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`