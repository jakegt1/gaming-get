function toggleVisible(packageName)
{
//	$('#'+packageName+' .info:visible').animate({left: '+=200px'}, 'slow');
	var infoArea = $('#'+packageName+' .info');
	if($(jq(packageName)+' .info').is(':visible'))
	{
		$(jq(packageName)+' .info').slideUp();
	}
	else
	{
		$(jq(packageName)+' .info').slideDown();
	}
}

function jq(myid) {
	return '#' + myid.replace(/(:|\.)/g,'\\$1');
}
