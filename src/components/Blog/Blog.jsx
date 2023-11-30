import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './blog.css';
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_twitter from '../../assets/icon_twitter.png'
import bg_image from '../../assets/blog_bg_image.png'
import icon_share from '../../assets/share.png'
import { ref, child, get } from "firebase/database";
import {db} from "/Users/jeongjeyeong1/Documents/website/src/data/firebase.js";
import { FaLink } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


import {
  FacebookShareButton, FacebookIcon,
  FacebookMessengerShareButton, FacebookMessengerIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon,
  TelegramShareButton, TelegramIcon,
  ViberShareButton, ViberIcon,
  LineShareButton, LineIcon,
  EmailIcon, EmailShareButton,
} from "react-share";

const { Kakao } = window;

const SharePopup = ({ url, onClose }) => {
  const currentUrl = window.location.href;
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

   //Kakao Share
   useEffect(()=>{
      Kakao.cleanup();
      Kakao.init('c0000000000');
      console.log(Kakao.isInitialized());
  },[]);

  const shareKakao = () =>{
    const currentUrl = window.location.href;
  
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '오늘의 디저트',
            description: '아메리카노, 빵, 케익',
            imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
            link: {
                mobileWebUrl: currentUrl,
            },
        },
        buttons: [
            {
                title: '나도 테스트 하러가기',
                link: {
                mobileWebUrl: currentUrl,
                },
            },
            ],
        });
  }
  return (
    <div className="share-popup">
      <div className="popup-header">
        <h2>Share Blog</h2>
        <IoClose className='close-button' onClick={onClose} />
      </div>
      <div className='sns-icons'>
    <div className='button-row1'>
      <FacebookShareButton className='button-share' url={currentUrl}>
        <FacebookIcon className='fb-share' round={true}></FacebookIcon>
      </FacebookShareButton>
      <FacebookMessengerShareButton className='button-share' url={currentUrl}>
        <FacebookMessengerIcon className='fb-share' round={true}></FacebookMessengerIcon>
      </FacebookMessengerShareButton>
      <TwitterShareButton className='button-share' url={currentUrl}>
        <TwitterIcon className='fb-share' round={true}></TwitterIcon>
      </TwitterShareButton>
      <WhatsappShareButton className='button-share' url={currentUrl}>
        <WhatsappIcon className='fb-share' round={true}></WhatsappIcon>
      </WhatsappShareButton>
      <TelegramShareButton className='button-share' url={currentUrl}>
        <TelegramIcon className='fb-share' round={true}></TelegramIcon>
      </TelegramShareButton>
    </div>
    <div className='button-row2'>
      <ViberShareButton className='button-share' url={currentUrl}>
        <ViberIcon className='fb-share' round={true}></ViberIcon>
      </ViberShareButton>
      <LineShareButton className='button-share' url={currentUrl}>
        <LineIcon className='fb-share' round={true}></LineIcon>
      </LineShareButton>
      <EmailShareButton className='button-share' url={currentUrl}>
        <EmailIcon className='fb-share' round={true}></EmailIcon>
      </EmailShareButton>
      <button className='button-share' onClick={shareKakao}>
        <img className='copy-link'
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          alt="카카오링크 보내기 버튼"
        />
      </button>
      <button className='button-share' onClick={copyToClipboard}>
        <FaLink className='copy-link' />
      </button>
    </div>  
      </div>
    </div>
  );
};
 
const Blog = () => {

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //Category
  const [filteredPosts, setFilteredPosts] = useState([]); 
  const [activeCategory, setActiveCategory] = useState('all'); 
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  //firebase
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const firstPostImage = posts.length ? posts[0].imageUrl : '';


  useEffect(() => {
    const postsRef = ref(db);

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

    // filter posts
    useEffect(() => {
      const filterPosts = () => {
        if (activeCategory === 'all') {
          setFilteredPosts(posts);
        } else {
          setFilteredPosts(posts.filter(post => post.category === activeCategory));
        }
      };
  
      filterPosts();
    }, [posts, activeCategory]);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  //category change
  const handleCategoryChange = (event) => {
    setActiveCategory(event.target.value);
    setCurrentPage(1); // Reset to first page when category changes
  };

function handlePostClick(post) {
    setSelectedPost(post);
  }

  return (
    <div className="blog-page">
    <PageHeader backgroundImage={firstPostImage} />
    <Sidebar /> 
     {/* Category Buttons */}
     <div className="category-dropdown">
        <select value={activeCategory} onChange={handleCategoryChange}>
          <option value="all">All Categories</option>
          <option value="books">Books</option>
          <option value="travel">Travel</option>
        </select>
      </div>
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


function PageHeader({}) {
    return (
        <div className="page-header" style={{ backgroundImage: bg_image }}>
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
    //share sns
    const [showPopup, setShowPopup] = useState(false);
    const currentUrl = window.location.href;
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
            <img src={icon_share} alt="Icon 2" onClick={() => setShowPopup(true)} />
            {showPopup && <SharePopup url={currentUrl} onClose={() => setShowPopup(false)} />}
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

