//import { decode } from "query-string";

/**
 * Creates query string from object
 *
 * @param {object} obj - object to create query from
 * @returns {string} - query string
 */

export const buildQuery = (obj: { [key: string]: any }): string => {
    const queryParams = Object.entries(obj).reduce((str, [key, value]) => {
      if (value === undefined) {
        return value;
      }
      return `${str}&${key}=${value}`;
    }, "");
  
    return !queryParams ? "" : queryParams?.substr(1);
  };
  
  /**
   * Creates object from query string
   *
   * @param {string} obj - query string or url
   * @returns {object} - object to created from query string
   */
  export const urlQueryToObj = (url: string) => {
    const queryString = url ? url.split("?")[1] : url;
  
    if (!queryString) {
      return {};
    }
  
    return queryString.split("&").reduce((acc: any, pair: any) => {
      const [key, value] = pair.split("=");
      acc[key] = decodeURIComponent(value || "");
      return acc;
    }, {});
  };
  
  /**
   * Generate filters key|value
   *
   * @param {string} obj - object
   * @returns {object} - object to created from query string
   */
  export const transformFilters = (
    input: Record<string, unknown>
  ): Record<string, unknown> => {
    const filters: string[] = [];
    const updatedParams: Record<string, unknown> = {};
  
    Object.entries(input).forEach(([key, value]) => {
      if (key.startsWith("filter_")) {
        const updatedKey = key.substring(7); // Remove 'filter_' prefix
        filters.push(`${updatedKey}|${value}`);
        //filters.push(encodeURI(`${updatedKey}|${value}`));
      } else {
        updatedParams[key] = value;
      }
    });
  
    if (filters.length > 0) {
      updatedParams["filters"] = filters.join(",");
    }
  
    return updatedParams;
  };
  