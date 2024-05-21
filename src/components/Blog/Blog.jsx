import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './blog.css';
import navbar_menu from '../../assets/navbar_menu.png'
import close_btn from '../../assets/close_btn.png'
import icon_instagram from '../../assets/icon_instagram.png'
import icon_facebook from '../../assets/icon_facebook.png'
import icon_x from '../../assets/icon_x.png'
import email from '../../assets/email.png'
import icon_threads from '../../assets/icon_threads.png'
import icon_share from '../../assets/share.png'
import banner_img from '../../assets/bannerimg.png'
import { ref, child, get } from "firebase/database";
import { set } from "firebase/database";
import {db} from "/Users/jeongjeyeong1/Documents/website/src/data/firebase.js";
import { FaLink } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { uid } from "uid";
import { useTranslation } from 'react-i18next';
import logo from '../../assets/test_logo.png'
import england_flag from '../../assets/england.png';
import korea_flag from '../../assets/korea.png';
import japan_flag from '../../assets/japan.png';
import arrowleft from '../../assets/arrow_left.png'
import emailjs from 'emailjs-com';
 
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
import { color } from 'd3';

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
        <IoClose className='share-close-button' onClick={onClose} />
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
          style={{
            width: '40px',
          }}
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
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  //Category
  const [filteredPosts, setFilteredPosts] = useState([]); 
  const [activeCategory, setActiveCategory] = useState('all'); 
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  //firebase
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const firstPostImage = posts.length > 0 ? posts[0].imageUrl : '';

  //language
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  const getSelectedFlagImage = () => {
    switch (selectedLanguage) {
      case 'en':
        return england_flag;
      case 'ja':
        return japan_flag;
      case 'ko':
        return korea_flag;
      default:
        return england_flag;
    }
  }

  const getSelectedFlagText = () => {
    switch (selectedLanguage) {
      case 'en':
        return 'ENG';
      case 'ja':
        return '日本語';
      case 'ko':
        return '한국어';
      default:
        return 'ENG';
    }
  }
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/test');
  };

  const handleBlogClick = () => {
    navigate('/blog');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  const handleCopyToClipboard = () => {
    const textToCopy = 'hearthisnear@gmail.com';

    // Copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopiedToClipboard(true);

        // Clear the message after 2 seconds
        setTimeout(() => {
          setCopiedToClipboard(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
  };

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
      <div className = "b-navbar">
          <div className = "b-navbar-links_logo">
            <NavLink to='/'>
            <img src={logo} height={80} alt = "logo"></img>
            </NavLink>
          </div>
        <div className="navbar-menu" onClick={toggleMobileMenu}>
          <img src={navbar_menu} width={30} alt = "logo"></img>
        </div>
        {isMobileMenuOpen && (
        <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'fade-in' : 'fade-out'}`}>
          <div className="navbar-mobile-menu_header">
            <div className="navbar-mobile-menu_close" onClick={toggleMobileMenu}>
              <img src={close_btn} alt = "close"></img>
            </div>
          </div>
          <div className="navbar-mobile-menu_content">
            <NavLink to='/'><p className='mobile-blog-click'>HOME</p></NavLink>
            <p className='mobile-blog-click' onClick={handleBlogClick}>{t("navbar.blog")}</p>
            <button type="button" className='m-nav-button' onClick={handleButtonClick}>{t("navbar.take_test")}</button>
            <div className="m-navbar-icons">
              <img src = {icon_instagram} className="m-navbar-icon"/>
              <img src = {icon_facebook} className="m-navbar-icon"/>
              <img src = {icon_x} className="m-navbar-icon"/>
              <img src={email}
                style={{ width: '40px', cursor: 'pointer' }}
                className="m-navbar-icon"
                onClick={handleCopyToClipboard}
                alt="Copy to Clipboard"
              />     
              {copiedToClipboard && (
                <div style={{ position: 'fixed', top: '10px', right: '10px', backgroundColor: 'green', color: 'white', padding: '5px 10px', borderRadius: '4px' }}>
                  Copied to Clipboard!
                </div>
              )}        
            </div>
            <div className="dropdown">
                  <div className="q-dropdown-toggle" onClick={toggleDropdown}>
                    <p >Language: {getSelectedFlagText()}</p>
                    <i className="dropdown-arrow"></i>
                  </div>
                  {isOpen && (
                    <ul className="dropdown-menu">
                    <li onClick={() => handleChangeLanguage('en')}>
                      <span>English</span>
                    </li>
                    <li onClick={() => handleChangeLanguage('ja')}>
                      <span>日本語</span>
                    </li>
                    <li onClick={() => handleChangeLanguage('ko')}>
                      <span>한국어</span>
                    </li>
                  </ul>
                  )}
            </div>
          </div>
        </div>
      )} 
          <div className='b-navbar-lang'>
              <div className="b-dropdown">
                <div className="b-dropdown-toggle" onClick={toggleDropdown}>
                  <img src={getSelectedFlagImage()} alt="Selected Language" className="flag-image" />
                  <i className="b-dropdown-arrow"></i>
                </div>
                {isOpen && (
                  <ul className="b-dropdown-menu">
                    <li onClick={() => handleChangeLanguage('en')}>
                      <span>English</span>
                      <img src={england_flag} alt="English" className="flag-image" />
                    </li>
                    <li onClick={() => handleChangeLanguage('ja')}>
                      <span>日本語</span>
                      <img src={japan_flag} alt="Japanese" className="flag-image" />
                    </li> 
                    <li onClick={() => handleChangeLanguage('ko')}>
                      <span>한국어</span>
                      <img src={korea_flag} alt="Korean" className="flag-image" />
                    </li>
                  </ul>
                )}
              </div>
              <p className='blog-click' onClick={handleBlogClick}>{t("navbar.blog")}</p>
              <button type="button" className='nav-button' onClick={handleButtonClick}>{t("navbar.take_test")}</button>
            </div> 
      </div>
    <PageHeader backgroundImage={firstPostImage} />
    <Sidebar /> 
     {/* Category Buttons */}
     <div className="category-dropdown">
        <select value={activeCategory} onChange={handleCategoryChange} className="category-select">
          <option value="all">All</option>
          <option value="helm">Helm</option>
          <option value="envisage">Envisage</option>
          <option value="attune">Attune</option>
          <option value="reverie">Reverie</option>
          <option value="transcend">Transcend</option>
          <option value="harmonize">Harmonize</option>
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
        </div>  
        </>
    )}
            <Banner></Banner>   

            <div className="b-footer">
                <div className="b-footerTexts">
                    <p>Privacy Policy</p>
                    <p>Copyrights</p>
                    <p>Cookie Policy</p>
                </div>
            </div>  
    </div>
    
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
      <div className="blog-icons">
        <img src = {icon_instagram} className="blog-icon"/>
        <img src = {icon_facebook} className="blog-icon"/>
        <img src = {icon_x} className="blog-icon"/>
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
            <p className='blog-date'>17</p>
          </div>
          <img className="overlay-bottom-right" src={post.overlayImage} alt="Overlay" />
        </div>
        <div className='post-contents'>
          <h2>{post.title}</h2>
          <p className='post-description'>{post.description}</p>
        </div>
      </div>
    );
  }

function BlogPostDetail({ post, onClose }) {
    //share sns
    const [showPopup, setShowPopup] = useState(false);
    const currentUrl = window.location.href;
    useEffect(() => {
      const handlePopState = () => {
        onClose();
      };
  
      window.history.pushState(null, '', window.location.pathname);
      window.addEventListener('popstate', handlePopState);
  
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }, [onClose]);
    return (
      <div className="blog-post-detail">
        <div className="modal-header">
          <img src={post.imageUrl} alt={post.title} className="modal-header-image" />
          <div className="overlay-top-left2">
            <p>Aug</p>
            <p className='blog-date2'>17</p>
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
          <div className='back-home'
            onClick={onClose}              
            style={{
              fontSize: 16,
              display: 'flex',
              alignItems: 'center',
            }}
            > 
            <img src={arrowleft} alt="Arrow Left" style={{ marginRight: '5px', width: '22px'}} />
            <span>Back to Home</span>
          </div>
        </div>
        {/* if (window.matchMedia('(max-width: 768px)').matches) {
          <Banner></Banner>
        }  */}
      </div>
    );
  }

function Banner() {
  const [t, i18n] = useTranslation("global");

  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true); // New state for email validity

  const validateEmail = (email) => {
      // Regular expression for email validation
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  };

    //email register
    const handleEmailChange = (e) => {
      const emailInput = e.target.value;
      setEmail(emailInput);
      setIsValidEmail(validateEmail(emailInput));    
    }; 

  const handleRegister = () => {
      if (!validateEmail(email)) {
          setIsValidEmail(false);
          return; // Stop the registration process if the email is not valid
      }
      const uuid = uid();
// Save email to Firebase
set(ref(db, "emails/" + uuid), {
  email,
  uuid,
})
  .then(() => {
    setIsRegistered(true);
    setEmail(""); // Clear the email input field

      // Send email using EmailJS
      const templateParams = {
        to_email: email,
      };

      emailjs.send('service_t6e2r49', 'template_1rrz4ck', templateParams, 'kD2ONhCaOmnXc8Ami')
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
  
  })
  .catch(error => {
    console.error("Error saving email: ", error);
  });
};
 
  return (
    <div className="banner">
        <div className='banner-left'>
          <p className='b-line1'>Join the Hearthside</p>
          <p className='b-line2'>and be a part of our journey to wellness & enlightenment</p>
          <div className="b-inputBox">
              <input
                  type="text"
                  placeholder={t("blog.email")} 
                  value={email}
                  onChange={handleEmailChange}
                  className={!isValidEmail ? 'invalid' : ''}
              />                
              <p className="register" onClick={!isRegistered ? handleRegister : null}>
                  {isRegistered ? t("blog.registered") : t("blog.register")}
              </p>
            </div>
                  {!isValidEmail && <p className="error-message">{t("blog.error_message")}</p>}          
            <div className="b-image-row"></div>    
        </div>
        <div className='banner-icons'>
          <img src={icon_instagram} alt="" />
          <img src={icon_facebook} alt="" />
          <img src={icon_x} alt="" />
          <img src={icon_threads} alt="" />
        </div>
    </div>
  );
}

export default Blog;

