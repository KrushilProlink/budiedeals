import {
    Box,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Tooltip,
  } from "@mui/material";
  import { styled } from "@mui/material/styles";
  import { useTranslation } from "react-i18next";
  
 /* import {
    ClubsMenuImage,
    USER_ROLE,
  } from "../../config/constants"; */
  
  // import SvgImage from "app/shared/components/SvgImage";
  
  const StyledListItemText = styled(ListItemText)`
    font-size: 18px !important;
    margin-left: 15px;
  `;
  
  const StyledListItemButton = styled(ListItemButton)`
    font-size: 18px;
  `;
  
  export const MenuList = (userType: string) => {
    const { t } = useTranslation();
    if (userType) {
      return [
        {
          MenuType: t("dashboard"),
          // imgSrc: DashboardMenuImage,
          // whiteImgSrc: DashboardMenuWhiteImage,
          MenuName: "Dashboard",
          path: "/",
        },
        
      ];
    }
  };
  
  export const MainMenuListContent = ({
    ele,
    currentPath,
    selectedItem,
    isSidebarOpenOrMinimize,
  }: any) => {
    const listContent = (
      <StyledListItemButton
        disableRipple
        sx={{ borderRadius: "15px", padding: "16px!important" }}
      >
        <ListItemIcon
          sx={{
            minWidth: "auto !important",
          }}
        >
          {currentPath === ele.path ||
          selectedItem === ele?.MenuType ||
          selectedItem === ele?.MenuName ? (
            <Avatar
              src={ele?.whiteImgSrc}
              alt={ele?.MenuType}
              style={{ width: "24px", height: "24px" }}
            />
          ) : (
<></>
          )}
        </ListItemIcon>
        {isSidebarOpenOrMinimize && (
          <StyledListItemText primary={ele?.MenuType} />
        )}
      </StyledListItemButton>
    );
  
    return !isSidebarOpenOrMinimize ? (
      <Tooltip title={ele?.MenuType || ""} placement="left" arrow>
        {listContent}
      </Tooltip>
    ) : (
      listContent
    );
  };
  
  export const SubMenuListContent = ({
    isSidebarOpenOrMinimize,
    subMenuItem,
  }: any) => {
    const listContent = (
      <StyledListItemButton
        disableRipple
        sx={{ borderRadius: "15px", padding: "16px!important" }}
      >
        <ListItemIcon
          sx={{
            minWidth: "auto !important",
          }}
        >
          {subMenuItem?.MenuName !== subMenuItem?.MenuType ? (
            <Box>
              {/* <SvgImage src={subMenuItem?.imgSrc} width="24px" height="24px" /> */}
            </Box>
          ) : (
            <Avatar
              src={subMenuItem?.whiteImgSrc}
              alt={subMenuItem?.MenuType}
              style={{ width: "24px", height: "24px" }}
            />
          )}
        </ListItemIcon>
        {isSidebarOpenOrMinimize && (
          <StyledListItemText
            primary={subMenuItem?.MenuType}
            sx={{ whiteSpace: "wrap" }}
          />
        )}
      </StyledListItemButton>
    );
  
    return !isSidebarOpenOrMinimize ? (
      <Tooltip title={subMenuItem?.MenuType || ""} placement="left" arrow>
        {listContent}
      </Tooltip>
    ) : (
      listContent
    );
  };
  