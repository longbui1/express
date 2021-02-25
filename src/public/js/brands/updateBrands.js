//get id product in URL
const url = window.location.pathname;
const id = url.substring(url.lastIndexOf('/') + 1);
//update product
async function updateProduct(event) {
    event.preventDefault();
    // get value form product
    const newForm = document.getElementById('newForm');
    const name = document.getElementById('name').value;
    const image = document.getElementById('image').files[0];
    //create formData
    const formData = new FormData();
    formData.append('brand_name', name);
    formData.append("image", image);
    formData.values();
    //show validate form
    const result = document.getElementById('result');
    result.style.color = "red";
    //axios post product
    if (name == "" || image == "" ) {
        result.innerHTML = "vui lòng nhập đủ dữ liệu";
    } else {
        try {
            const res = await axios.patch('http://localhost:3000/brands/' + id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (res.status === 200) {
                result.innerHTML = "Sửa sản phẩm thành công"
                newForm.reset();
            }
        } catch (err) {
            console.log(err);
        }
    }
}
