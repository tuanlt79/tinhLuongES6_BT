document.getElementById("btnTinhLuong").onclick = (event) => {
    event.preventDefault();
    let nhanVien = {};
    let arrTd=[];
    let arrInput = document.querySelectorAll(".form-input input,select ");
   //duyệt for trên ary input
    for (let i = 0; i < arrInput.length; i++) {
        
        // mỗi lần duyệt lấy ra 1 tagInput
        let tagInput = arrInput[i];
        //lấy ra id, value tag input
        let { id, value,title }= tagInput;
        nhanVien = { ...nhanVien, [id]: value };
            //tạo thead cho tr
        arrTd = [...arrTd, title];
    };
    let { selectCV, luongCoBan } = nhanVien;
    let tongLuong = (Number(selectCV) * Number(luongCoBan));
    // console.log(tongLuong);
    //Tạo cột
    let contentTr = `<tr>`
    for (let i = 0; i <arrTd.length; i++)
    {
        contentTr += `<td class="text-warning">${arrTd[i]}</td> `
    }
    contentTr+=`<td class="text-warning">Tổng Lương</td>`
    contentTr += `</tr>`
    document.querySelector('thead').innerHTML = contentTr;

    //duyệt đối tượng nhân viên
    let contentTrBody= '<tr>';
    for (let thuocTinh in nhanVien) {
        contentTrBody+=`<td>${nhanVien[thuocTinh]}</td>`
        nhanVien[thuocTinh];
    }
    contentTrBody+=`<td>${tongLuong}</td>`
    contentTrBody + `</tr>`
    document.querySelector('tbody').innerHTML = contentTrBody;
};