import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from "@/pages/signIn/signIn";
import Page404 from "@/pages/page404/page404";
import DefaultLayout from "@/layout/DefaultLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import "@coreui/coreui/dist/css/coreui.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Navigate to="/dashboard" replace />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/404" element={<Page404 />} />
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <DefaultLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
