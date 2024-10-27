import { useRef } from 'react';
import { Button } from 'antd';
import { importData } from "../network/api.js";

const FileUploadComponent = ({ projectId, children }) => {
    const fileInputRef = useRef(null); // Создаем реф для input

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Получаем выбранный файл
        if (file) {
            const fileType = file.type;

            // Проверяем тип файла
            if (fileType === 'application/json' || fileType === 'text/csv') {
                console.log('Файл выбран:', file);

                importData(projectId, file).then(r => {console.log(r);});
                // Здесь можно добавить логику обработки файла
            } else {
                alert('Пожалуйста, выберите файл в формате JSON или CSV.');
            }
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click(); // Программно открываем проводник
    };

    return (
        <>
            <input
                type="file"
                accept=".json,.csv" // Ограничиваем выбор только на json и css
                ref={fileInputRef}
                style={{ display: 'none' }} // Скрываем input
                onChange={handleFileChange}
            />
            <Button type="default" onClick={handleButtonClick}>
                {children}
            </Button>
        </>
    );
};

export default FileUploadComponent;