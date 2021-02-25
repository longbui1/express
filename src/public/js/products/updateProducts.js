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
    console.log(image)
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category_id').value;
    const category_id = category.split("|").pop();
    const category_name = category.split("|").shift();
    const brand = document.getElementById('brand_id').value;
    const brand_id = brand.split("|").pop();
    const brand_name = brand.split("|").shift();
    //create formData
    const formData = new FormData();
    formData.append('name', name);
    formData.append("image", image);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category_id', category_id);
    formData.append('category_name', category_name);
    formData.append('brand_id', brand_id);
    formData.append('brand_name', brand_name);
    formData.values();
    //show validate form
    const result = document.getElementById('result');
    result.style.color = "red";
    //axios post product
    if (name == "" || image == "" | price == "" || description == "" || category_id == "" || brand_id == "") {
        result.innerHTML = "vui lòng nhập đủ dữ liệu";
    } else {
        try {
            const res = await axios.patch('http://localhost:3000/products/' + id, formData, {
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