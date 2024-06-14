import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserById } from "../lib/data";
import { useRoute } from "@react-navigation/native"; 

export const useUserData = () => {
  const route = useRoute();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
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
    } catch (error) {
      console.error("Erro ao obter dados do usuário: ", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (route.params?.reload) {
      fetchData()
    }
  }, [route.params?.reload])

  return { user, token, userId, isLoading };
}