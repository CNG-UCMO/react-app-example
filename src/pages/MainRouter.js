import { Route, Routes } from "react-router"
import { HomePage } from "./HomePage"

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
  )
}