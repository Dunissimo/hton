import { createSlice } from '@reduxjs/toolkit'
import { removeElement } from '../../../utils/helpers';

const initialState = {
    reports: JSON.parse(localStorage.getItem('reports')) || [
        {
            id: 131,
            projectId: 333,
            createdDate: "2023-06-22 12:30:18.595616",
            fields: [
                {
                    id: 1,
                    type: "TEXT",
                    data: "test",
                    styles: {
                        color: "red",
                    },
                },
                {
                    id: 2,
                    type: "TEXT",
                    data: "test 2",
                    styles: {
                        color: "green",
                    },
                },
                {
                    id: 3,
                    type: "TEXT",
                    data: "test 22",
                    styles: {
                        color: "blue",
                        fontSize: 20
                    },
                },
            ]
        }
    ],
    deleted: JSON.parse(localStorage.getItem('deletedReports')) || [],
    deletedProps: JSON.parse(localStorage.getItem('deletedProps')) || [],
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
        },
        deleteReport: (state, {payload}) => {
            const removable = state.reports.find(rep => rep.id === payload.id);
            
            state.deleted = [...state.deleted, removable];
            state.reports = removeElement(state.reports, payload)
        },
        deleteProp: (state, {payload}) => {
            const report = state.reports.find(rep => rep.id === payload.projectId);
            console.log(report);
            
            const task = report.fields.find(task => task.id === payload.fieldId);

            console.log(task);
        }
    },
});

export const { addReport, removeReport, updateReport, deleteProp, deleteReport } = reportsSlice.actions;

export default reportsSlice.reducer