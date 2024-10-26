import axios from 'axios';

// Создаем экземпляр Axios с базовым URL
const api = axios.create({
  baseURL: 'https://api.danbel.ru:30/h1-hack-api/v1.0',
});

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

// Метод для получения всех элементов отчета
export const getAllElements = async (id) => {
  try {
    const response = await api.get(`/reports/${id}/elements`);
    return response.data; // Возвращаем массив элементов отчета
  } catch (error) {
    console.error('Error fetching report elements:', error);
    throw error; // Пробрасываем ошибку
  }
};

// Метод для сохранения всех элементов отчета
export const saveAllElements = async (id, elements) => {
  try {
    await api.post(`/reports/${id}/elements`, elements);
    return true; // Успешное сохранение
  } catch (error) {
    console.error('Error saving report elements:', error);
    throw error; // Пробрасываем ошибку
  }
};

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
    await api.post('/projects/import', formData, {
      params: { projectId },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return true; // Успешный импорт
  } catch (error) {
    console.error('Error importing project data:', error);
    throw error; // Пробрасываем ошибку
  }
};

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
