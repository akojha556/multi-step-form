import { createContext, useState, useEffect } from "react";

const PlanAddOnContext = createContext();

const PlanAddOnProvider = ({ children }) => {
     //Plan Names
     const planOptionNames = ["Arcade", "Advanced", "Pro"];

     const [addOnSum, setAddOnSum] = useState(0);

     //Selected plan state (ckecks which plan is active)
     const [selectedOption, setSelectedOption] = useState({
          Arcade: false,
          Advanced: false,
          Pro: false,
     });

     //Plan prices
     const [planPrices, setPlanPrices] = useState({
          Arcade: 9,
          Advanced: 12,
          Pro: 15
     });

     //Tracks whether the user selecting a monthly plan or not
     const [isMonthly, setIsMonthly] = useState(true);

     //Stores the currently selected plan info
     const [planInfo, setPlanInfo] = useState({
          name: "Arcade",
          price: 9
     });

     //Handles plan selection and updates state accordingly
     const handlePlanSelect = (option) => {
          setSelectedOption({
               Arcade: false,
               Advanced: false,
               Pro: false,
               [option]: !selectedOption[option],
          });

          setPlanInfo((prevValue) => ({
               ...prevValue,
               name: option,
               price: planPrices[option]
          }));
     };

     //Stores which add-ons selected by the user
     const [isAddOnChecked, setIsAddOnChecked] = useState({
          onlineService: false,
          largerStorage: false,
          customizableProfile: false
     });

     //Stores Addon prices
     const [addOnPrices, setAddOnPrices] = useState({
          onlineService: 1,
          largerStorage: 2,
          customizableProfile: 2
     });

     const [selectedAddOns, setSelectedAddOns] = useState({});

     //Toggles add-on section whether plan checked or not
     const handleChecked = (option, price) => {
          setIsAddOnChecked((prevValue) => ({
               ...prevValue,
               [option]: !prevValue[option]
          }));

          setSelectedAddOns((prevValue) => {
               if (prevValue.hasOwnProperty(option)) {
                    const { [option]: _, ...remainingOption } = prevValue;
                    setSelectedAddOns(remainingOption);
               } else {
                    setSelectedAddOns({
                         ...prevValue,
                         [option]: price
                    });
               }
          });
     }

     useEffect(() => {
          let total = 0;
          Object.values(selectedAddOns).forEach(value => {
               total += value;
          });
          setAddOnSum(total);
          console.log(selectedAddOns, total);


     }, [selectedAddOns])

     return (
          <PlanAddOnContext.Provider
               value={{
                    planOptionNames,
                    addOnSum,
                    selectedOption,
                    setSelectedOption,
                    planPrices,
                    setPlanPrices,
                    isMonthly,
                    setIsMonthly,
                    planInfo,
                    setPlanInfo,
                    handlePlanSelect,
                    isAddOnChecked,
                    setIsAddOnChecked,
                    addOnPrices,
                    setAddOnPrices,
                    selectedAddOns, 
                    setSelectedAddOns,
                    handleChecked
               }}>
               {children}
          </PlanAddOnContext.Provider>
     )
}

export { PlanAddOnContext, PlanAddOnProvider };