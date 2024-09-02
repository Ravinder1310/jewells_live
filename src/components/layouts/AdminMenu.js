import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./dropDownMenu.css"

const AdminMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="text-center" style={{ marginTop: "30px",marginBottom:"40px" }}>
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Create category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Product
          </NavLink>

          <div
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <NavLink
              to="/dashboard/admin/orders"
              className="list-group-item list-group-item-action"
            >
              Orders
            </NavLink>
            {dropdownOpen && (
              <div className="dropdown-content">
                <NavLink
                  to="/dashboard/admin/pending"
                  className="dropdown-item"
                  // style={{ padding:"10px",fontSize:"14px",borderBottom:"1px solid grey",borderRight:"1px solid grey"}}
                >
                   Pending Orders
                </NavLink>
                <NavLink
                  to="/dashboard/admin/canceled"
                  className="dropdown-item"
                  // style={{ padding:"10px",fontSize:"14px",borderBottom:"1px solid grey",borderRight:"1px solid grey"}}
                >
                  Canceled Orders
                </NavLink>
                <NavLink
                  to="/dashboard/admin/delivered"
                  className="dropdown-item"
                  // style={{ padding:"10px",fontSize:"14px",borderBottom:"1px solid grey",borderRight:"1px solid grey"}}
                >
                  Delivered Orders
                </NavLink>
                <NavLink
                  to="/dashboard/admin/shipped"
                  className="dropdown-item"
                  // style={{ padding:"10px",fontSize:"14px",borderBottom:"1px solid grey",borderRight:"1px solid grey"}}
                >
                  Shipped Orders
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
