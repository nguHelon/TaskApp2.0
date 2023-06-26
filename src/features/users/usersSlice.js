import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 0,
        name: "Ngu Helon",
        password: "nguhelon",
        image: "../src/assets/avatars/avatar2.svg",
        task: {
            inProgress: 0,
            completed: 0,
            onHold: 0,
            totalTasks: 0,
        },
        allTasks: [],
        meetings: []
    },
    {
        id: 1,
        name: "anthony davis",
        password: "anthony",
        image: "../src/assets/avatars/avatar9.jpg",
        task: {
            inProgress: 0,
            completed: 0,
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
    reducers: {
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
                            completed: 0,
                            onHold: 0,
                            totalTasks: 0,
                        },
                        allTasks: [],
                        meetings: []
                    }
                }
            }
        },
        userRemoved(state, action) {
            return state.filter((user) => user.id != action.payload)
        }
    }
})

export const allUsers = (state) => state.users;

export const { userAdded, userRemoved } = usersSlice.actions;

export default usersSlice.reducer;