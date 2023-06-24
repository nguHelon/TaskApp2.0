import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 0,
        name: "Ngu Helon",
        password: "nguhelon",
        image: "",
        task: {
            inProgress: 0,
            completd: 0,
            onHold: 0,
            totalTasks: 0,
        },
        allTasks: [],
        meetings: []
    },
    {
        id: 0,
        name: "anthony davis",
        password: "anthony",
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

            prepare(id, name, password, image) {
                return {
                    payload: {
                        id,
                        name,
                        password,
                        image,
                        task: {
                            inProgress: 0,
                            completd: 0,
                            onHold: 0,
                            totalTasks: 0,
                        },
                        allTasks: [],
                        meetings: []
                    }
                }
            }
        }
    }
})

export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;