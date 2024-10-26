import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    reports: JSON.parse(localStorage.getItem('reports')) || [
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
            ]
        }
    ]
}

export const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        addReport: (state, {payload}) => {
            state.reports = [...state.reports, payload];
        
            localStorage.setItem('reports', JSON.stringify(state.reports));
        },
        removeReport: (state, {payload}) => {
            state.reports = removeElement(state.reports, payload);
          
            localStorage.setItem('reports', JSON.stringify(state.reports));
        },
        updateReport: (state, {payload}) => {
            state.reports = state.reports.map((item) => {
                if (item.id === payload.id) {
                    item = payload;
                }

                return item;
            })
         
            localStorage.setItem('reports', JSON.stringify(state.reports));
        }
    },
});

export const { addReport, removeReport, updateReport } = reportsSlice.actions;

export default reportsSlice.reducer