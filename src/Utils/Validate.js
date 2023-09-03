export const CheckValidDAta = (email, password) => {
  const isemailvalid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const ispasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isemailvalid) return "E-mail is invalid";
  if (!ispasswordvalid) return "Password is either invalid or Wrong";
  return null;
};
