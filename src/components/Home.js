import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo.png'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'

class Home extends Component {
    render() {
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                    <img src={Logo} alt="react" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <Alert color="primary">
                No posts yet.
            </Alert>
        )
        return (
            <div className="container home">
                <h1>Home</h1>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)