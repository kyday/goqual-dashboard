import {
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavItem,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { cilControl, cilSpeedometer } from "@coreui/icons";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <CSidebar colorScheme="dark" className="border-end h-screen">
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand href="/">FE-GOQUAL-DASHBOARD</CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavItem>
          <Link
            className="flex text-decoration-none text-white items-center mt-2 ml-2 mb-4"
            to="/"
          >
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Dashboard
          </Link>
        </CNavItem>

        <CNavItem>
          <Link
            className="flex text-decoration-none text-white items-center mt-2 ml-2 mb-4"
            to="/control"
          >
            <CIcon customClassName="nav-icon" icon={cilControl} /> Control
          </Link>
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};
