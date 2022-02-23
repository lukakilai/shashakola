import { useState, createContext } from "react";

const EverythingContext = createContext();

function EverythingContextProvider({ children }) {
  const [yourName, setYourName] = useState("");
  const [yourSurname, setYourSurname] = useState("");
  const [theirName, setTheirName] = useState("");
  const [theirSurname, setTheirSurname] = useState("");
  const [msg, setMsg] = useState("");
  const [degree, setDegree] = useState("");
  const [hashedMsg, setHashedMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const context = {
    yourName,
    setYourName,
    yourSurname,
    setYourSurname,
    theirName,
    setTheirName,
    theirSurname,
    setTheirSurname,
    msg,
    setMsg,
    degree,
    setDegree,
    hashedMsg,
    setHashedMsg,
    copied,
    setCopied,
  };

  return (
    <EverythingContext.Provider value={context}>
      {children}
    </EverythingContext.Provider>
  );
}

export { EverythingContext, EverythingContextProvider };
