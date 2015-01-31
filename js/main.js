//require('../node/web_login.js');


function hid(dt)
{
	$('#loginbox').hide(dt);
	$('#outshadl').hide(dt);
	$('input.loginp').val('');
}
function sho(dt)
{
	$('#loginbox').show(dt);
	$('#outshadl').show(dt);
	$('#acount').focus();
}

function login()
{
	//var dats = {name:$('#acount').val(),passwd:$('#pwd').val()};
	$.ajax({
		type:"POST",
		url:"/",
		data:'{"name":"'+$('#acount').val()+'","passwd":"'+$('#pwd').val()+'"}',
		success:function(dat)
		{
			if(dat == 'err')alert("帳號已被使用");
			else
			{
				hid(200);
				$('#tirckbgm').hide();
			}
		}
	});
}
function createAccount()
{
	//
	alert("註冊成功");
	login();
	hid(200);
}



$(document).ready(function(){
	var hidd = true;
	$('#loginbox').mouseenter(function(){hidd=false;}).mouseleave(function(){hidd=true;});
	$('#outshadl').click(function(){if(hidd)hid(200);});
	$(window.document).keydown(function(event){if(event.which == 27)hid(200);});
});




