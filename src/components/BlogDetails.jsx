import Blog from "./pages/Blog"

const BlogDetails = ({ blog, handleDelete }) => {
    return (
        <div>
            <h2> Name: {blog.name} </h2>
            <h2> Title: {blog.title} </h2>
            <h4> {blog.content} </h4>
            <button onClick={handleDelete}> Delete </button>
        </div>
    )
}

export default BlogDetails