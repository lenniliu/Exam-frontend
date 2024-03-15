import { useState } from "react";

export default function useSignup(url) {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const signup = async (object) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(object),
            });
            const data = await response.json();

            if (!response.ok) {
                setError(data.error);
                throw new Error(data.error);
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data));
            setIsLoading(false);
            return true; 
          } catch (error) {
            setError(error.message);
            setIsLoading(false);
            return false; 
          }
        };

    return { signup, isLoading, error };
}
