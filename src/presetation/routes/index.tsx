import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
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
                        <ProtectedRoute>
                            <Layout>
                                <Products/>
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="*"
                    element={
                        <div className='h-screen w-screen flex flex-col justify-center items-center'>
                            <h1>Pagina não encontrada!</h1>
                            <Link to={'/'} className={'border p-2 rounded-md bg-amber-400 text-white'}>Retornar para o
                                login ou dashboard</Link>
                            <h5>404</h5>
                        </div>
                    }
                />
            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;