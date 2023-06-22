import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 0,
        name: "Admin",
        password: "admin",
        image: "",
        task: {
            inProgress: 0,
            completd: 0,
            onHold: 0,
            totalTasks: 0,
        },
        allTasks: [],
        meetings: []
    }
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducer: {
        userAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },

            prepare(name, password, image, task, allTasks, meetings) {
                return {
                    payload: {
                        id: nanoid(), name, password, image, task, allTasks, meetings
                    }
                }
            }
        }
    }
})

export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;