import axios from 'axios';

// Устанавливаем базовый URL для API
const apiClient = axios.create({
    baseURL: 'https://api.danbel.ru:30/h1-hack-api/v1.0',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Метод для создания отчета
export const createReport = async (projectId, name) => {
    try {
        const response = await apiClient.post('/reports', null, {
            params: { projectId, name },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating report:', error);
        throw error;
    }
};

// Метод для получения всех элементов отчета
export const getAllElements = async (id) => {
    try {
        const response = await apiClient.get(`/reports/${id}/elements`);
        return response.data;
    } catch (error) {
        console.error('Error fetching report elements:', error);
        throw error;
    }
};

// Метод для сохранения всех элементов отчета
export const saveAllElements = async (id, elements) => {
    try {
        await apiClient.post(`/reports/${id}/elements`, elements);
    } catch (error) {
        console.error('Error saving report elements:', error);
        throw error;
    }
};

// Метод для получения всех проектов
export const getAllProjects = async () => {
    try {
        const response = await apiClient.get('/projects');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

export const getByIdProject = async (id) => {
    try {
        const response = await apiClient.get('/projects/' + id);
        return response.data;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
}

// Метод для создания нового проекта
export const createProject = async (name) => {
    try {
        const response = await apiClient.post('/projects', null, {
            params: { name },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
};

// Метод для импорта данных в проект
export const importData = async (projectId, file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        await apiClient.post(`/projects/import`, formData, {
            params: { projectId },
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    } catch (error) {
        console.error('Error importing data:', error);
        throw error;
    }
};

// Метод для получения отчета по ID
export const getReportById = async (id) => {
    try {
        const response = await apiClient.get(`/reports/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching report by ID:', error);
        throw error;
    }
};

// Метод для получения задач проекта
export const getProjectTasks = async (id) => {
    try {
        const response = await apiClient.get(`/projects/${id}/tasks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching project tasks:', error);
        throw error;
    }
};

// Метод для получения всех отчетов проекта
export const getAllReportsForProject = async (id) => {
    try {
        const response = await apiClient.get(`/projects/${id}/reports`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all reports for project:', error);
        throw error;
    }
};

// Метод для получения всех свойств проекта
export const getAllPropertiesForProject = async (id) => {
    try {
        const response = await apiClient.get(`/projects/${id}/properties`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all properties for project:', error);
        throw error;
    }
};