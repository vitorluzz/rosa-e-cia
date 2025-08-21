document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
    const data = await response.json();

    if (data.length > 0) {
      document.getElementById("msg").textContent = "✅ Login realizado com sucesso!";
      // aqui você poderia salvar o usuário no localStorage, por exemplo:
      localStorage.setItem("user", JSON.stringify(data[0]));
    } else {
      document.getElementById("msg").textContent = "❌ Usuário ou senha inválidos!";
    }
  } catch (error) {
    console.error("Erro:", error);
    document.getElementById("msg").textContent = "⚠️ Erro ao conectar com o servidor!";
  }
});
