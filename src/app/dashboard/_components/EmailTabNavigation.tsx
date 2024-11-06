"use client";
import { useState } from "react";
import CreateEmailForm from "./CreateEmailForm";
import ReplyToEmailForm from "./ReplyToEmailForm";

const EmailTabNavigation = () => {
  const [activeTab, setActiveTab] = useState<"compose" | "reply">("compose");

  return (
    <div className="relative overflow-hidden rounded-lg shadow">
      <div className="relative flex h-[60px] w-full items-center overflow-hidden rounded-tl-lg rounded-tr-lg bg-primary/10">
        <div
          className={`absolute left-0 h-full w-1/2 rounded-t-lg bg-foreground transition duration-300 ${activeTab === "reply" ? "translate-x-full" : "translate-x-0"}`}
        ></div>
        <div
          onClick={() => setActiveTab("compose")}
          className="relative z-10 flex h-full flex-1 cursor-pointer items-center justify-center font-medium"
        >
          Compose a new email
        </div>
        <div
          onClick={() => setActiveTab("reply")}
          className="relative z-10 flex h-full flex-1 cursor-pointer items-center justify-center font-medium"
        >
          Write a reply
        </div>
      </div>
      <div className="rounded-lg bg-foreground p-10">
        {activeTab === "compose" ? <CreateEmailForm /> : <ReplyToEmailForm />}
      </div>
    </div>
  );
};

export default EmailTabNavigation;
