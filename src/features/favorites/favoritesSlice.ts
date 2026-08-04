import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
  courseIds: number[];
};

const initialState: FavoritesState = {
  courseIds: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const courseId = action.payload;

      const courseIsFavorite = state.courseIds.includes(courseId);

      if (courseIsFavorite) {
        state.courseIds = state.courseIds.filter((id) => {
          return id !== courseId;
        });

        return;
      }

      state.courseIds.push(courseId);
    },

    clearFavorites: (state) => {
      state.courseIds = [];
    },
  },
});

export const { clearFavorites, toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
