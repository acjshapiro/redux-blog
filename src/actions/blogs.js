const ADD_BLOG = 'ADD_BLOG'
const TOGGLE_BLOG = 'TOGGLE_BLOG'

export const addBlog = (blog) => {
    return {type: ADD_BLOG , blog }
}

export const toggleBlog = (id) => {
    return { type: TOGGLE_BLOG , id }
}
