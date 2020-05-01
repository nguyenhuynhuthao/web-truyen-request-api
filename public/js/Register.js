$(document).ready(function () {
    //Sự kiện click cho button có id='btnRead'
    $('#btnRead').click(() => {
        //.val() ~> lấy giá trị trong thẻ html được chọn
        const reqURL = 'users/' + $('#inFullName2').val();
        //$.ajax({}); ~> ajax trong jQuey
        $.ajax({
            type: "GET", //Phương thức GET đối với reqURL
            url: reqURL,
            dataType: "json", //Dữ liệu trả về là json
            //Gửi request và nhập respone thành công
            //data là dữ liệu về từ server
            //thay vì viết function(data){} thì ta có thể viết (data)=>{}
            success: (data) => {
                //.html(content); ~> gán content vào val của thẻ html được chọn
                $('#result').html('Fullname: ' + data.fullname + '; Email: ' + data.email + '; Address: ' + data.address + '; Password: ' + data.password);
                $('#status').html(reqURL);
            }
        });
    });
 
    //Tạo mới cmt của user
    //Sự kiện click cho button có id = 'btnSend'
    $('#btnSend').click(() => {
        const reqURL = 'users/Send';
        //Tạo object
        var user = new Object();
        user.fullname = $('#inFullName').val();
        user.email = $('#inEmail').val();
        user.address = $('#inAddress').val();
        user.password = $('#inPassword').val();
    
        $.ajax({
            type: 'POST', //Phương thức GET đối với reqURL
            url: reqURL,
            dataType: 'text', //Dữ liệu trả về là text
            data: user, //Dữ liệu gửi lên server
            success: (data) => {
                $('#status').html('POST' + data);
            }
        });
    });
});