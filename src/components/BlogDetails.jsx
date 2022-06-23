import axios from 'axios'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CommentForm from "./CommentForm"
import Blog from './pages/Blog'

const BlogDetails = ({ blog }) => {
    
    const { id } = useParams()
    const navigate = useNavigate()
    const [ showForm, setShowForm ] = useState(false)
    const [ comment, setComment ] = useState('')

    // delete the blogpost
    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
            .then(response => {
                // navigate away from this page after delete
                navigate('/')
            })
            .catch(console.warn)
    }

    const handleComment = (e, form, setForm) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_SERVER_URL}/blog/${id}/comment`, form)
            .then(response => {
                console.log(response.data)
                setComment([ ...comment, response.data]) // add updated bounty to state
                setShowForm(false) // hide form
            })
            .catch(console.warn)
    }
    return (
        <div>
            {/* {
                showForm ?
                <CommentForm initialForm={blog} handleComment={handleComment} /> :
                <Blog />
            } */}

            <h2> Name: {blog.name} </h2>
            <h2> Title: {blog.title} </h2>
            <h4> {blog.content} </h4>
            <p> {blog.comments} </p>
            <button onClick={handleDelete}> Delete </button>

            <CommentForm onSubmit={handleComment} />
        </div>
    )
}

export default BlogDetails