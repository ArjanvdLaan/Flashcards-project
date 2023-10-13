import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// import quiz selector
import { selectQuizzes } from "../quizzes/quizzesSlice";

export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes);
  console.log("quizzes:", quizzes);
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <li key={quiz.quizId} className="quiz">
            <Link to={ROUTES.quizRoute(quiz.quizId)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}
