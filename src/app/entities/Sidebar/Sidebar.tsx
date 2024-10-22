import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { USER_ROLE } from "../../config/constants";
// import { logout } from "../../shared/components/authentication";
import { useNavigate, useLocation } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import {
  MainMenuListContent,
  SubMenuListContent,
  MenuList,
} from "./SidebarElements";

const SidebarContainer = styled("div")`
  flex: 0 0 25%;
  padding: 10px;
`;

// Define a styled ListItem component
const StyledListItem = styled(ListItem)`
  color: #727272;
  &.Mui-selected {
    background-color: #000000; // Background color for the selected item
    color: white; // Text color for the selected item
    border-radius: 15px;
  }

  &.Mui-selected .MuiListItemIcon-root {
    color: white; // Icon color for the selected item
  }

  &.MuiListItem-root {
    cursor: pointer; // Add pointer cursor to all ListItems
  }
`;

const StyledSubMenuListItem = styled(ListItem)`
  &.Mui-selected {
    background-color: #f5f5f5; // Background color for the selected item
    border-radius: 15px;
    color: #333;
  }
`;

const StyledListItemText = styled(ListItemText)`
  font-size: 18px !important;
  margin-left: 15px;
`;

const StyledListItemButton = styled(ListItemButton)`
  font-size: 18px;
`;

interface SidebarProps {
  menuClickHandler?: (menuItem: string) => void;
}

interface SubMenuProps {
  subMenu: {
    MenuType: string;
    imgSrc: string;
    whiteImgSrc: string;
    MenuName: string;
    path?: string;
  }[];
  parentMenu?: any;
  currentPath?: string;
  handleMenuItemClick?: any;
  isSidebarOpenOrMinimize?: any;
}

const SubMenu = ({
  subMenu,
  parentMenu,
  currentPath,
  handleMenuItemClick,
  isSidebarOpenOrMinimize,
}: SubMenuProps) => {
  const urls = ["/coachings", "/coach-products", "/sessions", "/coaching/"];
  const containsPath = urls.some((substring: any) =>
    currentPath?.toLowerCase()?.includes(substring?.toLowerCase())
  );
  const [open, setOpen] = useState(containsPath || false);

  useEffect(() => {
    setOpen(containsPath);
  }, [containsPath]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledListItem
        onClick={handleClick}
        selected={containsPath}
        sx={{ padding: "0!important" }}
      >
        <StyledListItemButton
          disableRipple
          sx={{
            borderRadius: "15px",
            padding: "16px!important",
            alignItems: "center",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: "auto !important",
            }}
          >
            <Avatar
              src={parentMenu?.imgSrc}
              alt={parentMenu?.MenuType}
              style={{ width: "24px", height: "24px" }}
            />
          </ListItemIcon>
          {isSidebarOpenOrMinimize && (
            <StyledListItemText primary={parentMenu?.MenuType} />
          )}
          {subMenu?.length > 0 && (
            <Box
              sx={{
                position: "absolute",
                right: isSidebarOpenOrMinimize ? "10px" : "15px",
                top: isSidebarOpenOrMinimize ? "20px" : "30px",
              }}
            >
              {open ? <ExpandLess /> : <ExpandMore />}
            </Box>
          )}
        </StyledListItemButton>
      </StyledListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ maxWidth: "252px" }}>
          {subMenu?.map((subMenuItem: any, index) => (
            <StyledSubMenuListItem
              key={index}
              selected={
                currentPath === subMenuItem.path ||
                (subMenuItem.path !== "/" &&
                  currentPath?.includes(subMenuItem.path))
              }
              onClick={() => {
                handleMenuItemClick(subMenuItem);
              }}
              sx={{ padding: "0!important" }}
            >
              <SubMenuListContent
                isSidebarOpenOrMinimize={isSidebarOpenOrMinimize}
                currentPath={currentPath}
                subMenuItem={subMenuItem}
              />
            </StyledSubMenuListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

interface SidebarProps {
  menuClickHandler?: (menuItem: string) => void;
  userType?: any;
  isSidebarOpenOrMinimize?: any;
}

function Sidebar({ userType, isSidebarOpenOrMinimize }: SidebarProps) {
  const navigate = useNavigate();
  const location: any = useLocation();
  const [currentPath, setCurrentPath] = useState<string>();
  const [selectedItem] = useState<string | null>();

  useEffect(() => {
    setCurrentPath(location?.pathname);
  }, [location.pathname]);

  let menuArr: any = MenuList(userType);
  const handleMenuItemClick = (menuItem: any) => {
    /* if (menuItem?.path === "logout") {
      logout();
      navigate(userType === USER_ROLE.COACH ? "/coach/signIn" : `/signIn`);
    } */
    navigate(`${menuItem?.path}`);
  };

  return (
    <SidebarContainer>
      <List
        sx={{
          overflowY: "scroll",
          padding: "0 10px",
          height: "calc(100vh - 100px)",
          minWidth: isSidebarOpenOrMinimize ? "252px" : "auto",
        }}
        className="scroll-hide"
      >
        {menuArr?.map((ele: any, ind: number) => (
          <React.Fragment key={ind}>
            {!ele?.subMenus ? (
              <StyledListItem
                key={ele?.MenuType}
                onClick={() => {
                  handleMenuItemClick(ele);
                }}
                selected={
                  currentPath === ele.path ||
                  (ele.path !== "/" && currentPath?.includes(ele.path)) ||
                  selectedItem === ele?.MenuName
                }
                sx={{ padding: "0!important" }}
              >
                <MainMenuListContent
                  ele={ele}
                  isSidebarOpenOrMinimize={isSidebarOpenOrMinimize}
                  selectedItem={selectedItem}
                  currentPath={currentPath}
                />
              </StyledListItem>
            ) : (
              <SubMenu
                subMenu={ele?.subMenus}
                parentMenu={ele}
                currentPath={currentPath}
                handleMenuItemClick={handleMenuItemClick}
                isSidebarOpenOrMinimize={isSidebarOpenOrMinimize}
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </SidebarContainer>
  );
}

export default Sidebar;
