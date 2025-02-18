import { createContext, useState } from "react";

const PlanContext = createContext();

const PlanProvider = ({ children }) => {
     //Select Your Plan Section
     const [selectedOption, setSelectedOption] = useState({
          Arcade: false,
          Advanced: false,
          Pro: false,
     });

     const handleClick = (option) => {
          setSelectedOption({
               Arcade: false,
               Advanced: false,
               Pro: false,
               [option]: true,
          });
     };

     return (
          <PlanContext.Provider value={{ selectedOption, setSelectedOption, handleClick }}>
               {children}
          </PlanContext.Provider>
     )
}

export { PlanContext, PlanProvider };