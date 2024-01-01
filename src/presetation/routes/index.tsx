import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "@/shared/components/Layout/Layout.tsx";
import Dashboard from "@/presetation/pages/private/Dashboard/Dashboard.tsx";
import ProtectedRoute from "@/presetation/routes/protected-router.tsx";
import Products from "@/presetation/pages/private/Products/Products.tsx";
import Signin from "@/presetation/pages/public/Signin/Signin.tsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signin/>}/>
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <Dashboard/>
                            </Layout>
                        </ProtectedRoute>

                    }
                />
                <Route
                    path="/product"
                    element={
                        <ProtectedRoute >
                            <Layout>
                                <Products/>
                            </Layout>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;