import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { courses as mockCourses } from "../../data/courses";
import type { Course } from "../../types/course";

type CoursesState = {
  items: Course[];
};

const initialState: CoursesState = {
  items: mockCourses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
