function submit() {
    if (inputone.value === '' || inputtwo.value === '' || inputthree.value === '' || inputfour.value === '' || inputfive.value === '' || inputsix.value === '' || inputseven.value === '') {
        alert("Please Fill In The Spaces")
     } else {
      alert("Are You Sure You Want To Proceed")
      window.location.href='introduction.html'

    }
}
