import { Layout, Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
const HeaderNav = () => {
  const { Header } = Layout;
  const location = useLocation();
  const headerContent = [
    {
      id: 1,
      path: "/",
      label: "Recipes",
    },
    {
      id: 2,
      path: "/favorites",
      label: "Favorite Recipes",
    },
  ];
  const selectedKeys = headerContent.find(
    (content) => location.pathname === content.path
  );

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={
          selectedKeys ? [selectedKeys.id.toString()] : ["1"]
        }
        items={headerContent.map((content) => {
          const key = content.id;
          const label = <NavLink to={content.path}>{content.label}</NavLink>;
          return {
            key,
            label,
          };
        })}
      />
    </Header>
  );
};

export default HeaderNav;
