import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './blog.css';
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_twitter from '../../assets/icon_twitter.png'
// import {mockPosts} from '../../data.js'
import { ref, child, get } from "firebase/database";
import {db} from "/Users/jeongjeyeong1/Documents/website/src/data/firebase.js";

 
const Blog = () => {

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  //firebase
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const postsRef = ref(db); // Replace 'path/to/your/posts' with your actual data path

    get(child(postsRef, '/blog')).then((snapshot) => {
      if (snapshot.exists()) {
        setPosts(Object.values(snapshot.val()));
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []); 


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
    
const [selectedPost, setSelectedPost] = useState(null);
const firstPostImage = posts.length ? posts[0].imageUrl : '';


function handlePostClick(post) {
    setSelectedPost(post);
  }

  return (
    <div className="blog-page">
    <PageHeader backgroundImage={firstPostImage} />
    <Sidebar />
    {selectedPost ? (
      <BlogPostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
    ) : (
      <>
        <div className="posts">
          {currentPosts.map(post => (
            <BlogPost key={post.id} post={post} onClick={() => handlePostClick(post)} />
          ))}
        </div>
        <div className="pagination">
          <p 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            className="pagination-arrow"
          >
            &lt;
          </p>
          
          {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(number => (
            <p 
              key={number + 1} 
              onClick={() => handlePageChange(number + 1)}
              className={`pagination-number ${currentPage === number + 1 ? 'active' : ''}`}
            >
              {number + 1}
            </p>
          ))}

          <p
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(posts.length / postsPerPage)))}
            className="pagination-arrow"
          >
            &gt;
          </p>
        </div>     </>
    )}</div>
  );
}


function PageHeader({ backgroundImage }) {
    return (
        <div className="page-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <p>HEARTH</p>
        <p className="blog-header">B L O G</p>
      </div>
    );
  }
  
  function Sidebar() {
    return (
        <div className="icons">
        <img src = {icon_instagram} className="icon"/>
        <img src = {icon_facebook} className="icon"/>
        <img src = {icon_twitter} className="icon"/>
      </div>
    );
  } 
  
  function BlogPost({ post, onClick }) {
    return (
      <div className="post" onClick={onClick}>
        <div className="post-image">
          <img src={post.imageUrl} alt={post.title} />
          <div className="overlay-top-left">
            <p>Aug</p>
            <p>17</p>
          </div>
          <img className="overlay-bottom-right" src={post.overlayImage} alt="Overlay" />
        </div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
    );
  }

function BlogPostDetail({ post, onClose }) {
    return (
      <div className="blog-post-detail">
        <div className="modal-header">
          <img src={post.imageUrl} alt={post.title} className="modal-header-image" />
          <div className="overlay-top-left2">
            <p>Aug</p>
            <p>17</p>
          </div>
          <div className="overlay-top-right">
            <div className='blog-icon-2'>
              <img src={post.icon2Url} alt="Icon 2" />
              {/* <p>{post.icon2Text}</p> */}
            </div>
          </div>
          <img className="overlay-bottom-right2" src={post.overlayImage} alt="Overlay" />
        </div>
        <div className="modal-body">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={onClose}>Back to Posts</button>
        </div>
      </div>
    );
  }

export default Blog;

