$(document).ready(function () {



    $('#txtHeader').show(1500)

    $('#foto').hover(function () {
        $('#foto').attr('src', 'images/Gabs2.jpg')
    }, function () {
        $('#foto').attr('src', 'images/Gabs.jpg')
    })

})
$('input').focus(function () {

    $(this).attr('style', 'border:');


});
$('textarea').focus(function () {

    $(this).attr('style', 'border:');


});


//Form Validation and to console

var isValid = true
var users = []

function check() {
    uMessage.innerHTML = ''
    isValid = true
    var fName = $.trim($('#firstName').val())
    var lName = $.trim($('#lastName').val())
    var phone = $.trim($('#phone').val())
    var email = $.trim($('#email').val())
    var txt = $.trim($('#uText').val())



    var regName = /^[a-zA-Zא-ת ]+$/;
    var regPhone = /^[0-9-+]+$/;
    var regMail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (txt == '') {
        $('#uText').attr('style', 'border: 2px solid red');
        $('#uText').val('');
        $('#uText').attr('placeholder', '  *Please write your Message');
        isValid = false;
    }
    if (fName.length < 2 || fName.length > 40 || !regName.test(fName)) {

        $('#firstName').attr('style', 'border: 2px solid red');
        $('#firstName').val('');
        $('#firstName').attr('placeholder', '  *Enter your valid Name');
        isValid = false;

    }
    if (lName.length < 2 || lName.length > 40 || !regName.test(lName)) {

        $('#lastName').attr('style', 'border: 2px solid red');
        $('#lastName').val('');
        $('#lastName').attr('placeholder', '  *Enter your valid Last Name');
        isValid = false;
    }

    if (email.length < 5 || email.length > 40 || !regMail.test(email)) {

        $('#email').attr('style', 'border: 2px solid red');
        $('#email').val('');
        $('#email').attr('placeholder', ' *Enter your valid email ');
        isValid = false;
    }

    if (phone.length < 8 || phone.length > 10 || !regPhone.test(phone)) {

        $('#phone').attr('style', 'border: 2px solid red');
        $('#phone').val('');
        $('#phone').attr('placeholder', '*Enter your valid phone');
        isValid = false;
    }
    if (isValid == true) {
        var userInfo = {}


        userInfo.firstName = fName
        userInfo.lastName = lName
        userInfo.phone = phone
        userInfo.email = email
        userInfo.uText = txt
        userInfo.id = fName + lName
        console.log(userInfo)






        users.push(userInfo)
        console.log(users)
        uMessage.innerHTML = '<div class="alert alert-success border-success" role="alert">The form has been sent successfully!! Thanks!!</div>'


    } else {
        uMessage.innerHTML = '<div class="alert alert-danger border-danger" role="alert">Fail!! Please check again!</div>'

    }

}

//Video and nav scroll

let video = document.querySelector('video')
window.addEventListener('scroll', function () {
    let value = 1 + window.scrollY / -600
    video.style.opacity = value
})
window.addEventListener('scroll', function () {
    var header = document.querySelector('#menu')
    header.classList.toggle('sticky', window.scrollY > 0)
})

//Music Play
var sfxON = $("#sfxON")[0];
var sfxOFF = $("#sfxOFF")[0];
function playMusic() {
    var checkBox = document.getElementById("player");
    if (checkBox.checked == true) {
        music.play()
        music.muted = false;
        music.volume = 0.5
        $(".box").mouseenter(function () {
            sfxON.play();
        });

        $(".box").mouseleave(function () {
            sfxOFF.play();
        });
        sfxON.volume = 0.3
        sfxOFF.volume = 0.4
        soundOnWarning.style.display = "none"

    } else {
        sfxOFF.volume = 0
        sfxON.volume = 0
        music.muted = true;
        soundOnWarning.style.display = "block"
    }
}






