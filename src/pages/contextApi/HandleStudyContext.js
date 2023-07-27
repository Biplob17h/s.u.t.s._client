import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthContext } from "./UserContext";

export const StudyContext = createContext();

const HandleStudyContext = ({ children }) => {
  // constex
  const { user } = useContext(AuthContext);

  // all state
  const [studies, setStudies] = useState([]);
  

  // all effect
  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/study?email=${user}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((s) => {
          const newArray = s?.studies;
          setStudies([...studies, ...newArray]);
        });
      });
      const studying = {
        email: user,
        studying : studies
      };
      fetch(`http://localhost:8080/api/v1/currentlyStudying`,{
        method : "PUT",
        headers : {
          'content-type' : "application/json"
        },
        body : JSON.stringify()
      });
  }, [user]);
  
  return <StudyContext.Provider>{children}</StudyContext.Provider>;
};

export default HandleStudyContext;
