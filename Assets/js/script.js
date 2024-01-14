var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu = document.getElementById('sidemenu');
var menuButton = document.getElementById('hbBtn');
function openMenu(){
    sideMenu.style.right = '0';
    menuButton.style.display = 'none';
}
function closeMenu(){
    sideMenu.style.right = '-200px';
    menuButton.style.display = 'block';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyAA3Z-xUvTbYNJFpSSc4xgJJkbszW7Gj3EeQ6MsesAJMpBXPc_6HxAqwSkA2Pv1waRGg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    var myForm = document.getElementById('form');
    myForm.reset();
    document.getElementById('success').style.display = 'block';
})
