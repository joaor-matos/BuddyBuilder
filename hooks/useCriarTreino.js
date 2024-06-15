import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const useCriarTreino = (baseUrl, token, userId) => {
  const navigation = useNavigation();

  const [nomeTreino, setNomeTreino] = useState("");
  const [exercicios, setExercicios] = useState([{ nomeExercicio: "" }]);

  const addExercicio = () => {
    setExercicios([...exercicios, { nomeExercicio: "" }]);
  };

  const handleExercicioChange = (index, value) => {
    const newExercicios = [...exercicios];
    newExercicios[index].nomeExercicio = value;
    setExercicios(newExercicios);
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://${baseUrl}:3000/treino`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nomeTreino, exercicios }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Treino criado com sucesso: ", data);
        const treinoId = data.id;

        const userTreinoResponse = await fetch(`http://${baseUrl}:3000/users/${parseInt(userId)}/treinos/${parseInt(treinoId)}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({idUser: parseInt(userId), idTreino: parseInt(treinoId)}),
        });

        if (userTreinoResponse.ok) {
          console.log("Treino associado ao usuário com sucesso");
        } else {
          console.error("Erro ao associar usuário ao treino", await userTreinoResponse.json());
        }
        setNomeTreino("");
        setExercicios([{ nomeExercicio: "" }]);
        navigation.navigate("Home", { reload: true });
      } else {
        console.error("Erro ao criar treino: ", await response.json());
      }

    } catch (error) {
      console.error("Erro ao criar treino: ", error);
    }
  }

  const removeExercicio = () => {
    if (exercicios.length > 1) {
      setExercicios(exercicios.slice(0, -1));
    }
  };

  return {
    nomeTreino,
    setNomeTreino,
    exercicios,
    addExercicio,
    handleExercicioChange,
    handleSubmit,
    removeExercicio
  };
}