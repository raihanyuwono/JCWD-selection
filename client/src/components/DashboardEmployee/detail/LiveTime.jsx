import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const DATE_LOCALE = "en-UK";

function showTime(date) {
    return date.toLocaleTimeString(DATE_LOCALE, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });
}

function showDate(date) {
    return date.toLocaleDateString(DATE_LOCALE, {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

const time = {
    fontWeight: "semibold",
    fontSize: "36px",
};

function updateTime(setCurrentDate) {
    const INTERVAL = 1000;
    setInterval(() => {
        setCurrentDate(new Date());
    }, INTERVAL);
}

const container = {
    alignItems: "center",
    direction: "column",
    textAlign: "center",
};

function LiveTime() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        updateTime(setCurrentDate);
    }, []);

    return (
        <Flex {...container}>
            <Text {...time}>{showTime(currentDate)}</Text>
            <Text>{showDate(currentDate)}</Text>
        </Flex>
    );
}

export default LiveTime;
