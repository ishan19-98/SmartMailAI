import React, { useState } from "react";
import { AppContext } from "./AppContext";

export default function AppProvider({ children }) {
  const [generatedMailData, setGeneratedMailData] = useState(null);

  return (
    <AppContext.Provider value={{ generatedMailData, setGeneratedMailData }}>
      {children}
    </AppContext.Provider>
  );
}
