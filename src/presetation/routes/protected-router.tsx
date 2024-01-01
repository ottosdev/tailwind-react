import  { ReactElement, ReactNode } from "react";
import { Navigate } from 'react-router-dom';
import {useAuth} from "@/presetation/hooks/useAuthentication.tsx";

interface Props {
    element?: ReactElement;
    children?: ReactNode;
}

function ProtectedRoute({ children }: Props) {
    const { isAuthenticated} = useAuth()
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children
}

export default ProtectedRoute;
