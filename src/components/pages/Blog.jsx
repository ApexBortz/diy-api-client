import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import BlogForm from '../BlogForm'
import BlogDetails from '../BlogDetails'


const Blog = () => {

    const { id } = useParams()
    const [ blog, setBlog ] = useState({})
    const [ showForm, setShowForm ] = useState(false)
    const navigate = useNavigate()

    // retrieve blogpost from server
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
            .then(response => {
                console.log(response.data)
                setBlog(response.data)
            })
    }, [])

    // updating blogpost from submit
    const handleSubmit = (e, form, setForm) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`, form)
            .then(response => {
                console.log(response.data)
                setBlog(response.data) // add updated bounty to state
                setShowForm(false) // hide form
            })
            .catch(console.warn)
    }

    // delete the blogpost
    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
            .then(response => {
                // navigate away from this page after delete
                navigate('/')
            })
            .catch(console.warn)
    }

    return(
        <div>
            {
                showForm ?
                <BlogForm initialForm={blog} handleSubmit={handleSubmit} /> :
                <BlogDetails blog={blog} />
            }

            <button onClick={() => setShowForm(!showForm)}>
               { showForm ? 'Cancel' : 'Edit'}
            </button>
            
        </div>
    )
}

export default Blog