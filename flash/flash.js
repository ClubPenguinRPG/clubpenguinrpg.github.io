// JavaScript Document

function RunFlash(path,width,height,bgcolour)
{

	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+width+'" height="'+height+'">\n');
	document.write('<param name="movie" value="'+path+'">\n');
	document.write('<param name="quality" value="high">\n');
	document.write('<param name="wmode" value="transparent">\n');
	document.write('<param name="menu" value="false">\n');
	document.write('<param name="bgcolor" value="'+bgcolour+'">\n');
	document.write('<param name="scale" value="noborder">');
	document.write('<embed src="'+path+'" width="'+width+'" height="'+height+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" menu="false" bgcolor="'+bgcolour+'" scale="noborder"></embed>\n');
	document.write('</object>\n');

}