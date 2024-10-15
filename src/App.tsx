import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PhotoDetail from "./pages/PhotoDetail"
function App() {

  return (
    <>
      <Container>
        <Routes>
          <Route path="/photos" element={<Home />} />
          <Route path="/photos/:id" element={<PhotoDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
