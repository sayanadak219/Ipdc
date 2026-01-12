const navbartoggler = document.querySelector(".navbar-toggler");
const collapse = document.querySelector(".collapse");

console.log(navbartoggler);

let open = false;

navbartoggler.addEventListener("click", () => {
  collapse.classList.toggle("active");
  if (open == true) {
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
    open = false;
  } else {
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    open = true;
  }
});
