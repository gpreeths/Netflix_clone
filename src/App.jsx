import { Routes,Route } from "react-router-dom"
import Signin from "./Pages/Signin"
import Movie from "./Pages/Movies"
import Movie_details from "./Pages/Movie_details"
import Login from "./Pages/Login"
import Trailer from "./Pages/Trailer"
import Error from "./Error"

function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/movie" element={<Movie/>}/>
      <Route path="/movie/:id" element={<Movie_details/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/trailer/:id" element={<Trailer/>}/>
      <Route path="*" element={<Error/>}/>
     </Routes>
    </>
  )
}

export default App
