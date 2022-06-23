import axios from 'axios'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CommentForm from "./CommentForm"
import Blog from './pages/Blog'

const BlogDetails = ({ blog }) => {
    
    const { id } = useParams()
    const navigate = useNavigate()
    const [ showForm, setShowForm ] = useState(false)

    // delete the blogpost
    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
            .then(response => {
                // navigate away from this page after delete
                navigate('/')
            })
            .catch(console.warn)
    }

    const handleComment = () => {

    }

    return (
        <div>
            {
                showForm ?
                <CommentForm initialForm={blog} handleComment={handleComment} /> :
                <Blog />
            }

            <h2> Name: {blog.name} </h2>
            <h2> Title: {blog.title} </h2>
            <h4> {blog.content} </h4>
            <button onClick={handleDelete}> Delete </button>

            <CommentForm />
        </div>
    )
}

export default BlogDetails