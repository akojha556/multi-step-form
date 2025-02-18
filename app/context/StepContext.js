import { createContext, useState, useContext } from "react";
import { InputContext } from "./InputContext";
import { PlanContext } from "./PlanContext";

const StepContext = createContext();

const StepProvider = ({ children }) => {
     const [stepCounter, setStepCounter] = useState(1);
     const { inputValue, setHasValue } = useContext(InputContext);
     const { selectedOption } = useContext(PlanContext);

     //Next Step Button logic
     const handleNextStep = () => {
          setHasValue({
               name: inputValue.name.length > 0,
               email: inputValue.email.length > 0,
               phoneNumber: inputValue.phoneNumber.length > 0
          });

          if (inputValue.name.length > 0 && inputValue.email.length > 0 && inputValue.phoneNumber.length > 0) {
               if (stepCounter === 1) {
                    setStepCounter(2);
               } else if (stepCounter === 2 && (selectedOption.Arcade || selectedOption.Advanced || selectedOption.Pro)) {
                    setStepCounter(3);
               }
          }
     }
     //Previous Step Button logic
     const handlePreviousStep = () => {
          if (stepCounter > 1) {
               setStepCounter(stepCounter - 1);
          }

     };

     return (
          <StepContext.Provider value={{ stepCounter, setStepCounter, handleNextStep, handlePreviousStep }}>
               {children}
          </StepContext.Provider>
     );
}

export { StepContext, StepProvider };