import React, {
  Children,
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
  const [studyNumber, setStudyNumber] = useState(0);
  const rowStudies = [];

  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/study?email=${user}`)
      .then((res) => res.json())
      .then((data) => {
        
      });
  }, [user, studyNumber]);
  
  return <StudyContext.Provider>{children}</StudyContext.Provider>;
};

export default HandleStudyContext;
