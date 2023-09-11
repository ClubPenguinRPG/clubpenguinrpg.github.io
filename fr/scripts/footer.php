// this code makes it easy to update the footer on all pages in one centralized spot instead of using the Dreamweaver Tetmplates feature to propagate the date to all pages, this will mean that only 1 file (this one) will need to be changed whenever future updates to Privacy Policies and Terms of Use documents occurs


var str='';
str+='<div id="ftrWrap">';
str+='	<div id="ftrBg">';
str+='		<div id="ftrContent">';
str+='			<img src="http:\/\/media2.clubpenguin.com\/www\/images\/disney_games.jpg" id="disGame" alt="Disney.com Games" \/>';
str+='			<a href="http:\/\/www.bbbonline.org\/cks.asp?id=108062716439767" target="_blank"><img src="http:\/\/media2.clubpenguin.com\/www\/images\/bbb_new.gif" id="bbb" alt="BBB Accredited Business" \/><\/a><img src="http:\/\/media2.clubpenguin.com\/www\/images\/editorChoiceAward.jpg" id="ctr" alt="Children\'s Technology Review" \/>';
str+='			<!-- This is the Footer Navigation ********************** -->';
str+='			<ul>';
str+='				<li><a href="http:\/\/www.clubpenguin.com\/fr\/company\/index.htm">Entreprise<\/a><\/li>';
str+='				<li>|<\/li>';
str+='				<li><a class="new" href="http:\/\/www.clubpenguin.com\/fr\/terms.htm">Conditions d\'utilisation<\/a><span class="asterisk">*<\/span><\/li>';
str+='				<li>|<\/li>';
str+='				<li><a href="http:\/\/www.clubpenguin.com\/fr\/privacy.htm">Confidentialit&#233;<\/a><!--<span class="asterisk">*<\/span>--><\/li>';
str+='				<li>|<\/li>';
str+='				<li><a href="http:\/\/support.clubpenguin.com\/fr\/help\/contact\/">Nous contacter <\/a><\/li>';
str+='				<li>|<\/li>';
str+='				<li class="noMarg"><a href="http:\/\/www.clubpenguin.com\/fr\/sitemap.htm">Plan du site<\/a><\/li>';
str+='			<\/ul>';
str+='			<p>Club Penguin&trade; Disney Online Studios Canada Inc. &copy; Disney. Tous droits r&#233;serv&#233;s.<br \/><span class="asterisk">*<\/span> <span class="updated">Mise &#224; jour le 1 d&#233;cembre 2010<\/span><\/p>';
str+='		<\/div>';
str+='	<\/div>';
str+='<\/div>';
document.write(str);