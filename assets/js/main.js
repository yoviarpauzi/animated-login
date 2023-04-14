/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) => {
  const input = document.getElementById(loginPass),
    iconEye = document.getElementById(loginEye);

  iconEye.addEventListener("click", () => {
    // Change password to text
    if (input.type === "password") {
      // swith input type from password to text
      input.type = "text";

      // change icon eye
      iconEye.classList.remove("ri-eye-off-line");
      iconEye.classList.add("ri-eye-line");
    } else {
      // switch input type from text to password
      input.type = "password";

      // change icon eye
      iconEye.classList.remove("ri-eye-line");
      iconEye.classList.add("ri-eye-off-line");
    }
  });
};

showHiddenPass("login-pass", "login-eye");
