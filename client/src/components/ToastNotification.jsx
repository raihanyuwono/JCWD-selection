function getStatus(status) {
    switch (parseInt(String(status)[0])) {
        case 2:
            return "success";
        case 4:
            return "warning";
        case 5:
            return "error";
        default:
            return "info";
    }
}

function ToastNotification(toast, { title, status }) {
    return toast({
        title,
        status: getStatus(status),
        duration: 3000,
        isCloseabble: true,
        position: "bottom",
    });
}

export default ToastNotification;