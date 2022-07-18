import React, { useState } from "react";
import './CreateQuestion.scss';
import { Link } from "react-router-dom";

const CreateQuestion = () => {
  const [form, setForm] = useState({
    question: "",
    answer: "",
  });

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const questionAnswer = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionAnswer),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ question: "", answer: "" });
  }

//  Check if user is logged in
  return (
    <div className="form-container">
      <form className="form-layout" onSubmit={onSubmit}>
        <div className="form-group">
          <label>Question</label>
          <textarea
            required
            type="text"
            value={form.question}
            onChange={(e) => updateForm({ question: e.target.value })}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Answer</label>
          <textarea
            required
            type="text"
            value={form.answer}
            onChange={(e) => updateForm({ answer: e.target.value })}
          ></textarea>
        </div>
        <input type="submit" value="Submit question"></input>
      </form>
      <Link to="/"><button className="link-button middle">Return to main page</button></Link>
    </div>
  );
};

export default CreateQuestion;
