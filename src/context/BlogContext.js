import React from 'react'
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blog_post':
            return[...state, {title: `Blog Post#${state.length + 1 }`}]
        case 'remove_blog_post':
            return state.slice(0, -1)
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
    return () => {
        dispatch({type: 'remove_blog_post'})
    }
}

export const  {Context, Provider} = createDataContext(
    blogReducer,
    { addBlogPost, removeBlogPost},
    [])