import React from 'react';
// import axios from 'axios';
import {connect } from 'react-redux';
class Post extends React.Component{
    handleClick = ()=>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
        
    }

    render(){
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
              <h4 className="center">{this.props.post.name}</h4>
              <p>{this.props.post.username}</p>
              <div className="center">
                <button className="btn grey" onClick={this.handleClick}>
                  Delete Post
                </button>
              </div>
            </div>
          ) : (
            <div className="center">Loading post...</div>
          );
      
          return (
            <div className="container">
              {post}
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
const mapStateToDispatch = (dispatch)=>{
return{
    deletePost:(id)=>{dispatch({type : 'DELETE_POST',id: id })
}
}
}
export default connect(mapStateToProps ,mapStateToDispatch)(Post);