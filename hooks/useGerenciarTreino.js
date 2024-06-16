import { useNavigation } from "@react-navigation/native";
import { deleteUserTreino, deleteTreino } from "../lib/data";

export const useGerenciarTreino = (token, userId) => {
  const navigation = useNavigation();

  const handleDelete = async (treinoId) => {
    try {
      const userTreinoResponse = await deleteUserTreino(userId, treinoId, token)

      if (userTreinoResponse.ok) {
        console.log("A associação do usuário com o treino foi removido");

        const response = await deleteTreino(treinoId, token);

        if (response.ok || response.status === 204) {
          console.log("Treino removido com sucesso.");
          navigation.navigate("Home", { reload: true });
        } else {
          console.error("Erro ao remover o treino: ", await response.json());
        }

      } else {
        console.error("Erro ao desfazer a associação do usuário com o treino", await userTreinoResponse.json());
      }
    } catch (error) {
      console.error("Erro ao excluir o treino: ", error);
    }
  }

  return handleDelete;
}