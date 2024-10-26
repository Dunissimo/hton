import { useState } from "react";

export const useReportForm = () => {
    const [fields, setFileds] = useState([]);
    const [type, setType] = useState("");
    const [data, setData] = useState({});

    const addField = () => {
        setFileds(fields => {
            return [...fields, {id: null, type, data}];
        });
    }

    const handleSelectChange = (value) => {
        setType(value);
    };

    const handleInputChange = (e) => {
        setData({text: e.target.value});
    }

    const handlePropsChange = (props) => {
        setData({
            props: props
        });
    }

    return {fields, type, data, addField, handleInputChange, handlePropsChange, handleSelectChange}
}