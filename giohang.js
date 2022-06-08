function thanhtien(temp){
  
    document.firstElementChild
    let row= temp.parentElement.parentElement;
    let arrayTd = row.getElementsByTagName('td');
    arrayTd[4].firstElementChild.innerText =Number(arrayTd[2].innerText)*Number(temp.value);
    total();
}
function total(){
    let temp = 0;
    let tab = document.getElementById('idtable');
   
    let arrayMoney = tab.getElementsByTagName('span');
    for (let index = 0; index < (arrayMoney.length)-1; index++) {
         temp +=Number(arrayMoney[index].innerText);
        
    }
   
    arrayMoney[arrayMoney.length-1].innerText = ""+temp;

}

function addfn(btn){
    let tab = document.getElementById('cartsp');
    let row= btn.parentElement.parentElement.cloneNode(true);//
    let butn = row.lastElementChild.firstElementChild
    butn.innerText='Xóa';
    butn.setAttribute('onclick','deletefn(this)');
    tab.appendChild(row);
    
}
function deletefn(btn){
    console.log("đã gọi vào hàm delete");
    let tab = document.getElementById('cartsp');
    let row= btn.parentElement.parentElement;
    tab.removeChild(row);
}