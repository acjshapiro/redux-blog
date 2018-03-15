import React from 'react';
import { connect } from 'react-redux';
import { toggleBlog } from './actions/blogs';

const Blog = ({ id, name, read, dispatch }) => (
    <li 
        onClick={() => dispatch(toggleBlog(id))}
        style={ read ? {color: 'grey'} : {} }
    >
        {name}
    </li>     
)

export default connect()(Blog); 