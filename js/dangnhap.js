function kiemtra(){
    let dn = document.getElementById("dangnhap");
    if(dn.value == ""){
        alert("Bạn không được để trống mục này!");
        dn.focus();
        dn.style.backgroundColor = "red";
        return;
    }else{
        dn.style.backgroundColor = "white";
    }

    let mk = document.getElementById('mk');
    var ktramk = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/

    if(mk.value == ""){
        alert("Mật khẩu không được để trống!");
        mk.focus();
        mk.style.backgroundColor = "red";
        return;
    }else{
        if(!ktramk.test(mk.value)){
            alert("Mật khẩu của bạn sai định dạng!");
            mk.focus();
            mk.style.backgroundColor = "red";
            return;
        }else{
            mk.style.backgroundColor = "white";
        }
    }

}