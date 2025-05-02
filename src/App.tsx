import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "@/pages/signIn/signIn";
import Page404 from "@/pages/page404/page404";
import DefaultLayout from "@/layout/DefaultLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
