function get() {
    const username = document.getElementById('input').value;
    fetch(`https://cravatar.eu/helmavatar/${username}/512.png`)
        .then(response => {
            if (response.ok) {
                return response.blob();
            }
            throw new Error('Network response was not ok.');
        })
        .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            console.log(imageUrl);

        })
        .catch(error => {
            console.error('Error:', error);
        });
}
