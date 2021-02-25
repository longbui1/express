async function deleteProducts(event) {

    if (confirm("Mày có chắc là xóa không?")) {
        try {
            const res = await axios.delete('https://tranducbo.herokuapp.com/products/' + event)
            if (res.status == 200) {
                location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }
}