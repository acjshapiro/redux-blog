import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const filtered = (blogs, filter) => {
    debugger
    switch (filter) {    
        case 'All':
        return blogs;
        case 'Unread': 
        return blogs.filter( b => !b.read )
        case 'Read': 
        return blogs.filter( b => b.read )
    }
}

const BlogList = ({ blogs, filter }) => (
    <ul>
        { filtered(blogs, filter).map( (b) => {
            return ( <Blog key={b.id} {...b} /> )
        })
        }
    </ul>    
)

const mapStateToProps = (state) => {
    return { blogs: state.blogs, filter: state.filter }
}
    

export default connect(mapStateToProps)(BlogList);