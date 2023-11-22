let tablinks = document.querySelectorAll('.tab-links');
let tabcontents = document.querySelectorAll('.tab-contents');

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')

}


let sidemenu = document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right = '0'
}
function closemenu(){
    sidemenu.style.right = '-200px'
}

function sendEmail(){
    Email.send({
        SecureToken :"e6831abc-df01-4c9a-ae91-8a700ce87673",
        To : 'gamingnoob097@gmail.com',
        From : document.getElementById('email').value,
        Subject : "Portfolio Contact Form Enquiry",
        Body : "Name: " + document.getElementById('name').value + "<br> Email: " + document.getElementById('email').value + "<br> Message: " + document.getElementById('message').value
    }).then(
      message => alert(message)
    );
}