import React from 'react'
import AddOnOption from '../components/Add-ons/AddOnOption'

const AddOns = () => {
     const addOnOptions = ["Online service", "Larger storage", "Customizable Profile"];
     const addOnDescription = ["Access to multiplayer games", "Extra 1TB of cloud save", "Custom theme on your profile"];
     const addOnPrice = [1, 2, 2];

     return (
          <div className="p-4 pl-16 text-marine-blue text-xs">
               <h1 className="text-marine-blue text-2xl font-bold mb-2">Pick add-ons</h1>
               <p className="text-cool-gray font-light mb-4">Add-ons help enhance gaming experience.</p>
               {addOnOptions.map((eachOption, i) => {
                    return <AddOnOption key={i} addOnOption={eachOption} addOnDescription={addOnDescription[i]} addOnPrice={addOnPrice[i]} />
               })}
          </div>
     )
}

export default AddOns