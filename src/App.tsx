import { Route, Routes, BrowserRouter } from "react-router-dom"
import Layout from "./shared/components/Layout"
import Dashboard from "./presetation/pages/Dashboard/Dashboard"
import Products from "./presetation/pages/Products/Products"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="product" element={<Products />} />
        </Route>
        <Route path="login" element={<div>Login page</div>} />
      </Routes>

    </BrowserRouter>
  )
}