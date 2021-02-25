const toEmail = document.getElementById('toEmail');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

const showBug = document.getElementById('showBug');

async function sendMail(event) {
    // if (toEmail.value !== "" || subject.value !== "" || message.value !== "") {
    //     const res=true;
    //     return res;
    // } else {
    //     showBug.innerHTML = "vui long nhap du du lieu."
    //     return event.preventDefault()
    // }

    try {
        if (toEmail.value !== "" || subject.value !== "" || message.value !== "") {
            return true;
        }
        const data = await data.response;
        console.log(data);
        if (data.status === 200) {
            console.log('oke')
        }
    } catch {
        showBug.innerHTML = "vui long nhap du du lieu."
        return event.preventDefault()
    }

}