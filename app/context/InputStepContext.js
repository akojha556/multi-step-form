import { createContext, useContext, useState } from "react";
import { PlanAddOnContext } from "./PlanAddOnContext";

const InputStepContext = createContext();

const InputStepProvider = ({ children }) => {
     //Access selectedOption and isAddOnChecked from PlanAddOnContext
     const { selectedOption, isAddOnChecked } = useContext(PlanAddOnContext);
     //Stores input value and sets user typed info
     const [inputValue, setInputValue] = useState({
          name: "",
          email: "",
          phoneNumber: ""
     });

     //Checks whether input is empty or not
     const [hasValue, setHasValue] = useState({
          name: true,
          email: true,
          phoneNumber: true
     });

     //Handles input change when user types in input section
     const handleInputChange = (evt) => {
          const { name, value } = evt.target;
          //Sets phone number input section with only number
          if (name === "phoneNumber" && (!/^\+?\d*$/.test(value) || value.length > 13)) {
               return value;
          }
          //Input value state changes with new value
          setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
     };

     //Sets the step number
     const [stepCounter, setStepCounter] = useState(1);

     //Handles next step and verifies with logic
     const handleNextStep = () => {
          setHasValue({
               name: inputValue.name.length > 0,
               email: inputValue.email.length > 0,
               phoneNumber: inputValue.phoneNumber.length > 0
          });
          //Checks input values all 3
          if (stepCounter === 1 && (inputValue.name.length > 0 && inputValue.email.length > 0 && inputValue.phoneNumber.length > 0)) {
               setStepCounter(2);
               //Checks plan selected or not
          } else if (stepCounter === 2 && (selectedOption.Arcade || selectedOption.Advanced || selectedOption.Pro)) {
               setStepCounter(3);
               //Checks add on selected or not
          } else if (stepCounter === 3 && (isAddOnChecked.onlineService || isAddOnChecked.largerStorage || isAddOnChecked.customizableProfile)) {
               setStepCounter(4);
          }
     }

     //Handles previous step
     const handlePreviousStep = () => {
          if (stepCounter > 1) {
               setStepCounter(stepCounter - 1);
          }

     };

     return (
          <InputStepContext.Provider value={{ inputValue, setInputValue, hasValue, setHasValue, handleInputChange, stepCounter, setStepCounter, handleNextStep, handlePreviousStep }}>
               {children}
          </InputStepContext.Provider>
     );
}

export { InputStepContext, InputStepProvider };