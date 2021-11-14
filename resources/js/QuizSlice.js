import { createSlice } from "@reduxjs/toolkit";

export const QuizSlice = createSlice({
  name: "quizData",
  initialState: {
    display_id: 0,
    question: null,
    answer: 0,
    choice1: '',
    choice2: '',
    choice3: '',
  },

  reducers: {
      setQuiz: (state, action) => {
        // body内の最初のmessageキーの値をstateに入れる
        state.display_id = action.payload.display_id;
        state.question = action.payload.question;
        state.answer = action.payload.answer;
        state.choice1 = action.payload.choice1;
        state.choice2 = action.payload.choice2;
        state.choice3 = action.payload.choice3;
      },
        setChoice: (state, action) => {
            state.choice1 = action.payload.choice1;
            state.choice2 = action.payload.choice2;
            state.choice3 = action.payload.choice3;
        }
  },
});

export const { setQuiz, setChoice } = QuizSlice.actions;

export const selectQuizData = (state) =>state.quizData;

export default QuizSlice.reducer;
