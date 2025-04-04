import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            accountThemeImplementation: "none",
            kcContextExclusionsFtl: `
                <@addToXKeycloakifyMessagesIfMessageKey str="doLogIn" />
                <@addToXKeycloakifyMessagesIfMessageKey str="doRegister" />
                <@addToXKeycloakifyMessagesIfMessageKey str="noAccount" />
                <@addToXKeycloakifyMessagesIfMessageKey str="username" />
                <@addToXKeycloakifyMessagesIfMessageKey str="usernameOrEmail" />
                <@addToXKeycloakifyMessagesIfMessageKey str="password" />
                <@addToXKeycloakifyMessagesIfMessageKey str="rememberMe" />
                <@addToXKeycloakifyMessagesIfMessageKey str="doForgotPassword" />
        `
        })
    ]
});
