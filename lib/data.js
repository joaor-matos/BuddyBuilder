const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export async function getUserById(id, token) {
    try {
        const response = await fetch(`http://${baseUrl}:3000/users/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.json();
    } catch (err) {
        console.error("Erro ao obter o usuário pelo Id: ", err);
    }
}

export const deleteUserTreino = async (userId, treinoId, token) => {
    const response = await fetch(`http://${baseUrl}:3000/users/${parseInt(userId)}/treinos/${parseInt(treinoId)}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    return response;
}

export const deleteTreino = async (treinoId, token) => {
    const response = await fetch(`http://${baseUrl}:3000/treino/${parseInt(treinoId)}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    });

    return response;
}