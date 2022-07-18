import './CreateQuiz';
import { Link } from "react-router-dom";



//  Check if user is logged in
const CreateQuiz = () => {
  return (
    <div className="form-container">
      <form className='form-layout'>
      <div className="form-group">
      <label>How many questions?</label>
        <input type="number"></input>
      </div>
      <input type="submit" value="Start"></input>
      </form>
      <Link to="/"><button className="link-button middle">Return to main page</button></Link>
    </div>
  )
};

export default CreateQuiz;