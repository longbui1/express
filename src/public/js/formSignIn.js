const inputs = document.querySelectorAll(".input")


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});

//login admin

const form = document.querySelector('form')

form.addEventListener("submit", async(event) => {
    // event.preventDefault()
    //get data
    const userName = form.user_name.value
    const password = form.password.value

    try {
        const res = await fetch('https://tranducbo.herokuapp.com/rhino-admin', {
            method: 'POST',
            body: JSON.stringify({
                "user_name": userName,
                "password": password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        if (data.admin) {
            location.assign('https://tranducbo.herokuapp.com/dashboard')
        }
    } catch (err) {
        console.log(err)
    }
})