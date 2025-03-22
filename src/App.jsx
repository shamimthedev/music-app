import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Playlist from "./pages/Playlist"
import Liked from "./pages/Liked"
import RootLayout from "./layout/RootLayout"

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="liked" element={<Liked />} />
        </Route>
      </Routes>
    </>
  )
}

export default App