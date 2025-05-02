import {
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavItem,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { cilSpeedometer } from "@coreui/icons";

export const Sidebar = () => {
  return (
    <CSidebar colorScheme="dark" className="border-end h-screen">
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>FE-GOQUAL-DASHBOARD</CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavItem href="/">
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Dashboard
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};
