$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active');
        $('nav').toggleClass('active');
    })
    //Tạo hiệu ứng cho CRUD
    $('nav ul li a').click(function () {
        if ($('nav ul li a.active').attr('id') == 'crud') {
            toggleContainer();
        }
        $('nav ul li a.active').toggleClass('active');
        $(this).toggleClass('active');
        if ($(this).attr('id') == 'crud') {
            toggleContainer();
        }
    })
    var toggleContainer = function () {
        $(".container").animate({
            height: 'toggle'
        });
    }

    //Sự kiện click cho btnSearch
    $('#btnSearch').click(() => {
        const reqURL = 'users/' + $('#inFullName').val();
        $.ajax({
            url: reqURL,
            type: "GET",
            dataType: "json",
            success: (data) => {
                $('#result').html('Address: ' + data.address + '; Email: ' + data.email+ '; Password: ' + data.password );
                $('#status').html('GET' + reqURL);
            }
        });
    });
    //Sự kiện click cho btnRegister
    $('#btnRegister').click(() => {
        const reqURL = 'users/register';
        //Tạo object
        var user = new Object();
        user.fullName = $('#inFullName').val();
        user.address = $('#inAddress').val();
        user.email = $('#inEmail').val();
        user.password= $('#inPassword').val();
        $.ajax({
            url: reqURL,
            type: 'POST',
            dataType: 'text',
            data: user,
            success: (data) => {
                $('#status').html('POST' + data);
            }
        });
    });

});