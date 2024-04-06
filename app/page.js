import React from "react";
import Step from "./components/step";

const page = () => {
  return (
    <div className="py-16 px-60">
      <div className="relative rounded-2xl bg-white p-2.5 shadow-lg">
        <img className="w-1/4" src="./assets/images/bg-sidebar-desktop.svg" />
        <div className="absolute top-3">
          <Step itemNo="1" content="YOUR INFO" />
          <Step itemNo="2" content="SELECT PLAN" />
          <Step itemNo="3" content="ADD-ONS" />
          <Step itemNo="4" content="SUMMARY" />
        </div>
      </div>
    </div>
  );
}

export default page;