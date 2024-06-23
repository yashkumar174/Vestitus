document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");
  const btnpopup = document.querySelector(".btnlogin");
  const closeIcon = document.querySelector(".icon-close");
  const popupWrapper = document.querySelector(".popup-wrapper");
  const mainContent = document.querySelector(".main");

  registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
  });

  loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });

  btnpopup.addEventListener("click", () => {
    popupWrapper.classList.add("active");
    mainContent.classList.add("blur");
  });

  closeIcon.addEventListener("click", () => {
    popupWrapper.classList.remove("active");
    mainContent.classList.remove("blur");
  });
});
