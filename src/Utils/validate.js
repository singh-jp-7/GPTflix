// Validates Email and Password fields
export const checkValidData = (name, email, password) => {
    const isnamevalid = name && name?.length > 3;
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isnamevalid && name) return "Name should be greater than 3 characters!"
    if (!isEmailValid) return "Email is not valid!";
    if (!isPasswordvalid ) return "Password is not valid!"

    return null;

}