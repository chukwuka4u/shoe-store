'use client'
import { useContext, createContext, ReactNode, useState, Dispatch, SetStateAction } from "react"
import { auth } from "@/lib/config/firebase/auth"
import { User } from "firebase/auth"

interface AuthContextProp {
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>
}

const AuthContext = createContext<AuthContextProp | null>(null)

export default function AuthContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(auth.currentUser)
    const value = {
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context)
        throw "use auth context only with AuthContextProvider"
    return context;
}


