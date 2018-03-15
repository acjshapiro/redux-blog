import React from 'react';
import { connect } from 'react-redux';
import { incId } from './actions/nextId';
import { addBlog } from './actions/blogs';


class BlogForm extends React.Component {
    state = { name: '' }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, id } = this.props
        const { name } = this.state 
        const blog = {name, id, read: false }
        dispatch(addBlog(blog))
        dispatch(incId())
        this.setState({ name: ''})
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value})
    }

    render() {
        const { name } = this.state
        return (
            <div> 
                <h3> Add A Blog Post</h3>
                <form onSubmit={this.handleSubmit}>
                    <input value={name} onChange={this.handleChange} />
                </form>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
    return { id: state.nextId}
}

export default connect(mapStateToProps)(BlogForm);