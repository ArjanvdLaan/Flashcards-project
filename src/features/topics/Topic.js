import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import ROUTES from "../../app/routes";
// import selectors
import { selectQuizzes } from "../quizzes/quizzesSlice";
import { selectTopics } from "../topics/topicsSlice";

export default function Topic() {
  const topics = useSelector(selectTopics);
  const quizzes = useSelector(selectQuizzes);
  const { topicId } = useParams();
  const topic = topics[topicId];
  const quizzesForTopic = topic.quizIds.filter(quizId => quizId !== undefined).map((quizId) => quizzes[quizId]);

  if (!topic) {
    return <Navigate to={ROUTES.topicsRoute()} replace />;
  }
  console.log("topic:", topic);
  console.log('topicId:', topicId)
  console.log("topic.quizIds:", topic.quizIds);
  console.log("quizzesForTopic:", quizzesForTopic);



  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>{topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.quizId}>
            <Link to={ROUTES.quizRoute(quiz.quizId)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
