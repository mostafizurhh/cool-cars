export const setJwtTokenApi = (user) => {
    const currentUser = {
        email: user.email
    }
    /* get or request JWT token from server */
    fetch('https://cool-car-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            /* local storage is easiest to store JWT token but not the best practice */
            localStorage.setItem('jwtToken', data.token);
        })
        .catch(e => console.error(e))
}