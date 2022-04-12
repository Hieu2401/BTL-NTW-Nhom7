var my_from = document.forms['loginForm']
console.log(my_from.hovaten.value);
var hovaten =my_from.hovaten

var uname = my_from.uname
var pass= my_from.pass
var data=[]
var acout= localStorage.getItem('my_pro')
if (acout!=null) {
    data= JSON.parse(acout)
}
console.log(data)

my_from.onsubmit = function(){
    var infor={
        hovaten: hovaten.value,
        username: uname.value,
        password: pass.value
    }
    if (infor.hovaten !=''&& infor.password!=''&&infor.username!='') {
        data.push(infor)
        var acc_json=JSON.stringify(data)
        localStorage.setItem('my_pro', acc_json)
        alert('bạn đã đăng ký thành công')
        location.reload()
        // location.assign('form.html')
        return false;
    }
    else{
        alert("Bạn chưa nhập đủ thông tin")
        hovaten.focus()
        return false
    }
    
}

var du_lieu=''

// for (var itemp of data) {
//     du_lieu += `<tr>
//     <td>
//          ${itemp.hovaten}
//     </td>
//     <td>
//         ${itemp.username}
//     </td>
//     <td>
//         ${itemp.password}
//     </td>
//     <td>
//     <th>
//     <button onclick="remove_local(itemp)">Xóa</button>
//                 </th>
//                 <th>
//                 <button onclick="add_local(itemp)">Sửa</button>
//                 </th>
//     </td>
//         </tr>`
// }
data.forEach(( itemp,key) => {
   
    du_lieu += `<tr>
    <td>
         ${itemp.hovaten}
    </td>
    <td>
        ${itemp.username}
    </td>
    <td>
        ${itemp.password}
    </td>
    <td>
  
    <button onclick="remove_local(${key})">  <i class="fa-solid fa-delete-left"></i></button>
    </td>
    <td>
   
   
    <button onclick="edit_local(${key})">  <i class="fa-solid fa-pen-to-square"> </i>  </button>
    </td>
        </tr>`
});

 var main_body=document.getElementById('main_body');

 main_body.innerHTML=du_lieu


function remove_local(remove_acc){

    let check_delete=confirm('Bank có muốn xóa ko')
    if (check_delete==true) {
        data.splice(remove_acc, 1);
        var ac_json = JSON.stringify(data);
        localStorage.setItem('my_pro',ac_json)
        location.reload();
    }
}
function edit_local(add_acc){
    // var item1 = data.filter(function(item){

    //     return item.username == add_acc.username;
    // });
   
    my_from.hovaten.value = data[add_acc].hovaten
    my_from.index.value = data[add_acc].hovaten
    // my_from.hovaten.focus()
    my_from.uname.value = data[add_acc].username
    my_from.index1.value = data[add_acc].username
    // my_from.uname.focus()
    my_from.pass.value = data[add_acc].password
    my_from.index2.value = data[add_acc].password

    data[add_acc].hovaten = my_from.hovaten.value;
    data[add_acc].username = my_from.uname.value;
    data[add_acc].password = my_from.pass.value;
    // // let check= confirm('ban co muon sửa')
    //     var acc_json=JSON.stringify(data)
    //     localStorage.setItem('my_pro', acc_json); 
    //     console.log( data[add_acc].hovaten)  
       
   
   
}
// function save(){
//     let index = my_from.index.value;
//     let itemIndex = data.findIndex(function(it) {
//         return it.hovaten == index;
//     })

//     console.log(itemIndex)
//     data[itemIndex].hovaten = my_from.hovaten.value;
//     console.log(my_from.hovaten.value)
//     var acc_json=JSON.stringify(data)
//     localStorage.setItem('my_pro', acc_json);
//     if (condition) {
        
//     }
//     // location.reload()
// }
btnupdate.onclick = function() {
    let index = my_from.index.value;
    let index1 = my_from.index1.value;
    // let itemIndex = data.findIndex(function(it) {
    //     return it.hovaten == index;
    // })
    let itemIndex = data.findIndex(function(it) {
        return it.username == index1;
    })
    console.log(itemIndex)
    if (itemIndex!=-1) {
        let choice= confirm('Bạn có muôn lưu ko')
        if (choice==true) {
            data[itemIndex].hovaten = my_from.hovaten.value;
            data[itemIndex].username = my_from.uname.value;
            data[itemIndex].password = my_from.pass.value;
        console.log(my_from.hovaten.value)
        var acc_json=JSON.stringify(data)
        localStorage.setItem('my_pro', acc_json);
       location.reload()
        }
    }else{
        alert('Bạn chưa chọn thành viên cần sửa!')
    }
   
}
btnupdelete.onclick = function(){
    let check_delete=confirm('Bạn có muốn xóa không?')
    if (check_delete==true) {
        data=[]
        var acc_json=JSON.stringify(data)
        localStorage.setItem('my_pro', acc_json);
        location.reload()
    }
   
}
// var index = data.findIndex(function(item){
//   return item.username == 'namphong';
// })
// console.log(data)
// data.splice(index, 1)
// var ac_json = JSON.stringify(data);

// localStorage.setItem('my_pro',ac_json)
// array.forEach(element => {
    
// });