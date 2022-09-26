import { Route, Routes } from "react-router"
import { HomePage } from "./HomePage"
import { SecondPage } from "./SecondPage"

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/secondpage" element={<SecondPage/>} />
    </Routes>
  )
}