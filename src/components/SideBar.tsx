import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import { House, Book, ChatDots, BarChart, Folder, 
  // Envelope, Gear, 
List } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const sidebarLinks = [
  { label: "Home", icon: <House />, to: "/" },
  { label: "Chatbot", icon: <ChatDots />, to: "/chatbot" },
  { label: "Case Stories", icon: <Book />, to: "/case-stories" },
  { label: "Progress", icon: <BarChart />, to: "/progress-dashboard" },
  { label: "Resources", icon: <Folder />, to: "/resources" },
  // { label: "Contact", icon: <Envelope />, to: "/contact" },
  // { label: "Admin Panel", icon: <Gear />, to: "/adminpanel" },
];

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`d-flex flex-column shadow-sm sidebar${collapsed ? " collapsed" : ""}`}
      style={{
        width: collapsed ? "64px" : "240px",
        minHeight: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1000,
        paddingTop: "2rem",
        transition: "width 0.2s",
        backgroundColor: "#c0e3fa",
      }}
    >
      <Button
        variant="light"
        className="sidebar-toggle"
        style={{
          position: "absolute",
          top: "1rem",
          right: collapsed ? "-1.5rem" : "-1.5rem",
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "50%",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          zIndex: 1100,
          padding: 0,
        }}
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <List size={22} />
      </Button>
      <div className="sidebar-header" style={{ display: collapsed ? "none" : "block" }}>
        SPF LMS
      </div>
      <Nav className="flex-column gap-2 px-3">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              "d-flex align-items-center py-2 px-2 rounded sidebar-link" +
              (isActive ? " active" : "")
            }
            style={{ fontSize: "1.1rem", justifyContent: collapsed ? "center" : "flex-start" }}
          >
            <span className="sidebar-icon">{link.icon}</span>
            {!collapsed && link.label}
          </NavLink>
        ))}
      </Nav>
      <hr className="sidebar-divider" style={{ display: collapsed ? "none" : "block" }} />
    </div>
  );
};

export default SideBar;