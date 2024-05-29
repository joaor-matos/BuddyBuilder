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

export async function updateUserIMC(id, token) {
    try {
        const response = await fetch(`http://${baseUrl}:3000/users/${id}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },

        })
    } catch (error) {
        console.error("Erro ao atualizar o IMC do usuário: ", err);
    }
}