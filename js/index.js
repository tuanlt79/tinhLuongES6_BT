document.getElementById("btnTinhLuong").onclick = (event) => {
    event.preventDefault();
    let nhanVien = {};
    let arrTd=[];
    let arrInput = document.querySelectorAll(".form-input input");
    let chucVu = document.getElementById("selectCV").value;
    
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
    //Tạo cột
    let contentTr = `<tr>`;
    for (let i = 0; i <arrTd.length; i++)
    {   contentTr+=`<td>${arrTd[i]}</td>`
    }
    contentTr+=`</tr>`
    document.querySelector('thead').innerHTML = contentTr;
    //duyệt đối tượng học viên


    let contentTrBody= '<tr>';
    for (let thuocTinh in nhanVien) {
        contentTrBody+=`<td>${nhanVien[thuocTinh]}</td>`
        nhanVien[thuocTinh];
    }
    contentTrBody + `</tr>`
    document.querySelector('tbody').innerHTML = contentTrBody;
};