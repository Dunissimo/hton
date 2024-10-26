import { FloatButton } from "antd";
import { 
    FileOutlined, 
    FilePdfOutlined, 
    FilePptOutlined, 
    FileWordOutlined, 
    SaveFilled 
} from '@ant-design/icons';

export const ReportButtons = () => {
    return (
        <>
            <FloatButton 
                style={{insetInlineEnd: 84}} 
                tooltip="Сохранить" 
                icon={<SaveFilled />} 
            />
    
            <FloatButton.Group
                trigger="hover"
                icon={<FileOutlined />}
                tooltip="Экспорт"
            >
                <FloatButton tooltip=".pptx" icon={<FilePptOutlined />} />
                <FloatButton tooltip=".pdf" icon={<FilePdfOutlined />} />
                <FloatButton tooltip=".docx" icon={<FileWordOutlined />} />
            </FloatButton.Group>
        </>
    );
}