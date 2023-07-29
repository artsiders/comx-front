import { SessionState } from "../_interface";
import { sessionSlice } from "../feature/session.slice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
  },
});

export type RootState = {
  session: SessionState;
};
