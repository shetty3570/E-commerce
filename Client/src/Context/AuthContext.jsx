import { createContext, useContext, useEffect,useState } from "react";
export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
   const loggedUserJSON = localStorage.getItem("userLogged"); 
   if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
},
[]);
return(
    <AuthContext. Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>

);
};


// eslint-disable-next-line react-refresh/only-export-components 

export const useAuthContext = () => {
    const context = useContext (AuthContext);
    if(context === undefined) {
    
    throw new Error('useAuthContext must be used within an AuthProvider');
}
    return context
};