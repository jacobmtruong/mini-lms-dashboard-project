import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { courses as mockCourses } from "../../data/courses";
import type { Course } from "../../types/course";

export type CourseLoadingStatus = "idle" | "loading" | "succeeded" | "failed";

type CoursesState = {
  items: Course[];
  status: CourseLoadingStatus;
  error: string | null;
};

type FetchCoursesOptions = {
  shouldFail?: boolean;
};

const initialState: CoursesState = {
  items: [],
  status: "idle",
  error: null,
};

function loadMockCourses(shouldFail: boolean) {
  return new Promise<Course[]>((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Unable to load courses. Please try again."));
        return;
      }

      resolve(mockCourses);
    }, 1000);
  });
}

export const fetchCourses = createAsyncThunk<
  Course[],
  FetchCoursesOptions | undefined
>("courses/fetchCourses", async (options, thunkApi) => {
  try {
    const shouldFail = options?.shouldFail ?? false;

    const courses = await loadMockCourses(shouldFail);

    return courses;
  } catch (error) {
    if (error instanceof Error) {
      return thunkApi.rejectWithValue(error.message);
    }

    return thunkApi.rejectWithValue(
      "An unexpected error happened while loading courses.",
    );
  }
});

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.items = action.payload;
      state.status = "succeeded";
      state.error = null;
    },

    resetCourses: (state) => {
      state.items = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.items = [];

        if (typeof action.payload === "string") {
          state.error = action.payload;
        } else {
          state.error = "Unable to load courses. Please try again.";
        }
      });
  },
});

export const { resetCourses, setCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
