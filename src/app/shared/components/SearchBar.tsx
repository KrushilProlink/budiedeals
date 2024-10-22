import { useCallback, useEffect, useMemo, useState } from "react";
import { TextField } from "@mui/material";
import { debounce } from "lodash";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

import {
  useLocationQuery,
  useLocationQuerySet,
} from "../util/useLocationQuery";

export interface SearchProps {
  onSearch?: (text: string | undefined) => void;
  placeholder?: string;
  isNeedQueryParams?: boolean;
}

export const SearchBar: React.FC<SearchProps> = ({
  onSearch,
  placeholder,
  isNeedQueryParams = true,
}) => {
  const searchParams = useLocationQuery();
  const setQuery = useLocationQuerySet();
  const [searchText, setSearchText] = useState<string | undefined>(
    searchParams.textSearch || ""
  );

  const changeSearchQuery = useCallback(
    (value?: string) => {
      if (isNeedQueryParams) {
        searchParams.page = "1";
        if (value) {
          searchParams.textSearch = value;
        } else {
          delete searchParams.textSearch;
        }
        setQuery(searchParams);
      }

      if (typeof onSearch === "function") {
        onSearch(value);
      }
    },
    [searchParams, onSearch]
  );

  const debouncedInput = useMemo(
    () => debounce(changeSearchQuery, 800),
    [changeSearchQuery]
  );

  useEffect(() => {
    return debouncedInput.cancel();
  }, [debouncedInput]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      setSearchText(value);
      debouncedInput(value);
    },
    [debouncedInput]
  );

  const handleClearClick = () => {
    setSearchText("");
    debouncedInput("");
  };

  return (
    <TextField
      placeholder={placeholder}
      fullWidth
      value={searchText || ""}
      onChange={handleChange}
      size="small"
      InputProps={{
        startAdornment: (
          <SearchIcon style={{ marginRight: "5px", color: "#727272" }} />
        ),
        endAdornment: searchText && (
          <IconButton onClick={handleClearClick} edge="end" size="small">
            <ClearIcon />
          </IconButton>
        ),
      }}
    />
  );
};
