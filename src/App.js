
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Pages/Layout"
import Home from "./Pages/Home"
import EditPage from "./Pages/EditPage"
import About from "./Pages/About"
import MyForm from "./Pages/MyForm"
import NoPage from "./Pages/NoPage"

export default function App() {  

  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="my_form" element={<MyForm />} />
              <Route path="edit_page/:id" element={<EditPage />} />
              <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}


