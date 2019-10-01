import React from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
class Home extends React.Component{
   
 render(){
     console.log(this.props);
     const {posts}=this.props;
     const postList = posts.length ? (
        
             posts.map((post)=>{
                 return(
                    <div class="row">
                    <div class="col s12 m12 ">
                      <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                          <span class="card-title" key={post.id} >{post.name}</span>
                          <p>{post.username}</p>
                        </div>
                        <div class="card-action">
                          <Link to={'/'+post.id}>This is a link</Link>
                          
                        </div>
                      </div>
                    </div>
                  </div>
            
                 )
             })
         
     ):(
         <div>
         emptp response
         </div>
     )
    return(
        <div className="container">
         <h4 className="center">Home</h4>
         <p>{postList}</p>
        </div>
        )
    
 }
}

const mapStateToProps = (state)=>{
return{
    posts:state.posts
}
}
export default connect(mapStateToProps)(Home);