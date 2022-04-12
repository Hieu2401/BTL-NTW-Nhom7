var my_form = document.getElementById('my_from')
var username_error = document.getElementById('username_error')
var password_error = document.getElementById('password_error')
console.log(username_error)
// my_form.onsubmit = function(){
//     if (my_form.username.value == '') {
//         // alert('Tài khoản ko đc để trống')
//         username_error.innerHTML = 'Không đc để trống'
//         my_form.username.focus()
//         return false
//     }else{
//         username_error.innerHTML = ''

//     }
//      if (my_form.password.value == '') {
//         // alert('Tài khoản ko đc để trống')
//               password_error.innerHTML = 'Không đc để trống'
//              my_form.password.focus()
//              return false
//     }else{
//         password_error.innerHTML = ''

//     }
// }






var login = document.forms['loginForm']
var uname = login.uname
var pass = login.pass
console.log(login.uname.value)
var check_name = true
var check_pass = true
login.onsubmit = function () {
    if (my_form.username.value == '') {
        // alert('Tài khoản ko đc để trống')
        username_error.innerHTML = 'Không đc để trống'
        my_form.username.focus()
        check_name = false
        return false
    } else {
        username_error.innerHTML = ''
        check_name = true
    }
    if (my_form.password.value == '') {
        // alert('Tài khoản ko đc để trống')
        password_error.innerHTML = 'Không đc để trống'
        my_form.password.focus()
        check_pass = false
        return false
    } else {
        password_error.innerHTML = ''
        check_pass = true
    }
    if (check_pass = true && check_name == true) {
        var accout = []
        var acc_name = []
        var acc_json = localStorage.getItem('my_pro')
        if (acc_json != null) {
            accout = JSON.parse(acc_json)
        }
        // for (var key in accout) {
        //     console.log(accout[key].username)
        // }
        var n = 0;
        var check = false
        if (uname.value == 'admin' && pass.value == '123456') {
            // localStorage.setItem('my_login', uname.value)
            check = true
        }
        for (var item of accout) {
            if ((item.username == uname.value && item.password == pass.value) && (item.username != '' && item.password != '')) {
                console.log(item.username)
                check = true
            }
        }

        if (check == true) {
            // info = {
            //     usernamee: uname.value
            // }
            // acc_name.push(info)
            // var acc_name_json = JSON.stringify(acc_name)
            // localStorage.setItem('name', acc_name_json)
            alert('bạn đã đăng nhập thành công')
            location.assign('manager-user.html');
        }
        else {
            alert('bạn đã đăng nhập thất bại')
        }
        // if (uname.value == 'admin' && pass.value=='123456') {
        //     localStorage.setItem('my_login',uname.value)
        //     alert('Đã đăng nhập thành công')
        //     location.assign('create-account.html'); 
        // } else {
        //     alert('bạn đã đăng nhập thất bại')
        // }
        return false;

    }
}