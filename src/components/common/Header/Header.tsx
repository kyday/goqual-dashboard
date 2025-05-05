import { NavLink } from "react-router-dom";

import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CNavLink,
  CNavItem,
  useColorModes,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilContrast, cilMoon, cilSun } from "@coreui/icons";
import { Avatar } from "@/components/common/Avatar/Avatar";

export const Header = () => {
  const { colorMode, setColorMode } = useColorModes(
    "coreui-free-react-admin-template-theme"
  );

  return (
    <CHeader position="sticky">
      <CContainer fluid>
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem>
            <CNavLink to="/" as={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
        </CHeaderNav>

        <CHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === "dark" ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === "auto" ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === "light"}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode("light")}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === "dark"}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode("dark")}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === "auto"}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode("auto")}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>

          <li className="nav-item ">
            <Avatar
              color="secondary"
              className="ml-5 cursor-pointer"
              name="kim"
              size="md"
            />
          </li>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};
