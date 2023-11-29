import LangJson from "./lang.json";
export const i18n = (keyword) => {
  let lag = localStorage.getItem("lang");
    return LangJson[lag][keyword]
    
};
