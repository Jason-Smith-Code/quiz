import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from "react-router";

import './EditQuestion';

const EditQuestion = () => {
  const [form, setForm] = useState({
    question: "",
    answer: "",
    records: [],
  });

  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
  
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
  
      setForm(record);
    }
  
    fetchData();
  
    return;
  }, [params.id, navigate]);
  
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      position: form.position,
      level: form.level,
    };
  
    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    navigate("/");
  }

  return (
    <div>
      <h3>Update Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="question">question: </label>
          <input
            type="text"
            className="form-control"
            id="question"
            value={form.question}
            onChange={(e) => updateForm({ question: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="answer">answer: </label>
          <input
            type="text"
            className="form-control"
            id="answer"
            value={form.answer}
            onChange={(e) => updateForm({ answer: e.target.value })}
          />
        </div>
        <br />
  
        <div className="form-group">
          <input
            type="submit"
            value="Update Record"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
 }

export default EditQuestion;
