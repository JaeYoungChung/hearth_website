// const Blog = () => {

//   //Pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 6;
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;

//   //firebase
//   const [posts, setPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const firstPostImage = posts.length ? posts[1].imageUrl : '';


//   useEffect(() => {
//     const postsRef = ref(db);

//     get(child(postsRef, '/blog')).then((snapshot) => {
//       if (snapshot.exists()) {
//         setPosts(Object.values(snapshot.val()));
//       } else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
//   }, []); 

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

// function handlePostClick(post) {
//     setSelectedPost(post);
//   }

//   return (
//     <div className="blog-page">
//     <PageHeader backgroundImage={firstPostImage} />
//     <Sidebar /> 
//     {selectedPost ? (
//       <BlogPostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
//     ) : (
//       <>
//         <div className="posts">
//           {currentPosts.map(post => (
//             <BlogPost key={post.id} post={post} onClick={() => handlePostClick(post)} />
//           ))}
//         </div>
//         <div className="pagination">
//           <p 
//             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//             className="pagination-arrow"
//           >
//             &lt;
//           </p>
          
//           {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(number => (
//             <p 
//               key={number + 1} 
//               onClick={() => handlePageChange(number + 1)}
//               className={`pagination-number ${currentPage === number + 1 ? 'active' : ''}`}
//             >
//               {number + 1}
//             </p>
//           ))}

//           <p
//             onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(posts.length / postsPerPage)))}
//             className="pagination-arrow"
//           >
//             &gt;
//           </p>
//         </div>     </>
//     )}</div>
//   );
// }


// function PageHeader({}) {
//     return (
//         <div className="page-header" style={{ backgroundImage: bg_image }}>
//         <p>MY</p>
//         <p className="blog-header">B L O G</p>
//       </div>
//     );
//   }
  
//   function Sidebar() {
//     return (
//         <div className="icons">
//         <img src = {icon_instagram} className="icon"/>
//         <img src = {icon_facebook} className="icon"/>
//         <img src = {icon_x} className="icon"/>
//       </div>
//     );
//   } 
  
//   function BlogPost({ post, onClick }) {
//     return (
//       <div className="post" onClick={onClick}>
//         <div className="post-image">
//           <img src={post.imageUrl} alt={post.title} />
//           <div className="overlay-top-left">
//             <p>Aug</p>
//             <p>17</p>
//           </div>
//           <img className="overlay-bottom-right" src={post.overlayImage} alt="Overlay" />
//         </div>
//         <h2>{post.title}</h2>
//         <p>{post.description}</p>
//       </div>
//     );
//   }

// function BlogPostDetail({ post, onClose }) {
//     //share sns
//     const [showPopup, setShowPopup] = useState(false);
//     const currentUrl = window.location.href;
//     return (
//       <div className="blog-post-detail">
//         <div className="modal-header">
//           <img src={post.imageUrl} alt={post.title} className="modal-header-image" />
//           <div className="overlay-top-left2">
//             <p>Aug</p>
//             <p>17</p>
//           </div>
//           <div className="overlay-top-right">
//           <div className='blog-icon-2'>
//             <img src={icon_share} alt="Icon 2" onClick={() => setShowPopup(true)} />
//             {showPopup && <SharePopup url={currentUrl} onClose={() => setShowPopup(false)} />}
//           </div>
//           </div>
//           <img className="overlay-bottom-right2" src={post.overlayImage} alt="Overlay" />
//         </div>
//         <div className="modal-body">
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//           <button onClick={onClose}>Back to Posts</button>
//         </div>
//       </div>
//     );
//   }

// export default Blog;

