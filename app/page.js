import React from "react";
import Step from "./components/Step";
import PersonalInfoForm from "./components/PersonalInfoForm";

const content = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

const Page = () => {
  return (
    <div className="flex relative rounded-2xl bg-white p-2.5 pr-0 shadow-lg my-20 mx-[19rem]">
      <div>
        <img className="w-48" src="./assets/images/bg-sidebar-desktop.svg" alt="Sidebar Bg" />
        <div className="absolute top-3">
          {[1, 2, 3, 4].map((itemNo) =>
            <Step key={itemNo} itemNo={itemNo} content={content[itemNo - 1]} />
          )}
        </div>
      </div>
      <PersonalInfoForm />
    </div>
  );
}

export default Page;