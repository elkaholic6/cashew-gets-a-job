const querySingleBlog = 
`
    query getBlogByHandle($id: ID!) {
    article(id: $id) {
        title
        authorV2 {
        name
        }
        publishedAt
        contentHtml
    }
    }
`

export default querySingleBlog;