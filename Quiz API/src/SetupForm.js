import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2> Quiz Setup </h2>

          <div className="form-control">
            <label htmlFor="amount"> Number Of Questions </label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={50}
            ></input>
          </div>

          <div className="form-control">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports"> sports </option>
              <option value="history"> history </option>
              <option value="politics"> politics </option>

            </select>
          </div>

          <div className="form-control">
            <label htmlFor="difficulty"> Select Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy"> easy </option>
              <option value="medium"> medium </option>
              <option value="hard"> hard </option>
              
            </select>
          </div>

          {error && (
            <p className="error">
              cannot generate questions, please try different options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            Start Quiz!
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
