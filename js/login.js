let user = prompt('Please state your username: ')
let pass = prompt('Now your personal password: ')

console.log(user);
console.log(pass);

if (user == 'wesker' && pass == '1234') {
    alert('Access granted - Welcome back Dr. Wesker');
    //función del JS para llevar al user a otra pagina
    window.location.href = '../pages/admin.html'
} else {
    alert('Invalid credentials')
    location.href = '../pages/error.html'
}