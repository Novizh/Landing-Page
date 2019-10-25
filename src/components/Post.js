import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/PostAction'
import { Button } from 'reactstrap';

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <Button color="danger" onClick={this.handleClick}>Delete Post</Button>
                </div>
            </div>
        ) : (
            <div className="center">Loading page...</div>
        )

        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch (deletePost(id))}
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Post)