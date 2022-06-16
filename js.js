const pass1 = document.querySelector("#user_password1");
const pass2 = document.querySelector("#user_password2");
const para = document.querySelector(".pval");
const borderError1 = document.querySelector(".error1");
const borderError2 = document.querySelector(".error2");
const btn = document.querySelector(".submit");
//btn.disabled = true;


document.addEventListener("keyup", e => {
    if (pass1.value !== pass2.value) {
        para.textContent = '*Passwords do not match'
        para.style.color = "red";
        borderError1.style.border = "1px solid red";
        borderError2.style.border = "1px solid red";
       // btn.disabled = true;

    } if (pass1.value == pass2.value && (pass1.value || pass2.value !== '')) {
        para.textContent = '✓Passwords match'
        para.style.color = "green";
        borderError1.style.border = "1px solid green";
        borderError2.style.border = "1px solid green";
       // btn.disabled = false;
    }
});








