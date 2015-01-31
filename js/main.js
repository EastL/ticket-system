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
	var dats = {'name':$('#acount').val(),'passwd':$('#pwd').val()};
	$.ajax({
		type:"POST",
		url:"../node/web_login.js",
		data:{obj:dats},
		success:function(dat)
		{
			alert("LaLaLa " + dat);
		}
	});
	hid(200);
	$('#tirckbgm').hide();
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




