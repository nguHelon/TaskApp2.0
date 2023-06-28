import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    {
        id: "0",
        name: "task1",
        description: "task1 description over here",
        taskAssignee: "0",
        status: "on hold"
    }
]

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        tasksAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },

            prepare(name, description, taskAssignee, status) {
                return {
                    payload: {
                        id: nanoid(), name, description, taskAssignee, status
                    }
                }
            }
        },

        tasksRemoved(state, action) {
            return state.filter((task) => task.id != action.payload);
        }
    }
})

export const allTasks = (state) => state.tasks;

export const { tasksAdded, tasksRemoved } = tasksSlice.actions

export default tasksSlice.reducer