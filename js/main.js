function hid()
{
	$('#loginbox').hide(200);
	$('#outshadl').hide(200);
}
function sho()
{
	$('#loginbox').show(200);
	$('#outshadl').show(200);
	$('input.loginp').val('');
}


$(document).ready(function(){
	var hidd = false;
	$('#loginbox').mouseenter(function(){hidd=false;}).mouseleave(function(){hidd=true;});
	$('#outshadl').click(function(){
		if(hidd)
		{
			$('#loginbox').hide(200);
			$('#outshadl').hide(200);
		}});

});