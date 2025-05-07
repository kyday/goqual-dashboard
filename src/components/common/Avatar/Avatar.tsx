import { CAvatar } from "@coreui/react";

export const Avatar = (props: {
  className?: string;
  color?: string;
  name: string;
  size?: string;
}) => {
  const { color = "secondary", name, size = "md", className } = props;
  return (
    <>
      <CAvatar className={className} color={color} size={size}>
        {name}
      </CAvatar>
    </>
  );
};
