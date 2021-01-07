document.getElementById("btnTinhLuong").onclick = (event) => {
    event.preventDefault();
    let nhanVien = {};
    let arrSpan=[];
    let arrInput = document.querySelectorAll(".form-input input,select ");
   //duyệt for trên ary input
    for (let i = 0; i < arrInput.length; i++) {
        
        // mỗi lần duyệt lấy ra 1 tagInput
        let tagInput = arrInput[i];
        //lấy ra id, value tag input
        let { id, value,title }= tagInput;
        nhanVien = { ...nhanVien, [id]: value };
            //tạo span 
        arrSpan = [...arrSpan, title];
        console.log(arrSpan);
    };
    
    let { selectCV, luongCoBan } = nhanVien;
    let tongLuong = (Number(selectCV) * Number(luongCoBan));

    let contentSpan = ``;
    for (let i = 0; i < arrSpan.length; i++){
        contentSpan += `<p class="text-warning">${arrSpan[i]} :</p> `;
    }
    contentSpan += `<p class="text-warning">Tổng lương: ${tongLuong}</p>`;
    
    document.querySelector(".container .bg-dark form ").innerHTML = contentSpan;
   
  //duyệt lấy value của array nhanVien
  for (let thuocTinh in nhanVien) {
        
    let tagValue = nhanVien[thuocTinh];
    
    console.log(tagValue);
}

  
};