import React from "react";

const SubscriptionCard = ({imageSrc, plan, subscriptionFee}) => {
     return (
          <div className="border p-3 border-light-gray rounded-lg pr-8 mr-2 cursor-pointer">
               <img src={imageSrc}></img>
               <p className="font-bold mt-10">{plan}</p>
               <p className="text-cool-gray">{subscriptionFee}</p>
               <p className="text-black w-20">2 months free</p>
          </div>
     );
}

export default SubscriptionCard;