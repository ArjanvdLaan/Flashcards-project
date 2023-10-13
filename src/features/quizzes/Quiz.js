import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
// import quiz selector
import { selectQuizzes } from "../quizzes/quizzesSlice";

export default function Quiz() {
  const quizzes = useSelector(selectQuizzes);
  const { quizId } = useParams();
  const quiz = quizzes[quizId];
  console.log('quiz:', quiz)
  console.log('quizzes', quizzes)
  console.log('quizId', quizId)

  if (!quiz) {
    return <div>Quiz not found!</div>;
    // return <Navigate to={ROUTES.quizzesRoute()} replace />;
  }

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => {
          console.log("Rendering Card with ID:", id);
          return <Card key={id} id={id} />;
        })}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
