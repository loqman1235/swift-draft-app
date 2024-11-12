"use client";
import { useState } from "react";
import CreateEmailForm from "./CreateEmailForm";
import ReplyToEmailForm from "./ReplyToEmailForm";
// import { CheckIcon, CopyIcon } from "lucide-react";

const EmailTabNavigation = () => {
  const [activeTab, setActiveTab] = useState<"compose" | "reply">("compose");
  const [emailOutput, setEmailOutput] = useState<string | null>(null);
  // const [copy, setCopy] = useState(false);

  const handleEmailGenerated = (generatedEmail: string) => {
    setEmailOutput(generatedEmail);
  };

  // const handleCopy = () => {
  //   if (emailOutput) {
  //     navigator.clipboard.writeText(emailOutput || "");
  //     setCopy(true);
  //     setTimeout(() => {
  //       setCopy(false);
  //     }, 2000);
  //   }
  // };

  return (
    <div className="flex flex-col gap-5">
      <div className="relative overflow-hidden rounded-lg shadow">
        <div className="relative flex h-[60px] w-full items-center overflow-hidden rounded-tl-lg rounded-tr-lg bg-muted">
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
        <div className="rounded-lg bg-foreground p-5">
          {activeTab === "compose" ? (
            <CreateEmailForm onEmailGenerated={handleEmailGenerated} />
          ) : (
            <ReplyToEmailForm />
          )}
        </div>
      </div>

      {emailOutput && (
        <div className="flex flex-col gap-2 rounded-md bg-foreground p-5 shadow">
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: emailOutput }}
          />
        </div>
      )}
    </div>
  );
};

export default EmailTabNavigation;
