import { useState } from 'react'

const CommentForm = ({ initialForm }) => {

    const [ form, setForm ] = useState({ initialForm })
    
    return (
        <div>
            <form>
                <label htmlFor='comment'>Your comment: </label>
                    <textarea type='text' id='comment' rows='5' cols='20'
                              value={form.content} 
                              onChange={e => setForm({...form, content: e.target.value})} />
                    <button type='submit'> Comment </button>
            </form>
        </div>
    )
}

export default CommentForm