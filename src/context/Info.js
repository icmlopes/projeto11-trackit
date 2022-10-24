import React, { createContext, useState } from "react";

export const InfoContext = createContext();

export default function InfoProvider({ children }) {

    const [user, setUser] = useState({});
    const [newHabit, setNewHabit] =useState([])

    return (
        <InfoContext.Provider
            value={{
                user,
                setUser,
                newHabit,
                setNewHabit
            }}
        >
            {children}
        </InfoContext.Provider>
    )
}

