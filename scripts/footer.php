// this code makes it easy to update the footer on all pages in one centralized spot instead of using the Dreamweaver Tetmplates feature to propagate the date to all pages, this will mean that only 1 file (this one) will need to be changed whenever future updates to Privacy Policies and Terms of Use documents occurs


var str='';
str+='<div id="ftrWrap">';
str+='	<div id="ftrBg">';
str+='		<div id="ftrContent">';
str+='			<img src="http:\/\/media2.clubpenguin.com\/www\/images\/disney_games.jpg" id="disGame" alt="Disney.com Games" \/>';
str+='			<a href="http:\/\/www.truste.org\/ivalidate.php?url=www.clubpenguin.com&sealid=105" target="_blank"><img src="http:\/\/media2.clubpenguin.com\/www\/images\/truste_kids_seal.jpg" id="truste" alt="TRUSTe - Kids Privacy" \/><\/a>';
str+='			<a href="http:\/\/www.clubpenguin.com\/parents\/what_people_are_saying.htm" target="_self"><img src="http:\/\/media2.clubpenguin.com\/www\/images\/esrb_footer_blue.gif" id="esrb" alt="ESRB" \/><\/a>';
str+='			';
str+='			<!-- This is the Footer Navigation ********************** -->';
str+='			';
str+='			<ul>';
str+='				<li><a href="http:\/\/www.clubpenguin.com\/company\/index.htm">Company<\/a><\/li>';
str+='				<li>|<\/li>';
str+='				<li><a class="new" href="http:\/\/www.clubpenguin.com\/terms.htm">Terms of Use<\/a><span class="asterisk">*<\/span><\/li>';
str+='				<li>|<\/li>';
str+='				<li><a href="http:\/\/www.clubpenguin.com\/privacy.htm">Privacy Policy<\/a><!--<span class="asterisk">*<\/span>--><\/li>';
str+='				<li>|<\/li>';
str+='				<li><a href="http:\/\/support.clubpenguin.com\/help\/contact\/">Contact Us<\/a><\/li>';
str+='				<li>|<\/li>';
str+='				<li class="noMarg"><a href="http:\/\/www.clubpenguin.com\/sitemap.htm">Site Map<\/a><\/li>';
str+='			<\/ul>';
str+='			';
str+='			<p>Club Penguin&trade; Disney Online Studios Canada Inc. &copy; Disney. All rights reserved.<br \/><span class="asterisk">*<\/span> <span class="updated">Updated on December 1, 2010<\/span><\/p>';
str+='		<\/div>';
str+='	<\/div>';
str+='<\/div>';
document.write(str);