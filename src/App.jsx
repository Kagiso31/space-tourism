import Header from "./components/Header";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/space-tourism" element={<Home />} />
          <Route path="/space-tourism/destination" element={<Destination />} />
          <Route path="/space-tourism/crew" element={<Crew />} />
          <Route path="/space-tourism/technology" element={<Technology />} />
          <Route path="/space-tourism/*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
