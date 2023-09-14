import React from "react";
import { Button } from "antd";
import { Link, NavLink } from "react-router-dom"; 


// const { Content } = Layout;

function AdminPanel() {
  return (
    <div style={{margin: "auto"}}>
            <NavLink to={'/blogs'}>
                <Button type="primary">
                    Add Blog
                </Button>
            </NavLink>
    </div>
  );
}

export default AdminPanel;
