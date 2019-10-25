import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo.png'
import { connect } from 'react-redux'
import { Alert, Container, Row, Col } from 'reactstrap'

class Home extends Component {
    render() {
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <Col xs="12" className="mb-2">
                        <div className="post card" key={post.id}>
                            <div className="card-content">
                                <Link to={'/' + post.id}>
                                    <span className="card-title red-text">{post.title}</span>
                                </Link>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </Col>
                )
            })
        ) : (
            <Alert color="primary">
                No posts yet.
            </Alert>
        )
        return (
            <Container>
                <h1>Home</h1>
                <hr />
                <Row>{postList}</Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)