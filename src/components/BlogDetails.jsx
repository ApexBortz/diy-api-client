import BlogPost from "./pages/BlogPost"

const BlogDetails = ({ blog }) => {
    return (
        <div>
            <h2> Name: {blog.name} </h2>
            <h2> Title: {blog.title} </h2>
            <h4> {blog.content} </h4>
        </div>
    )
}

export default BlogDetails