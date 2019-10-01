import React from 'react';
// import axios from 'axios';
import {connect } from 'react-redux';
class Post extends React.Component{
  
    render(){
        
        console.log(this.props)
        return(
       
            <div class="row">
            <div class="col s12 m12">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title" >{this.props.post.name}</span>
                  <p>{this.props.post.username}</p>
                </div>
               
              </div>
            </div>
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
export default connect(mapStateToProps)(Post);