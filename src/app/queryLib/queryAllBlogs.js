const queryAllBlogs = `
    query getBlogs {
    blogs(first: 25) {
        edges {
        node {
            articles(first: 25) {
            edges {
                node {
                title
                id
                handle
                authorV2 {
                    name
                }
                content(truncateAt: 500)
                contentHtml
                publishedAt
                image {
                    url(transform: {preferredContentType: PNG})
                }
                blog {
                    title
                    handle
                }
                }
            }
            }
        }
        }
    }
    }
  `

  export default queryAllBlogs;