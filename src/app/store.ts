import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import coursesReducer from "../features/courses/coursesSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";

function loadFavoriteCourseIds() {
  const savedFavorites = localStorage.getItem("edupro-favorites");

  if (!savedFavorites) {
    return [];
  }

  try {
    return JSON.parse(savedFavorites) as number[];
  } catch {
    return [];
  }
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
    favorites: favoritesReducer,
  },
  preloadedState: {
    favorites: {
      courseIds: loadFavoriteCourseIds(),
    },
  },
});

store.subscribe(() => {
  const favoriteCourseIds = store.getState().favorites.courseIds;

  localStorage.setItem("edupro-favorites", JSON.stringify(favoriteCourseIds));
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
