import { CInputGroup, CInputGroupText, CFormInput } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { CFormInputProps } from "@coreui/react/dist/esm/components/form/CFormInput";

export default function AuthInput({
  icon,
  ...props
}: {
  icon: string[];
} & CFormInputProps) {
  return (
    <CInputGroup className="mb-3">
      <CInputGroupText>
        <CIcon icon={icon} />
      </CInputGroupText>
      <CFormInput {...props} />
    </CInputGroup>
  );
}
