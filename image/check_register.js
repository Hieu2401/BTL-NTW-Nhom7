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
    data.push(infor)
   
    var acc_json=JSON.stringify(data)
    localStorage.setItem('my_pro', acc_json)
    alert('bạn đã đăng ký thành công')
    location.reload()
    // location.assign('form.html')
    return false;
}

var du_lieu=''

for (var itemp of data) {
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
    <th>
    <button onclick="remove_local(itemp)">Xóa</button>
                </th>
                <th>
                <button onclick="add_local(itemp)">Sửa</button>
                </th>
    </td>
        </tr>`
}
// data.forEach(( itemp,key) => {
   
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
//      <button onclick="remove_local(itemp)">Xóa</button>
//     </td>
//         </tr>`
// });

 var main_body=document.getElementById('main_body');

 main_body.innerHTML=du_lieu


function remove_local(remove_acc){
var index = data.findIndex(function(item){
    return item.username == remove_acc.username;

})
    data.splice(index, 1);
    var ac_json = JSON.stringify(data);
    localStorage.setItem('my_pro',ac_json)
    location.reload();
}
function add_local(add_acc){
    var item1 = data.filter(function(item){

        return item.username == add_acc.username;
    });
   
    my_from.hovaten.value = item1[0].hovaten
    my_from.index.value = item1[0].hovaten
    
    my_from.hovaten.focus()
    
  
}

btnupdate.onclick = function() {
    let index = my_from.index.value;

    let itemIndex = data.findIndex(function(it) {
        return it.hovaten == index;
    })

    console.log(itemIndex)
    data[itemIndex].hovaten = my_from.hovaten.value;

    var acc_json=JSON.stringify(data)
    localStorage.setItem('my_pro', acc_json);
   location.reload()
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