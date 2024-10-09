const queryPage = 
`
    query getPage($handle: String!) {
        page(handle: $handle) {
            body
        }
    }
`

export default queryPage