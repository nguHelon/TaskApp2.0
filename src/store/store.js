import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "../features/users/usersSlice"
import tasksReducer from "../features/tasks/tasksSlice"
import meetingsReducr from "../features/meetings/meetingsSlice"

const store = configureStore({
    reducer: {
        users: usersReducer,
        tasks: tasksReducer,
        meetings: meetingsReducr,
    }
});

export default store;