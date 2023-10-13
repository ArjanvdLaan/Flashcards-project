import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: [],
      };
    },
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addQuiz, (state, action) => {
      const { topicId, id } = action.payload;
      if (state.topics[topicId]) {
        // Check if the topic exists
        state.topics[topicId].quizIds.push(id);
      } else {
        console.error(`Topic with ID ${topicId} not found!`);
      }
    });
  },
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
