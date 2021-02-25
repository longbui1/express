const getValuesDeleteAll = document.getElementsByClassName('getValuesDeleteAll');


const values = [];
for (let i = 0; i < getValuesDeleteAll.length; i++) {
    values.push(getValuesDeleteAll[i].value);
}


async function deleteAllProducts() {
    if (confirm("Thao tác này sẽ xóa toàn bộ sản phẩm?")) {
        if (confirm('Xin hãy cân nhắc kỹ vì dữ liệu sẽ không thể phục hồi.Vẫn tiêp tục xóa? ')) {
            try {
                const data = {
                    "ids": values
                }
                const res = await axios.post('http://localhost:3000/products/deleteManyProducts', data)
                if (res.status == 200) {
                    location.reload()
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}