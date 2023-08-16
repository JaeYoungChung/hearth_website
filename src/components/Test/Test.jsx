import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './test.css';


const Test = () => {
    const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/questions');
  };

  return (
    <div className='centered-container'>
      <img src={logo} alt='logo' />
      <p>HEARTH</p>
      <div className = 'second-text'>T E S T</div>
      <button type="button" onClick={handleButtonClick}>Start</button>
    </div>
  )
}

export default Test