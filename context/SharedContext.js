import { createContext, useState } from "react";
import axios from "axios";

export const SharedContext = createContext();

export const SharedContextProvider = (props) => {
  const [selectedTeams, setSelectedTeams] = useState([]);

  const getSelectedTeams = () => {
    return [...new Set(selectedTeams)];
  };

  const placeOrder = async ({
    userAddress,
    orderItems,
    payment,
    transactionId,
  }) => {
    return axios.post("/api/admin/orders", {
      userAddress,
      orderItems,
      payment,
      transactionId,
    });
  };

  return (
    <SharedContext.Provider
      value={{ getSelectedTeams, setSelectedTeams, placeOrder }}
    >
      {props.children}
    </SharedContext.Provider>
  );
};
