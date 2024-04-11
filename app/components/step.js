import React from "react";

const Step = (props) => {
     return (
          <div className="flex items-center ml-6 mt-6 text-xs">
               <p className="flex justify-center items-center w-7 h-7 rounded-full mr-2 font-semibold border-light-blue border text-light-blue active:bg-light-blue">{props.itemNo}</p>
               <div>
                    <p className="text-cool-gray font-light">STEP {props.itemNo}</p>
                    <p className="font-medium text-white">{props.content}</p>
               </div>
          </div>
     );
}

export default Step;