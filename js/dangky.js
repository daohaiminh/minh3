function kiemtra(){
    let email = document.getElementById("email");
    let dienthoai = document.getElementById('dienthoai');
    let mk = document.getElementById('mk');

    var ktemail = /^\w(\.?[\w+])*@\w(\.?[\w+])*\.[a-z]{2,4}$/i;
    if(email.value == ""){
        alert("Email không được để trống!");
        email.focus();
        email.style.backgroundColor = "red";
        return;
    }else{
        if(!ktemail.test(email.value)){
            alert("Bạn không nhập đúng định dạng email!");
            email.focus();
            email.style.backgroundColor = "red";
            return;
        }else{
            email.style.backgroundColor = "white";
        }
    }

    if(dienthoai.value == ""){
        alert("Số điện thoại không được để trống!");
        dienthoai.focus();
        dienthoai.style.backgroundColor = "red";
        return;
    }else{
        var ktradienthoai = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
        if(!ktradienthoai.test(dienthoai.value)){
            alert("Bạn nhập sai số điện thoại!");
            dienthoai.focus();
            dienthoai.style.backgroundColor = "red";
            return;
        }else{
            dienthoai.style.backgroundColor = "white";
        }
    }

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