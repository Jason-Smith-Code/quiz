import './Home.scss';

import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="content-container">
        <div className="half-container">
          <Link to="/create"><button className="link-button">Create questions</button></Link>
        </div>
        <div className="half-container">
          <Link to="/quiz"><button className="link-button">Start Quiz</button></Link>
        </div>
      </div>
    )
}

export default Home;