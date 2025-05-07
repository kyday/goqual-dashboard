import { CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/react";

export const Modal = (props: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { isOpen, setIsOpen, title, children, className } = props;

  return (
    <>
      <CModal
        className={className}
        size="lg"
        visible={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal"
      >
        <CModalHeader>
          <CModalTitle id="modal">{title}</CModalTitle>
        </CModalHeader>
        <CModalBody>{children}</CModalBody>
      </CModal>
    </>
  );
};
