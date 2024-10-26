import { createSlice } from '@reduxjs/toolkit'
import { removeElement } from '../../../utils/helpers';

const initialState = {
    projects: [
        {
            id: 86181,
            name: "Самара",
            createdDate: "2023-05-22 12:30:18.595616",
        },
        {
            id: 86182,
            name: "Санкт-Петербург",
            createdDate: "2023-06-22 12:30:18.595616",
        },
    ]
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, {payload}) => {
            state.projects.push(payload);
        },
        removeProject: (state, {payload}) => {
            state.projects = removeElement(state.projects, payload);
        }
    },
});

export const { addProject, removeProject } = projectsSlice.actions;

export default projectsSlice.reducer;