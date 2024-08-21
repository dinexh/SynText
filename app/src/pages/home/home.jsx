import { useNavigate } from 'react-router-dom';
import HomeImage from "../../Assets/home.svg";
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/auth');
  };

  return (  
    <div className="home-container">
      <div className="home-container-in">
        <div className="home-container-in-one">
          <img src={HomeImage} className="HomeImage" alt="home image" />
        </div>
        <div className="home-container-in-two">
          <h1>SynText</h1>
          <h2>Connect Instantly, Chat Effortlessly.</h2>
          <p>Transform your messaging experience with SynText—where every chat is effortless, every connection is instant, and every conversation feels personal. Discover seamless communication that keeps you close to those who matter most, no matter where you are.</p>
          <button onClick={handleButtonClick}>
            Join Now!
          </button>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-footer-in">
          <p>Designed and Developed by <a href="/">Dinesh Korukonda</a> | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
