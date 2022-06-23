import { useState } from 'react'

const BlogForm = ({ handleSubmit, initialForm }) => {

    const [ form, setForm ] = useState({ initialForm })

    return (
        <div>
            <form onSubmit={e => handleSubmit(e, form, setForm)}>

                <label htmlFor='name'>Author: </label>
                <input type='text' id='name' 
                       value={form.name} 
                       onChange={e => setForm({...form, name: e.target.value})} />

                <label htmlFor='title'>Title: </label>
                <input type='text' id='title' 
                       value={form.title} 
                       onChange={e => setForm({...form, title: e.target.value})} />

                <label htmlFor='content'>Your content: </label>
                <textarea type='text' id='content' rows='5' cols='20'
                       value={form.content} 
                       onChange={e => setForm({...form, content: e.target.value})} />
                
                <button type='submit'> Submit </button>

            </form>

        </div>
    )
}

export default BlogForm