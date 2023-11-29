import React, { useState, useEffect } from "react";
import LangJson from "./utils/lang.json";

const i18n = (lang, keyword) => LangJson[lang][keyword];

const App = () => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const handleChangeLanguage = (e) => setLang(e.target.value);

  return (
    <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
      <h1>{i18n(lang, "headName")}</h1>
      <p>{i18n(lang, "firstPara")}</p>
      <p>{i18n(lang, "secondPara")}</p>
      <p>{i18n(lang, "thirdPara")}</p>
      <p>{i18n(lang, "fourthPara")}</p>
      <select
        value={lang}
        onChange={handleChangeLanguage}
        style={{ textAlign: "center", margin: "5rem auto" }}
      >
        <option value="en">English</option>
        <option value="mr">Marathi</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  );
};

export default App;
