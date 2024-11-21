function search() {
    const input = document.getElementById('searchBar').value.trim();
    const keyword = input.replace('#', ''); // Remove o # se for digitado.

    // Redireciona para a página correspondente.
    if (keyword) {
        window.location.href = `produtos/${keyword}.html`;
    } else {
        alert('Por favor, digite um termo válido como #escova.');
    }
}
