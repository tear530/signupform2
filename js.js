const pass1 = document.querySelector("#user_password1");
const pass2 = document.querySelector("#user_password2");
const fname = document.querySelector("#first_name");
const fnameV = document.querySelector(".nameVal");
const snameV = document.querySelector(".sNameVal");
const emailval = document.querySelector(".emailval");
const phoneVal = document.querySelector(".phoneVal");
const sname = document.querySelector("#last_name");
const email = document.querySelector("#user_email");
const phone = document.querySelector("#amount");
const para = document.querySelector(".pval");
const para2 = document.querySelector(".pval2");
const borderError1 = document.querySelector(".error1");
const borderError2 = document.querySelector(".error2");
const btn = document.querySelector(".submit");
btn.disabled = true;
const regex = /\S+@\S+\.\S+/;
const regex2 = /^[0-9]{11}$/;


document.addEventListener("keyup", e => {
    if (fname.value !== '') {
        fnameV.textContent = '✓Valid'
        fnameV.style.color = "green";

    } if (sname.value !== '') {
        snameV.textContent = '✓Valid'
        snameV.style.color = "green";

    } if (fname.value == '') {
        fnameV.textContent = '*Must be filled'
        fnameV.style.color = "red";

    } if (sname.value == '') {
        snameV.textContent = '*Must be filled'
        snameV.style.color = "red";

    } if ((regex.test(email.value)) == true) {
        emailval.textContent = '✓Valid'
        emailval.style.color = "green";

    } if ((regex.test(email.value)) == false) {
        emailval.textContent = '*Incorrect format'
        emailval.style.color = "red";

    } if ((regex2.test(phone.value)) == false) {
        phoneVal.textContent = '*Must be 11 digits no spaces'
        phoneVal.style.color = "red";  

    } if ((regex2.test(phone.value)) == true) {
        phoneVal.textContent = '✓Valid'
        phoneVal.style.color = "green";

    } if ((pass1.value !== pass2.value)) {
        para.textContent = '*Passwords do not match'
        para.style.color = "red";
        borderError1.style.border = "1px solid red";
        borderError2.style.border = "1px solid red";
        //btn.disabled = true;

    } if (pass1.value == pass2.value && (pass1.value || pass2.value !== '')) {
        para.textContent = '✓Passwords match'
        para.style.color = "green";
        para2.textContent = '✓Passwords match'
        para2.style.color = "green";
        borderError1.style.border = "1px solid green";
        borderError2.style.border = "1px solid green";


    } if ((pass1.value == pass2.value) && (pass1.value || pass2.value !== '') && (fname.value !== '') && (sname.value !== '') && (regex2.test(phone.value)) == true && ((regex.test(email.value)) == true)) {
        btn.disabled = false;
        
    }
});


// \S+@\S+\.\S+








