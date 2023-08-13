import { Flex } from "@chakra-ui/react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

const mainContainer = {
    w: "100vw",
    h: "fit-content",
    minH: "100vh",
    bgColor: "primaryDark",
    color: "textPrimaryDark",
};

function App() {
    return (
        <Flex {...mainContainer} overflow={"hidden"}>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register/:token" element={<Register />} />
            </Routes>
        </Flex>
    );
}

export default App;
