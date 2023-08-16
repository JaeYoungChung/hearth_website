import { useNavigate } from 'react-router-dom';
import './firecolor.css';


const Firecolor = () => {
    const navigate = useNavigate();
    const storedResults = sessionStorage.getItem('surveyResults');
    const values = storedResults ? JSON.parse(storedResults) : {};
  
    return (
        <div className="results-container">
        <h2 className="results-title">Your Results</h2>
        <img src="path-to-your-image.jpg" alt="Descriptive Alt Text" className="results-image"/>
        <div className="values-container">
          <p>Red: {values.NewValue1}</p>
          <p>Green: {values.NewValue2}</p>
          <p>Blue: {values.NewValue3}</p>
        </div>
        <div className="next-container">
          <span onClick={() => navigate('/nextPagePath')} className="next-text">Next</span>
        </div>
      </div>
      );
}

export default Firecolor