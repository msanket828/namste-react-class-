import { createContext } from "react";

const UserContext = createContext({
  user: {
   
    name: "test",
    email: "test@test.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
