import { CCard, CCardBody, CCardHeader, CCardTitle } from "@coreui/react";
import { ReactNode } from "react";

export const Card = (props: {
  header: string;
  title: string;
  children: ReactNode;
  className?: string;
}) => {
  const { header, title, children, className } = props;
  return (
    <CCard className={className}>
      <CCardHeader>{header}</CCardHeader>
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        {children}
      </CCardBody>
    </CCard>
  );
};
