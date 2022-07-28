import Header from "../header/Header";
import "./App.scss";
import Home from "../../routes/home/Home";
import CreateQuiz from "../../routes/quiz/CreateQuiz";
import CreateQuestion from "../../routes/create/Create";
import Login from "../login/Login";
import Register from "../register/Register";
import Edit from "../../routes/edit/Edit";
import Read from "../../routes/read/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="create" element={<CreateQuestion />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="read" element={<Read />} />
          <Route path="quiz" element={<CreateQuiz />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
