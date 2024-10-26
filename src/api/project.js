import { api } from ".";

// Метод для получения всех проектов
export const getAllProjects = async () => {
    try {
        const response = await api.get('/projects');
        return response.data; // Возвращаем массив проектов
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error; // Пробрасываем ошибку
    }
};

// Метод для создания нового проекта
export const createProject = async (name) => {
    try {
        const response = await api.post('/projects', null, {
            params: { name },
        });
        
        return response.data; // Возвращаем ID нового проекта
    } catch (error) {
        console.error('Error creating project:', error);
        throw error; // Пробрасываем ошибку
    }
};

// Метод для импорта данных в проект
export const importData = async (projectId, file) => {
    const formData = new FormData();
    formData.append('file', file); // Добавляем файл в FormData

    try {
        const response = await api.post('/projects/import', formData, {
            params: { projectId },
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // Успешный импорт
    } catch (error) {
        console.error('Error importing project data:', error);
        throw error; // Пробрасываем ошибку
    }
};

// Метод для получения всех свойств проекта
export const getAllProperties = async (id) => {
    try {
        const response = await api.get(`/projects/${id}/properties`);
        return response.data; // Возвращаем массив свойств
    } catch (error) {
        console.error('Error fetching project properties:', error);
        throw error; // Пробрасываем ошибку
    }
};
