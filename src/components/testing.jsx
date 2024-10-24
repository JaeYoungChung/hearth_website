// import {
//     FacebookShareButton, FacebookIcon,
//     FacebookMessengerShareButton, FacebookMessengerIcon,
//     TwitterShareButton, TwitterIcon,
//     WhatsappShareButton, WhatsappIcon,
//     TelegramShareButton, TelegramIcon,
//     ViberShareButton, ViberIcon,
//     LineShareButton, LineIcon,
//     EmailIcon, EmailShareButton,
//   } from "react-share";
//   import { color } from 'd3';
  
//   const { Kakao } = window;
  
//   const SharePopup = ({ url, onClose }) => {
//     const currentUrl = window.location.href;
//     const copyToClipboard = () => {
//       navigator.clipboard.writeText(url).then(() => {
//         alert('URL copied to clipboard!');
//       }).catch(err => {
//         console.error('Failed to copy: ', err);
//       });
//     };
  
//      //Kakao Share
//      useEffect(()=>{
//         Kakao.cleanup();
//         Kakao.init('2de414b7c7ba46d03d18e0f115ad83c2');
//         console.log(Kakao.isInitialized());
//     },[]);
  
//     const shareKakao = () =>{
//       const currentUrl = window.location.href;
    
//       Kakao.Share.sendDefault({
//           objectType: 'feed',
//           content: {
//               title: 'HEARTH Blog',
//               // description: 'New blog post',
//               imageUrl:
//               logo,
//               link: {
//                   mobileWebUrl: currentUrl,
//               },
//           },
//           buttons: [
//               {
//                   title: 'View Blog',
//                   link: {
//                   mobileWebUrl: currentUrl,
//                   },
//               },
//               ],
//           }); 
//     }
//     return (
//       <div className="share-popup">
//         <div className="popup-header">
//           <h2>Share Blog</h2>
//           <IoClose className='share-close-button' onClick={onClose} />
//         </div>
//         <div className='sns-icons'>
//       <div className='button-row1'>
//         <FacebookShareButton className='button-share' url={currentUrl}>
//           <FacebookIcon className='fb-share' round={true}></FacebookIcon>
//         </FacebookShareButton>
//         <FacebookMessengerShareButton className='button-share' url={currentUrl}>
//           <FacebookMessengerIcon className='fb-share' round={true}></FacebookMessengerIcon>
//         </FacebookMessengerShareButton>
//         <TwitterShareButton className='button-share' url={currentUrl}>
//           <TwitterIcon className='fb-share' round={true}></TwitterIcon>
//         </TwitterShareButton>
//         <WhatsappShareButton className='button-share' url={currentUrl}>
//           <WhatsappIcon className='fb-share' round={true}></WhatsappIcon>
//         </WhatsappShareButton>
//         <TelegramShareButton className='button-share' url={currentUrl}>
//           <TelegramIcon className='fb-share' round={true}></TelegramIcon>
//         </TelegramShareButton>
//       </div>
//       <div className='button-row2'>
//         <ViberShareButton className='button-share' url={currentUrl}>
//           <ViberIcon className='fb-share' round={true}></ViberIcon>
//         </ViberShareButton>
//         <LineShareButton className='button-share' url={currentUrl}>
//           <LineIcon className='fb-share' round={true}></LineIcon>
//         </LineShareButton>
//         <EmailShareButton className='button-share' url={currentUrl}>
//           <EmailIcon className='fb-share' round={true}></EmailIcon>
//         </EmailShareButton>
//         <button className='button-share' onClick={shareKakao}>
//           <img className='copy-link'
//             src={share_kakao}
//             alt="카카오링크 보내기 버튼"
//             style={{
//               width: '40px',
//               height: '40px',
//               backgroundColor: 'transparent'
//             }}
//           />
//         </button>
//         <button className='button-share' onClick={copyToClipboard}>
//           <img className='copy-link'
//             src={share_link}
//             style={{
//               width: '40px',
//               height: '40px',
//               backgroundColor: 'black'
//             }}
//           />
//         </button>
//       </div>  
//         </div>
//       </div>
//     );
//   };
  
  
   
//   const Blog = () => {
  
//     //Pagination
//     const [currentPage, setCurrentPage] = useState(1);
//     const postsPerPage = 6;
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     const handlePageChange = (newPage) => {
//       setCurrentPage(newPage);
//     };
//     //Category
//     const [filteredPosts, setFilteredPosts] = useState([]); 
//     const [activeCategory, setActiveCategory] = useState('all'); 
//     const sortedPosts = [...filteredPosts].sort((a, b) => b.id - a.id);
//     const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);  
//     //firebase
//     const [posts, setPosts] = useState([]);
//     const [selectedPost, setSelectedPost] = useState(null);
//     const firstPostImage = posts.length > 0 ? posts[posts.length - 1].imageUrl : '';
  
//     //language
//     const [t, i18n] = useTranslation("global");
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedLanguage, setSelectedLanguage] = useState('en');
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//     const handleChangeLanguage = (language) => {
//       setSelectedLanguage(language);
//       i18n.changeLanguage(language);
//       setIsOpen(false);
//       localStorage.setItem('selectedLanguage', language);
//     };
  
//     const getSelectedFlagImage = () => {
//       switch (selectedLanguage) {
//         case 'en':
//           return england_flag;
//         case 'ja':
//           return japan_flag;
//         case 'ko':
//           return korea_flag;
//         default:
//           return england_flag;
//       }
//     }
  
//     const getSelectedFlagText = () => {
//       switch (selectedLanguage) {
//         case 'en':
//           return 'ENG';
//         case 'ja':
//           return '日本語';
//         case 'ko':
//           return '한국어';
//         default:
//           return 'ENG';
//       }
//     }
    
//     const toggleDropdown = () => {
//       setIsOpen(!isOpen);
//     };
  
//     const navigate = useNavigate();
  
//     const handlePolicyClick = () => {
//       navigate('/privacypolicy');
//     };
//     const handleTermsClick = () => {
//       navigate('/termsuse');
//     };
  
//     const handleButtonClick = () => {
//       navigate('/test');
//     };
  
//     const handleBlogClick = () => {
//       navigate('/blog');
//     };
  
//     const toggleMobileMenu = () => {
//       setIsMobileMenuOpen(!isMobileMenuOpen);
//     };
//     const closeMobileMenu = () => {
//       setIsMobileMenuOpen(false);
//     };
    
  
//     const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  
//     const handleCopyToClipboard = () => {
//       const textToCopy = 'hearthisnear@gmail.com';
  
//       // Copy the text to the clipboard
//       navigator.clipboard.writeText(textToCopy)
//         .then(() => {
//           setCopiedToClipboard(true);
  
//           // Clear the message after 2 seconds
//           setTimeout(() => {
//             setCopiedToClipboard(false);
//           }, 2000);
//         })
//         .catch((error) => {
//           console.error('Failed to copy text: ', error);
//         });
//     };
  
//     useEffect(() => {
//       const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
//       setSelectedLanguage(savedLanguage);
//       i18n.changeLanguage(savedLanguage);
//     }, [i18n]);
  
//     useEffect(() => {
//       const postsRef = ref(db);
  
//       get(child(postsRef, '/blog')).then((snapshot) => {
//         if (snapshot.exists()) {
//           setPosts(Object.values(snapshot.val()));
//         } else {
//           console.log("No data available");
//         }
//       }).catch((error) => {
//         console.error(error);
//       });
//     }, []); 
  
//       // filter posts
//       useEffect(() => {
//         const filterPosts = () => {
//           if (activeCategory === 'all') {
//             setFilteredPosts(posts);
//           } else {
//             setFilteredPosts(posts.filter(post => post.category === activeCategory));
//           }
//         };
    
//         filterPosts();
//       }, [posts, activeCategory]);
  
//     //category change 
//     const handleCategoryChange = (event) => {
//       setActiveCategory(event.target.value);
//       setCurrentPage(1); // Reset to first page when category changes
//     }; 
  
//     function handlePostClick(post) {
//       document.body.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
//         setSelectedPost(post);
//     }
  
//     return (
//       <div className="blog-page">
//       <PageHeader backgroundImage={firstPostImage} />
//       <Sidebar /> 
//        {/* Category Buttons */}
//        <div className="category-dropdown">
//           <select value={activeCategory} onChange={handleCategoryChange} className="category-select">
//             <option value="all">All</option>
//             <option value="helm">Helm</option>
//             <option value="envisage">Envisage</option>
//             <option value="attune">Attune</option>
//             <option value="reverie">Reverie</option>
//             <option value="transcend">Transcend</option>
//             <option value="harmonize">Harmonize</option>
//           </select>
//         </div>
//       {selectedPost ? (
//         <BlogPostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
//       ) : (
//         <>
//           <div className="posts">
//           {currentPosts.map(post => (
//             <BlogPost key={post.id} post={post} onClick={() => handlePostClick(post)} />
//           ))}
//           </div>
//           <div className="pagination">
//             <p 
//               onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//               className="pagination-arrow"
//             >
//               &lt;
//             </p>
            
//             {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(number => (
//               <p 
//                 key={number + 1} 
//                 onClick={() => handlePageChange(number + 1)}
//                 className={`pagination-number ${currentPage === number + 1 ? 'active' : ''}`}
//               >
//                 {number + 1}
//               </p>
//             ))}
  
//             <p
//               onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(posts.length / postsPerPage)))}
//               className="pagination-arrow"
//             >
//               &gt;
//             </p>
  
//           </div>  
//           <Banner></Banner>   
  
//           </>
//       )}
//       </div>
      
//     );
//   }
  
//   function PageHeader({ backgroundImage }) {
//     return (
//           <div className="page-header" style={{ backgroundImage: `url(${backgroundImage})` }}>
//           <p>HEARTH</p>
//           <p className="blog-header">B L O G</p>
//         </div>
//       );
//     }
    
//     function BlogPost({ post, onClick }) {
//       return (
//         <div className="post" onClick={onClick}>
//           <div className="post-image">
//             <img src={post.imageUrl} alt={post.title} />
//             <div className="overlay-top-left">
//               <p>{post.month}</p>
//               <p className='blog-date'>{post.date}</p>
//             </div>
//             {/* <img className="overlay-bottom-right" src={post.overlayImage} alt="Overlay" /> */}
//             {/* <img className="overlay-bottom-right" src={profile_K} alt="Overlay" /> */}
//           </div>
//           <div className='post-contents'>
//             <h3>{post.title}</h3>
//             <p className='post-description'>{post.description}</p>
//           </div>
//         </div>
//       );
//     }
  
//   function BlogPostDetail({ post, onClose }) {
//       //share sns
//       const [showPopup, setShowPopup] = useState(false);
//       const currentUrl = window.location.href;
//       useEffect(() => {
//         const handlePopState = () => {
//           onClose();
//         };
    
//         window.history.pushState(null, '', window.location.pathname);
//         window.addEventListener('popstate', handlePopState);
    
//         return () => {
//           window.removeEventListener('popstate', handlePopState);
//         }; 
//       }, [onClose]);
//       return (
//         <div className="blog-post-detail">
//           <div className="modal-header">
//             <img src={post.imageUrl} alt={post.title} className="modal-header-image" />
//             <div className="overlay-top-left2">
//               <p>{post.month}</p>
//               <p className='blog-date2'>{post.date}</p>
//             </div>
//             <div className="overlay-top-right">
//             <div className='blog-icon-2'>
//               <img src={icon_share} alt="Icon 2" onClick={() => setShowPopup(true)} />
//               {showPopup && <SharePopup url={currentUrl} onClose={() => setShowPopup(false)} />}
//             </div>
//             </div>
//             {/* <img className="overlay-bottom-right2" src={post.imageUrl} alt="Overlay" /> */}
//           </div>
//           <div className="modal-body">
//             <h2>{post.title}</h2>
//             {post.content.split('\\n\\n').map((paragraph, index) => (
//             <p key={index}>{paragraph}<br></br></p>
//           ))}
//             <div className='back-home'
//               onClick={onClose}              
//               style={{
//                 fontSize: 16,
//                 display: 'flex',
//                 alignItems: 'center',
//               }}
//               > 
//               <img src={arrowleft} alt="Arrow Left" style={{ marginRight: '5px', width: '22px'}} />
//               <span>Back to Home</span>
//             </div>
//           </div>
//           {/* if (window.matchMedia('(max-width: 768px)').matches) {
//             <Banner></Banner>
//           }  */}
//         </div>
//       );
//     }