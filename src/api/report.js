import { api } from ".";

// Метод для получения отчета по ID
export const getReportById = async (id) => {
    try {
        const response = await api.get(`/reports/${id}`);
        return response.data; // Возвращаем данные отчета
    } catch (error) {
        console.error('Error fetching report by ID:', error);
        throw error; // Пробрасываем ошибку
    }
};

// Метод для сохранения всех элементов отчета
export const saveAllFields = async (id, elements) => {
    try {
        console.log(elements);
        
        const response = await api.post(`/reports/${id}/elements`, elements);
        return response.data; // Успешное сохранение
    } catch (error) {
        console.error('Error saving report elements:', error);
        throw error; // Пробрасываем ошибку
    }
};

// Метод для получения всех элементов отчета
export const getAllFields = async (id) => {
    try {
        const response = await api.get(`/reports/${id}/elements`);
        return response.data; // Возвращаем массив элементов отчета
    } catch (error) {
        console.error('Error fetching report elements:', error);
        throw error; // Пробрасываем ошибку
    }
};

// Метод для создания отчета
export const createReport = async (projectId, name) => {
    try {
        const response = await api.post('/reports', null, {
            params: { projectId, name },
        });
        return response.data; // Возвращаем данные отчета
    } catch (error) {
        console.error('Error creating report:', error);
        throw error; // Пробрасываем ошибку
    }
};