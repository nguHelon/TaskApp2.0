import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 0,
        name: "Meeting1",
        description: "front end meeting",
        date: "whatever date",
        attendants: []
    }
]

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
        }
    }
})

export const allMeetings = (state) => state.meetings;

export const { meetingAdded } = meetingsSlice.actions;

export default meetingsSlice.reducer