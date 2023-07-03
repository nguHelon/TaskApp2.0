import { createSlice } from "@reduxjs/toolkit"

const initialState = [];

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
        },

        usersLoaded(state, action) {
            state.concat(action.payload);
        }
    }
})

export const allUsers = (state) => state.users;

export const { userAdded, userRemoved, usersLoaded } = usersSlice.actions;

export default usersSlice.reducer;