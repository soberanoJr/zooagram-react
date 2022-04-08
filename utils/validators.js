const nameValidator = (name) => {
    return name?.toString().length > 2;
}

const emailValidator = (email) => {
    const email_string = email?.toString();
    return email_string.length >= 6 && email_string.includes('@') && email_string.includes('.');
}

const passwordValidator = (password) => {
    return password?.toString().length > 2;
}

const passwordConfirmationValidator = (password, confirmation) => {
    return passwordValidator(password) && password === confirmation;
}

export {
    nameValidator,
    emailValidator,
    passwordValidator,
    passwordConfirmationValidator,
}