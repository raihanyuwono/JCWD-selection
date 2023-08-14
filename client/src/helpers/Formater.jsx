const DATE_LOCALE = "en-UK";

function priceFormater(price) {
    let formatted = "";
    price = String(price);
    while (price.length > 0) {
        formatted = price.slice(-3) + formatted;
        if (price.length > 3) formatted = "." + formatted;
        price = price.slice(0, -3);
    }

    return formatted;
}

function dateFormater(date) {
    date = new Date(date);
    return date.toLocaleDateString(DATE_LOCALE, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function timeFormater(date) {
    if (!date) return;
    date = new Date(date);
    return date.toLocaleTimeString(DATE_LOCALE, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
}

export { priceFormater, dateFormater, timeFormater };
