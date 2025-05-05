import {
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { cilControl, cilSpeedometer } from "@coreui/icons";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <CSidebar colorScheme="dark" className="border-end h-screen">
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand href="/">FE-GOQUAL-DASHBOARD</CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavItem>
          <CNavLink as={NavLink} to="/dashboard">
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Dashboard
          </CNavLink>
        </CNavItem>

        <CNavItem>
          <CNavLink as={NavLink} to="/control">
            <CIcon customClassName="nav-icon" icon={cilControl} /> Control
          </CNavLink>
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};
