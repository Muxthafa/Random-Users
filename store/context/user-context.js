import { createContext, useState } from "react";

export const UsersContext = createContext({
  users: [],
  addUsers: (users) => {},
});

function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  function addUsers(users) {
    setUsers(users);
  }

  const value = {
    users: users,
    addUsers: addUsers,
  };
  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

export default UsersContextProvider;
