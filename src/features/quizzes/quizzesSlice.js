import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/topicsSlice';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {},
    
    },
    reducers: {
      addQuiz: (state, action) => {
        const { quizId, name, topicId, cardIds } = action.payload;
        state.quizzes[quizId] = {
          quizId, 
          name,
          topicId,
          cardIds
        };
      },

}})

// thunk to quizz to the related topic
export const addQuizAddQuizId = quiz => {
  const { quizId, name, topicId, cardIds } = quiz;
  return (dispatch) => {
      dispatch(quizzesSlice.actions.addQuiz(quiz));
      dispatch(addQuizId( { quizId: quizId, topicId: topicId } ));
  }
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;