import { Flex } from "@chakra-ui/react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const mainContainer = {
    h: "100vh",
    w: "100vw",
    bgColor: "primaryDark",
    color: "textPrimaryDark",
};

function App() {
    return (
        <Flex {...mainContainer}>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Flex>
    );
}

export default App;
