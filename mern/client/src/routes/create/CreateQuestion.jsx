import React, { useState } from "react";

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

  // create a form which asks for a question, and an answer
  return (
    <form onSubmit={onSubmit}>
      <label>Question</label>
      <input
        type="text"
        value={form.question}
        onChange={(e) => updateForm({ question: e.target.value })}
      ></input>
      <label>Answer</label>
      <input
        type="text"
        value={form.answer}
        onChange={(e) => updateForm({ answer: e.target.value })}
      ></input>
      <input type="submit" value="Create question"></input>
    </form>
  );
};

export default CreateQuestion;
