import CreateQuestion from "./routes/create/CreateQuestion";
import Header from "./components/header/Header";
// i need to connect to the database when the app starts  or when a user logs in

const App = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <button>Add Questions and answers</button>
        </div>
        <div>
          <button>Start Quiz</button>
        </div>
      </div>
      <CreateQuestion />
    </>
  );
};

export default App;
