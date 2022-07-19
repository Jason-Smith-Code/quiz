import './Home.scss';

import { Link } from "react-router-dom";

const Home = () => {
    return(
      <div className="content-container">
        <Link to="/create"><button className="link-button">Create questions</button></Link>
        <Link to="/edit"><button className="link-button">View / edit Questions</button></Link>
        <Link to="/quiz"><button className="link-button">Start Quiz</button></Link>
      </div>
    )
}

export default Home;