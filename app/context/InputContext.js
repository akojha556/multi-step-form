import { createContext, useState } from "react";

const InputContext = createContext();

const InputProvider = ({ children }) => {
     const [inputValue, setInputValue] = useState({
          name: "",
          email: "",
          phoneNumber: ""
     });
     const [hasValue, setHasValue] = useState({
          name: true,
          email: true,
          phoneNumber: true
     });

     const handleChange = (evt) => {
          const { name, value } = evt.target;
          //Only Phone Number
          if (name === "phoneNumber" && (!/^\+?\d*$/.test(value) || value.length > 13)) {
               return;
          }
          //All inputs updates with valid value
          setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
     };

     return (
          <InputContext.Provider value={{ inputValue, setInputValue, hasValue, setHasValue, handleChange }}>
               {children}
          </InputContext.Provider>
     );
}

export { InputContext, InputProvider };