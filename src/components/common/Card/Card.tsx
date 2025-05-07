import { CCard, CCardBody, CCardHeader, CCardTitle } from "@coreui/react";
import { ReactNode } from "react";

export const Card = (props: {
  header: string;
  title: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const { header, title, children, className, onClick } = props;
  return (
    <CCard {...props} className={className} onClick={onClick}>
      <CCardHeader>{header}</CCardHeader>
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        {children}
      </CCardBody>
    </CCard>
  );
};
