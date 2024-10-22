import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { urlQueryToObj } from "./buildQuery";

export const useLocationQuery = () => {
  const { search } = useLocation();

  return urlQueryToObj(search.toString());
};

export const useLocationQueryValue = (key: any) => {
  return useLocationQuery()[key];
};

export const useLocationQuerySet = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return useCallback(
    (query: any) => {
      const queryString = Object.keys(query)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join("&");

      navigate(`${pathname}${query ? `?${queryString}` : ""}`);
    },
    [pathname, navigate]
  );
};

export const useLocationQueryAdd = () => {
  const obj = useLocationQuery();
  const setQuery = useLocationQuerySet();

  return useCallback(
    (key: any, value: any) => {
      const newObj = { ...obj };

      if (value) {
        newObj[key] = value;
      } else {
        delete newObj[key];
      }

      setQuery(newObj);
    },
    [obj, setQuery]
  );
};
