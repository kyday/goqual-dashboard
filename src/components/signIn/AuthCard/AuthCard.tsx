import { CCard, CCardBody } from "@coreui/react";

interface AuthCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function AuthCard({
  children,
  className,
  style,
}: AuthCardProps) {
  return (
    <CCard className={className} style={style}>
      <CCardBody>{children}</CCardBody>
    </CCard>
  );
}
