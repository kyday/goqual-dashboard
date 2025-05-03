import AuthInput from "@/components/signIn/AuthInput/AuthInput";
import authService from "@/services/apis/auth";
import { useAuthStore } from "@/store/authStore";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { CButton, CCol, CForm, CRow } from "@coreui/react";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";

export default function AuthForm() {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const [, setCookie] = useCookies(["refreshToken"]);

  const mutation = useMutation({
    mutationFn: (formData: FormData) => authService.login(formData),
    onSuccess: (data) => {
      setAccessToken(data.token);
      setCookie("refreshToken", data.refreshToken);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutation.mutate(formData);
  };

  return (
    <CForm onSubmit={handleSubmit}>
      <h1>Login</h1>
      <p className="text-body-secondary">Sign In to your account</p>

      <AuthInput
        icon={cilUser}
        placeholder="Username"
        autoComplete="username"
        name="username"
      />

      <AuthInput
        type="password"
        icon={cilLockLocked}
        placeholder="Password"
        autoComplete="current-password"
        name="password"
      />

      {mutation?.isError && (
        <p className="text-danger">{mutation?.error?.message}</p>
      )}

      <CRow>
        <CCol xs={6}>
          <CButton
            disabled={mutation?.isPending}
            type="submit"
            color="primary"
            className="px-4"
          >
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
