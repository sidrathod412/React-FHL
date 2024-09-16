import React, { useState } from 'react';

// Creating a new context with a default value
const UserContext = React.createContext<{ name: string; age: number } | undefined>(undefined);

// Wrapping the app with the provider
const AboutComponent = () => {
  const [user, setUser] = useState({ name: 'Alice', age: 25 });

  // Function to update the user
  const updateUser = () => {
    setUser({ name: 'Bob', age: 30 });
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <UserProfile />
        <button onClick={updateUser}>Update User</button>
      </div>
    </UserContext.Provider>
  );
};

// Consuming the context value
const UserProfile = () => {
  const user = React.useContext(UserContext);

  if (!user) {
    return <div>No user data available.</div>;
  }

  return <div>{user.name} is {user.age} years old.</div>;
};

export default AboutComponent;
