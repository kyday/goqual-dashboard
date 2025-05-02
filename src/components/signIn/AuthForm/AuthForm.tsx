import AuthInput from "@/components/signIn/AuthInput/AuthInput";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { CButton, CCol, CForm, CRow } from "@coreui/react";

export default function AuthForm() {
  return (
    <CForm>
      <h1>Login</h1>
      <p className="text-body-secondary">Sign In to your account</p>

      <AuthInput
        icon={cilUser}
        placeholder="Username"
        autoComplete="username"
      />

      <AuthInput
        icon={cilLockLocked}
        placeholder="Password"
        autoComplete="current-password"
      />

      <CRow>
        <CCol xs={6}>
          <CButton color="primary" className="px-4">
            Login
          </CButton>
        </CCol>
        <CCol xs={6} className="text-right">
          <CButton color="link" className="px-0">
            Forgot password?
          </CButton>
        </CCol>
      </CRow>
    </CForm>
  );
}
