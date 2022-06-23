import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BlogForm from '../BlogForm'

const Home = () => {

    const [ blogs, setBlogs ] = useState([])

    const [ error, setError ] = useState('')

    useEffect(() => {

        const fetchBlogposts = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog`)

                setBlogs(response.data)
                console.log(response.data)

            } catch(error) {
                console.log('nope', error)
            }
        }
        fetchBlogposts()

    },[] )

    const handleSubmit = async(e, form, setForm) => {
        e.preventDefault()

        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/blog`, form)
            // add this new blogpost to state
            setBlogs([ ...blogs, response.data ])
            // clear form
            setForm({ name: '', title: '', content: '' })

        } catch(error) {
            console.warn('submit error', error)
            if (error.response) {
                if(error.response.status === 400) {
                    // this error is a validation error from our backend
                    setError(error.response.data.message)
                }
            }

        }
    }

    const blogLinks = blogs.map((blog, index) => {

        return (
            <div key={`bloglinks${index}`}>
                <Link to={`/blog/${blog._id}`}> {blog.title} </Link>
            </div>
        )
    })

    return (
        <div>
            <h1>↓ Create a new Blogpost ↓</h1>
            <BlogForm handleSubmit={handleSubmit} initialForm={{ name: '', title: '', content: ''}} />

            <h1>⍄ Current Blogposts ⍃</h1>
            <ul> {blogLinks} </ul>
        </div>
    )
}

export default Home