import { Modal } from "antd";

export const CustomModal = ({ isOpen, onRequestClose, children }) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            <div>
                <button onClick={onRequestClose}>Закрыть</button>
                {children}
            </div>
        </Modal>
    );
};

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        maxWidth: "600px",
    },
};