document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/status')
        .then(response => response.json())
        .then(data => {
            document.getElementById('api-message').innerText = 
                `> ${data.message} \n> Deployed At: ${data.deployedAt}`;
        })
        .catch(err => {
            document.getElementById('api-message').innerText = "> Error connecting to backend API.";
        });
});
