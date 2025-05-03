import { CCardGroup, CCol, CContainer, CRow } from "@coreui/react";
import AuthCard from "@/components/signIn/AuthCard/AuthCard";
import AuthForm from "@/components/signIn/AuthForm/AuthForm";
import SignUp from "@/components/signUp/SignUp/SignUp";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const SignIn = () => {
  const [cookies] = useCookies(["refreshToken"]);

  if (cookies.refreshToken) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <AuthCard>
                <AuthForm />
              </AuthCard>

              <AuthCard className="text-white bg-primary py-5">
                <SignUp />
              </AuthCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SignIn;
