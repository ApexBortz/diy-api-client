import { useState } from 'react'

const BlogForm = (handleSubmit, initialForm) => {

    const [ form, setForm ] = useState({ initialForm })

    return (
        <div>
            <form onSubmit={e => handleSubmit(e, form, setForm)}>

                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' 
                       value={form.name} 
                       onChange={e => setForm({...form, name: e.target.value})} />

                <label htmlFor='title'>Title: </label>
                <input type='text' id='title' 
                       value={form.title} 
                       onChange={e => setForm({...form, wantedFor: e.target.value})} />

                <label htmlFor='content'>Your blogpost content: </label>
                <input type='text' id='content' 
                       value={form.client} 
                       onChange={e => setForm({...form, client: e.target.value})} />
                
                <button type='submit'> Submit </button>

            </form>

        </div>
    )
}

export default BlogForm