import { CButton } from "@coreui/react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <h2>Sign up</h2>
      <p>Welcome to FE-GOQUAL-DASHBOARD</p>

      <Link to="/register">
        <CButton color="primary" className="mt-3" active tabIndex={-1}>
          Register Now!
        </CButton>
      </Link>
    </div>
  );
}
