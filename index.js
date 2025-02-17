// moving banner
const strip = document.querySelector(".moving-strip p");

const textWidth = strip.offsetWidth;
const screenWidth = window.innerWidth;
const duration = (screenWidth + textWidth) / 100;

strip.style.animation = `moveText ${duration}s linear infinite`;

// "Join the club" Form
const button = document.getElementById("joinButton");
const par = document.getElementById("par");
const title = document.getElementById("con2title");
const formPopup = document.getElementById("formPopup");
const formImg = document.getElementById("formImg");
const image = document.getElementById("bookgirl");


console.log(button);
console.log(par);
console.log(title);
console.log(formPopup);
console.log(formImg);
console.log(image);


button.onclick = function () {
    con2title.textContent = "Hey Girl!";
    par.textContent = "Please fill out the form below and press submit.";
    formPopup.style.display = 'block';
    button.style.display = 'none';
    formImg.style.display = 'block';
    image.style.display = 'none';
};

const memSignup = document.querySelector("#signUp");

memSignup.addEventListener('click', function() {
    alert('button clicked');
    const form = document.createElement('form');
    const titleSection = document.getElementById('title');
    titleSection.appendChild(form);

    // const label = document.createElement('label');
    // const input = document.createElement('input');

    // Name Field
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name'

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('placeholder', 'Enter your name');
    nameInput.required = true;

    //Email Field
    const emailLabel = document.createElement('label')
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email'

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('placeholder', 'Enter your email');
    emailInput.required = true;

    // Address Field
    const addressLabel = document.createElement('label')
    addressLabel.setAttribute('for', 'address');
    addressLabel.textContent = 'Address'

    const addressInput = document.createElement('input');
    addressInput.setAttribute('type', 'text');
    addressInput.setAttribute('id', 'address');
    addressInput.setAttribute('name', 'address');
    addressInput.setAttribute('placeholder', 'Enter your address');
    addressInput.required = true;

    // Trail Checkbox
    const trialLabel = document.createElement('label');
    trialLabel.setAttribute('for', 'trial');
    trialLabel.textContent = 'I want to start my 30-day free trial'
    
    const trialInput = document.createElement('input');
    trialInput.setAttribute('type', 'checkbox');
    trialInput.setAttribute('id', 'trail');
    trialInput.setAttribute('name', 'trial');
    trialInput.required = true
    
    // Append Child Node
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(addressLabel);
    form.appendChild(addressInput);
    form.appendChild(trialLabel);
    form.appendChild(trialInput);

    const submitButton = document.createElement('button');
    submitButton.textContent = "Submit"

    submitButton.addEventListener('click', function() {
        event.preventDefault(); //prevents the form from refreshing the page
        
        const userName = nameInput.value;
        document.getElementById('heading').textContent = `Welcome ${userName}! Here are all the perks you get for being a member...`;

        form.remove(); // remove form once submitted

        //return to main menu button
        const returnButton = document.createElement('button');
        returnButton.textContent = "Return to Main Menu";

        returnButton.addEventListener('click', function() {
            //show content before
            document.getElementById('heading').textContent = 'Books That Inspire'

            returnButton.style.display = 'none'
        });
        document.body.appendChild(returnButton)
    });
    
    form.appendChild(submitButton);


}); 

console.log(memSignup);
console.log(returnButton);


    













































// const input = document.querySelector('.form-input')
// const parent = input.parentNode;

// parent.style.backgroundColor = 'pink';
// console.log();






















// Form validation
// const form = document.querySelector('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const fields = form.querySelectorAll('input, select, textarea');
//     let isValid = true;

//     fields.forEach(field => {
//         if(field.tagName === 'Select') {
//             const selectedOption = field.options[field.selectedIndex];
//             if (selectedOption.disabled && selectedOption.value === '') {
//                 isValid = false;
//                 field.style.border = '2px solid red';
//             }else {
//                 field.style.border = '';
//             }
//         }
//         else if((field.tagName === 'input' || field.tagName === 'Textarea') && field.value.trim() === '' ) {
//           isValid = false;
//           field.style.border = '2px solid red'; 
//         } else {
//             field.style.border = '';
//         }
//     })
    
// })








// const favGenere = document.querySelector('favGenere');
// const option = document.querySelector('option')

// favGenere.append(option)

// console.log(favGenere);


