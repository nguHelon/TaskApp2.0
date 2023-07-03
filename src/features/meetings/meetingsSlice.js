import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const meetingsSlice = createSlice({
    name: "meetings",
    initialState,
    reducers: {
        meetingAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },

            prepare(name, description, date, attendants) {
                return {
                    payload: {
                        id: nanoid(), name, description, date, attendants
                    }
                }
            }
        },

        meetingRemoved(state, action) {
            return state.filter((user) => user.id != action.payload);
        },

        meetingsLoaded(state, action) {
            state.concat(action.payload);
        }
    }
})

export const allMeetings = (state) => state.meetings;

export const { meetingAdded, meetingRemoved, meetingsLoaded } = meetingsSlice.actions;

export default meetingsSlice.reducer