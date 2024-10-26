import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    reports: [
        {
            id: 131,
            projectId: 333,
            createdDate: "2023-06-22 12:30:18.595616",
            fields: [
                {
                    type: "TEXT",
                    data: "test",
                    styles: {
                        color: "red",
                    },
                },
                {
                    type: "TEXT",
                    data: "test 2",
                    styles: {
                        color: "green",
                    },
                },
                {
                    type: "TEXT",
                    data: "test 22",
                    styles: {
                        color: "blue",
                        fontSize: 20
                    },
                },
                {
                    type: "CHART",
                    data: null,
                    styles: {
                        // ...
                    },
                },
            ]
        }
    ]
}

export const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        addReport: (state, {payload}) => {
            console.log('aaaa1');
            
            state.reports = [...state.reports, payload];
        },
        removeReport: (state, {payload}) => {
            state.reports = removeElement(state.reports, payload);
        }
    },
});

export const { addReport, removeReport } = reportsSlice.actions;

export default reportsSlice.reducer