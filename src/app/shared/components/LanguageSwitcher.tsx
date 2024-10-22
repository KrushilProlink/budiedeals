import React from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("language", event.target.value);
  };

  return (
    <Select
      value={i18n.language}
      onChange={changeLanguage}
      MenuProps={{
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      }}
    >
      <MenuItem value="en" selected>
        English
      </MenuItem>
      <MenuItem value="fr">French</MenuItem>
      <MenuItem value="es">Spanish</MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;
