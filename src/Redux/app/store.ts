import { configureStore } from "@reduxjs/toolkit";
import tagSlice from "../features/tags/tagsSlice";
import videosSlice from "../features/videos/videosSlice";
export const store = configureStore({
  reducer: {
    videos: videosSlice,
    tags: tagSlice,
  },
});
