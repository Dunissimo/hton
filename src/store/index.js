import { configureStore } from '@reduxjs/toolkit'
import reportsReducer from './slices/reports'
import projectsReducer from './slices/projects'

export const store = configureStore({
    reducer: {
        reports: reportsReducer,
        projects: projectsReducer,
    },
})