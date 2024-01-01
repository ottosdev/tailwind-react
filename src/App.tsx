import AppRoutes from "@/presetation/routes";
import AuthProvider from "@/presetation/hooks/useAuthentication.tsx";

export default function App() {
    return (
        <AuthProvider>
            <AppRoutes/>
        </AuthProvider>
    )
}