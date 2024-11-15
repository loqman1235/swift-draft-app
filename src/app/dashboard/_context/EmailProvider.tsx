"use client";

import { createContext, useContext, useEffect, useState } from "react";

type EmailContext = {
  emailUsage: number | null;
  setEmailUsage: React.Dispatch<React.SetStateAction<number | null>>;
};

export const EmailContext = createContext<EmailContext | null>(null);

export const EmailProvider = ({
  children,
  userId,
}: {
  children: React.ReactNode;
  userId: string;
}) => {
  const [emailUsage, setEmailUsage] = useState<number | null>(null);

  useEffect(() => {
    const fetchUsage = async () => {
      try {
        const response = await fetch(`/api/email-usage?userId=${userId}`);
        const data = await response.json();

        console.log(data);

        setEmailUsage(data.emailsLeft);
      } catch (error) {
        console.error("Error fetching email usage:", error);
      }
    };

    fetchUsage();
  }, [userId]);

  return (
    <EmailContext.Provider value={{ emailUsage, setEmailUsage }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmailContext = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmailContext must be used within a EmailProvider");
  }
  return context;
};
