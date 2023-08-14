import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import themes from "./themes/themes";
import Storage from "./storage"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={Storage}>
            <ChakraProvider theme={themes}>
                <App />
            </ChakraProvider>
        </Provider>
    </BrowserRouter>
);
