import React from "react";
import { toast } from "react-toastify";

const ToastNotification = ({ message, type }) => {
    const showToast = () => {
        switch (type) {
            case "success":
                toast.success(message);
                break;
            case "error":
                toast.error(message);
                break;
            default:
                toast.info(message);
                break;
        }
    };

    return <>{showToast()}</>;
};

export default ToastNotification;