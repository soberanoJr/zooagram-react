const name_validator = (name) => {
    return name?.toString().length > 2;
}

const email_validator = (email) => {
    const email_string = email?.toString();
    return email_string.length >= 6 && email_string.includes('@') && email_string.includes('.');
}

const password_validator = (password) => {
    return password?.toString().length > 0;
}

const password_confirmation = (password, confirmation) => {
    return password_validator(password) && password === confirmation;
}

export {
    name_validator,
    email_validator,
    password_validator,
    password_confirmation,
}

console.log(
    name_validator('rumi'), 
    email_validator('r@u.mi'), 
    password_validator('r'),
    password_confirmation('r', 'r'),
);
