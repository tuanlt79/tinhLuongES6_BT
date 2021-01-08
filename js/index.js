document.getElementById("btnTinhLuong").onclick = (event) => {
    event.preventDefault();
    let nhanVien = {};
    let arrInput = document.querySelectorAll(".form-input input,select ");
    //duyệt for trên ary input
    let contentSpan = `<span>`;
    for (let i = 0; i < arrInput.length; i++) {
        // mỗi lần duyệt lấy ra 1 tagInput
        let tagInput = arrInput[i]; 
        //lấy ra id, value tag input
        let { id, value } = tagInput;
        nhanVien = { ...nhanVien, [id]: value };
        contentSpan += `<p class="text-warning">${tagInput.title} : ${tagInput.value}</p> `; 
    };
    let { selectCV, luongCoBan } = nhanVien;
    let tongLuong = (Number(selectCV) * Number(luongCoBan));
    contentSpan+=`<p class="text-warning">Tổng Lương: ${tongLuong}</p>`
    document.querySelector(".container .bg-dark form ").innerHTML = contentSpan;
};