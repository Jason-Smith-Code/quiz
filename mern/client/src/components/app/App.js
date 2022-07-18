import Header from "../header/Header";
import './App.scss';
import Home from "../../routes/home/Home";
import CreateQuiz from '../../routes/quiz/CreateQuiz';
import CreateQuestion from '../../routes/create/CreateQuestion';
import Login from '../login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="create" element={<CreateQuestion />} />
        <Route path="quiz" element={<CreateQuiz />} />
        <Route path="login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </>
  );  
};

export default App;
