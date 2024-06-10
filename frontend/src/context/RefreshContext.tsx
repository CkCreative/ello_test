import React, { ReactNode, createContext, useContext, useState } from "react";

const RefreshContext = createContext<() => void>(() => {});

export const RefreshProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [refreshCounter, setRefreshCounter] = useState<number>(0);

  const refresh = () => setRefreshCounter((prevCounter) => prevCounter + 1);

  return (
    <RefreshContext.Provider value={refresh}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => {
  const context = useContext(RefreshContext);
  if (context === undefined) {
    throw new Error("useRefresh must be used within a RefreshProvider");
  }
  return context;
};
