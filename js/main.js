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
	//
	hid(200);
}
function createAccount()
{
	//
	hid(200);
}



$(document).ready(function(){
	var hidd = true;
	$('#loginbox').mouseenter(function(){hidd=false;}).mouseleave(function(){hidd=true;});
	$('#outshadl').click(function(){if(hidd)hid(200);});
	$(window.document).keydown(function(event){if(event.which == 27)hid(200);});
});