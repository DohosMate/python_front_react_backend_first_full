import React, { useState, useEffect } from 'react'
import APIService from './APIService'

function Form(props) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        setTitle(props.article.title)
        setBody(props.article.body)
    }, [props.article])



    const updateArtice = () => {
        APIService.UpdateArticle(props.article.id, { title, body })
            .then(resp => props.updatedData(resp))
            .catch(error => console.log(error))
    }

    const insertArtice = ()=>{
        APIService.InsertArticle({title, body})
        .then(resp => props.insertedArtice(resp))
        .catch(error => console.log(error))
    }

    return (
        <div>
            {props.article ? (<div className="mb-3">
                <label htmlFor="title" className='form-label'>Title</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Please Enter Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="body" className='form-label'>Description</label>
                <textarea
                    rows="5"
                    className='form-control'
                    placeholder='Please Enter Description'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                {
                    props.article.id ? (
                        <button
                            onClick={updateArtice}
                            className='btn btn-success mt-3'
                        >Update</button>
                    ):(
                        <button
                        onClick={insertArtice}
                        className='btn btn-success mt-3'
                        >Insert</button>
                    )

                }



            </div>
            ) : null}
        </div>
    )
}

export default Form