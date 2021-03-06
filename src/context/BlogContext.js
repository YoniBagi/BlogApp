import React from 'react'
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blog_post':
            return [...state, {
                id: Math.floor(Math.random() * 999999),
                title: `Blog Post#${state.length + 1}`
            }]
        case 'remove_blog_post':
            return state.filter((blogPost) => blogPost.id !== action.payload )
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: 'add_blog_post'})
    }
}

const removeBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'remove_blog_post', payload: id})
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer,
    {addBlogPost, removeBlogPost},
    [])