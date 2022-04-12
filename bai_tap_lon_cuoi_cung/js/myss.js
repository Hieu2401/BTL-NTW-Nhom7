var my_from = document.forms['loginForm']
var hovaten = my_from.hovaten

var email = my_from.email
var phone = my_from.phone
var address = my_from.address
console.log(email)
var data_stro = []
var acc_stro = localStorage.getItem('my_cv')
console.log(phone)
if (acc_stro != null) {
    data_stro = JSON.parse(acc_stro)
}
console.log(data_stro)

my_from.onsubmit = function () {
    var infor = {
        hovaten: hovaten.value,
        email: email.value,
        phone: phone.value,
        address: address.value
    }
    if (infor.hovaten != '' && infor.password != '' && infor.username != '') {
        data_stro.push(infor)
        var acc_json = JSON.stringify(data_stro)
        localStorage.setItem('my_cv', acc_json)
        alert('bạn đãng thêm 1 thành viên thành công')
        location.reload()
        return false
    } else {
        alert("Bạn chưa nhập đủ thông tin")
        hovaten.focus()
        return false
    }

}
console.log(data_stro)

data = ''

data_stro.forEach((itemp, key) => {

    data += `<tr>
    <td>
         ${itemp.hovaten}
    </td>
    <td>
        ${itemp.email}
    </td>
    <td>
        ${itemp.phone}
    </td>
    <td>
        ${itemp.address}
    </td>
    <td>
   
    <button onclick="remove_local(${key})"><i class="fa-solid fa-delete-left"></i></button> 
</td>
<td>
   
<button onclick="edit_local(${key})"><i class="fa-solid fa-pen-to-square"></i></button>



</td>

        </tr>`
});
var main_body = document.getElementById('main_body')

main_body.innerHTML = data


function remove_local(delete_acc) {
    data_stro.splice(delete_acc, 1)
    var ac_json = JSON.stringify(data_stro)
    localStorage.setItem('my_cv', ac_json)
    location.reload()

}
function edit_local(edit_acc) {
    my_from.hovaten.value = data_stro[edit_acc].hovaten
    my_from.index.value = data_stro[edit_acc].hovaten

    my_from.email.value = data_stro[edit_acc].email
    my_from.index1.value = data_stro[edit_acc].email

    my_from.phone.value = data_stro[edit_acc].phone
    my_from.index2.value = data_stro[edit_acc].phone

    my_from.address.value = data_stro[edit_acc].address
    my_from.index3.value = data_stro[edit_acc].address

    data[edit_acc].hovaten = my_from.hovaten.value;
    data[edit_acc].email = my_from.email.value;
    data[edit_acc].phone = my_from.phone.value;
    data[edit_acc].address = my_from.address.value;

}
btnupdate.onclick = function () {
    // let index = my_from.index.value;
    let index1 = my_from.index1.value;
    let itemIndex = data_stro.findIndex(function (it) {
        return it.email == index1;
    })
    if (itemIndex != -1) {
        let choice = confirm('Bạn có muôn lưu ko')
        if (choice == true) {
            data[itemIndex].hovaten = my_from.hovaten.value;
            data[itemIndex].email = my_from.email.value;
            data[itemIndex].phone = my_from.phone.value;
            data[itemIndex].address = my_from.address.value;
            console.log(my_from.hovaten.value)
            let acc_json1 = JSON.stringify(data_stro)
            localStorage.setItem('my_cv', acc_json1);
            location.reload()
        }

    } else {
        alert('Bạn chưa chọn thành viên cần sửa!')
    }

}
btnupdelete.onclick = function () {
    let check_delete = confirm('Bạn có muốn xóa không?')
    if (check_delete == true) {
        data_stro = []
        let acc_json1 = JSON.stringify(data_stro)
        localStorage.setItem('my_cv', acc_json1);
        location.reload()
    }

}