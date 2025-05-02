import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from "@/pages/signIn/signIn";
import Page404 from "@/pages/page404/page404";
import DefaultLayout from "@/layout/DefaultLayout";
import "@coreui/coreui/dist/css/coreui.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<DefaultLayout />} />

        <Route path="/login" element={<SignIn />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
