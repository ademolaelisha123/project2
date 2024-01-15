function proceed() {
    if (firstinput.value === '' || secondinput.value === '' || thirdinput.value === '' || fourthinput.value === '' || fifthinput.value === '') {
        alert("Please Fill In The Spaces")
} else {
        alert("Are You Sure You Want To Proceed")
        window.location.href="continue.html"
}
}