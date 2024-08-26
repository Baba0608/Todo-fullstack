import { createContext, useContext } from "react";

const userContext = createContext({
  userName: "Default",
  addUserName: () => {},
});

export const useUserContext = () => useContext(userContext);

export default userContext;
