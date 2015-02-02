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
		url:"/signup",
		data:{ user:$('#acount').val(), password:$('#pwd').val(),ttype:'login'}
	})
		.done(function(dat){
		hid(200);
		$('#tirckbgm').hide();
		window.location = "ticket.html";
		})
		.fail(function(){alert("帳號/密碼 錯誤");});
}
function createAccount()
{
	//
	$.ajax({
		type:"POST",
		url:"/signup",
		data:{ user:$('#acount').val(), password:$('#pwd').val(),ttype:'regist'}
	})
	.done(function(dat)
		{alert("註冊成功");
			console.log(dat);
			
			login();})
	.fail(function(){alert("帳號已被使用");});
}



$(document).ready(function(){
	var hidd = true;
	$('#loginbox').mouseenter(function(){hidd=false;}).mouseleave(function(){hidd=true;});
	$('#outshadl').click(function(){if(hidd)hid(200);});
	$(window.document).keydown(function(event){if(event.which == 27)hid(200);});
});




