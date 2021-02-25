//using axios post API
async function handleSubmit(event) {
    event.preventDefault();
    // get value form product
    const newForm = document.getElementById('newForm');
    const name = document.getElementById('name').value;
    const image = document.getElementById('image').files[0];
    console.log(image + '-' + Date.now())
    //create formData
    const formData = new FormData();
    formData.append('brand_name', name);
    formData.append('image', image);
    //show validate form
    const result = document.getElementById('result');
    result.style.color = "red";
    //axios post product
    if (name == "" || image == "") {
        result.innerHTML = "vui lòng nhập đủ dữ liệu";
    } else {
        try {
            const res = await axios.post('https://tranducbo.herokuapp.com/brands', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (res.status === 200) {
                result.innerHTML = "Thêm sản phẩm thành công"
                newForm.reset();
            }
        } catch (err) {
            console.log(err);
        }
    }
}