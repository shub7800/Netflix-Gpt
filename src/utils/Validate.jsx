export const checkValidDate = ({ email, password , name}) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
    email);

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const isNameValid = /^[A-Za-z ]{2,50}$/.test(name)


  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  if(!isNameValid) return "Enter correct Name"

  return null;
};
