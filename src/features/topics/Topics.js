import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
// import selector
import { selectTopics } from "./topicsSlice";

export default function Topics() {
  const topics = useSelector(selectTopics);
  // const topicArray = Object.values(topics);
  // console.log("Topic Array:", topicArray);
  // console.log("Single topic:", topicArray[0]);
  // console.log("Rendering topics:", topics);
  // console.log("Topics from state:", topics);
  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {/* <li className="topic">Test Topic</li> */}
        {Object.values(topics).map((topic) => {
          return (
            <li className="topic" key={topic.id}>
              {
                <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
                  <div className="topic-container">
                    <img src={topic.icon} alt="" />
                    <div className="text-content">
                      <h2>{topic.name}</h2>
                      <p>{topic?.quizIds?.length / 2 || 0} Quizzes</p>
                    </div>
                  </div>
                </Link>
              }
            </li>
          );
        })}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}
