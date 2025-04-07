import React from "react";
import UserContext from "./userContext";
// yha children ko curlybrace me wrap kiya h because property prop me aati h to direct accesss the chield hmne use wrap kiya we can also write here prop.children.... 
const UserContextProvider = ({children})=>{
    
    const [user, setUser] = React.useState();
    

    return(
        // ye values jo niche value prop me h ye mai bhej rha hu using userContext provider
        <UserContext.Provider value={{user,setUser}}> 
            {children}
        </UserContext.Provider>
    )
    

}

export default UserContextProvider;