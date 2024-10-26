import { useState } from "react";

export const useReportForm = () => {
    const [fields, setFileds] = useState([]);
    const [type, setType] = useState("");
    const [data, setData] = useState([]);

    const addField = () => {
        setFileds(fields => {
            return [...fields, { type, data }];
        });
    }

    const handleSelectChange = (value) => {
        setType(value);
    };

    const handleInputChange = (e) => {
        setData(e.target.value);
    }

    const handlePropsChange = (props) => {
        setData(props);
    }

    return {fields, type, data, addField, handleInputChange, handlePropsChange, handleSelectChange}
}