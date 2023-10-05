import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './blog.css';
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_twitter from '../../assets/icon_twitter.png'
import {mockPosts} from '../../data.js'


const Blog = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = mockPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

    
const [selectedPost, setSelectedPost] = useState(null);
const firstPostImage = mockPosts.length ? mockPosts[0].imageUrl : '';

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
          
          {[...Array(Math.ceil(mockPosts.length / postsPerPage)).keys()].map(number => (
            <p 
              key={number + 1} 
              onClick={() => handlePageChange(number + 1)}
              className={`pagination-number ${currentPage === number + 1 ? 'active' : ''}`}
            >
              {number + 1}
            </p>
          ))}

          <p
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(mockPosts.length / postsPerPage)))}
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
  
  function BlogPosts({ posts, onPostClick }) {
    return (
      <div className="posts">
        {posts.map(post => (
          <BlogPost key={post.id} post={post} onClick={() => onPostClick(post)} />
        ))}
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
  
  
  function Pagination() {
    return (
      <div className="pagination">
        <span>prev</span>
        <span>1</span>
        <span>2</span>
        <span>19</span>
        <span>20</span>
        <span>next</span>
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
            <div className='blog-icon-1'>
              <img src={post.icon1Url} alt="Icon 1" />
              <p>{post.icon1Text}</p>
            </div>
            <div className='blog-icon-2'>
              <img src={post.icon2Url} alt="Icon 2" />
              <p>{post.icon2Text}</p>
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

  //   function BlogPostModal({ post, onClose }) {
//     return (
//       <div className="modal-container" onClick={onClose}>
//         <div className="modal-content" onClick={e => e.stopPropagation()}>
//           <div className="modal-header">
//             <img src={post.imageUrl} alt={post.title} className="modal-header-image"/>
//             <div className="overlay-top-left">
//             <p>Aug</p>
//             <p>17</p>
//           </div>
//             <div className="overlay-top-right">
//               <div>
//                 <img src={post.icon1Url} alt="Icon 1"/>
//                 <p>{post.icon1Text}</p>
//               </div>
//               <div>
//                 <img src={post.icon2Url} alt="Icon 2"/>
//                 <p>{post.icon2Text}</p>
//               </div>
//             </div>
//             <img className="overlay-bottom-right" src={post.overlayImage} alt="Overlay" />
//           </div>
//           <div className="modal-body">
//             <h2>{post.title}</h2>
//             <p>{post.content}</p>
//             <button className="close-button" onClick={onClose}>
//               <img src="path_to_close_icon.png" alt="Close" /> Close
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }


export default Blog;


//For the Blog post pagination, add 1,2,3 ... 19, 20