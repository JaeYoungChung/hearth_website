import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './test.css';
import { useTranslation } from 'react-i18next';

const Test = () => {
  const [t, i18n] = useTranslation("global");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/questions');
  };

  return (
    <div className='centered-container'>
      <img src={logo} alt='logo' />
      <p>HEARTH</p>
      <div className = 'second-text'>T E S T</div>
      <button type="button" onClick={handleButtonClick}>{t("test.start")}</button>
    </div>
  )
}

export default Test