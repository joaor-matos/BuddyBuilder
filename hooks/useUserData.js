import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserById } from "../lib/data";

export const useUserData = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      const storedUserId = await AsyncStorage.getItem("userId");

      if (storedUserId && storedToken) {
        setToken(storedToken);
        setUserId(storedUserId)
        try {
          const response = await getUserById(parseInt(storedUserId), storedToken)
          setUser(response);
        } catch (error) {
          console.error("Erro ao obter dados do usuário: ", error);
        }
      } else {
        console.log("ID do usuário não encontrado no AsyncStorage");
      }
    }
    fetchData();
  }, []);

  return {user, token, userId}
}