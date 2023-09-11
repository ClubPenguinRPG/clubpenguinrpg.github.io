// Adapted from http://home.arcor.de/michaels.interface/tutors/javascript/show.hide/
function ShowHide(id, visibility, caller)
{
	obj = document.getElementsByTagName("div");

	if (visibility == 'toggle')
	{
		if (obj[id].style.display == 'none')
			obj[id].style.display = 'block';
		else
			obj[id].style.display = 'none'
	}
	else
	{
		if (obj[id])
		{
			obj[id].style.display = visibility;
		}
	}

	if (caller && caller.childNodes)
	{
		for (i=0; i<caller.childNodes.length; i++)
		{
			if (caller.childNodes[i].name=="toggleimg")
			{
				if (obj[id].style.display=='none')
					caller.childNodes[i].src="/global_images/expand.png"
				else
					caller.childNodes[i].src="/global_images/contract.png"
			}
		}
	}
}


function setStyleSheet(title) {
   var i, a, main;
   for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
     if(a.getAttribute("rel").indexOf("style") != -1
        && a.getAttribute("title")) {
       if(a.getAttribute("title") == title)
       {
       	a.disabled = !a.disabled;
       }
       else {a.disabled = true;}
     }
   }
}

function rotateStyleSheet() {
	// Get the name of the current style sheet
    var available = Array('styles','moonlight');
    var old_url = $('link[@rel*=style][@title=main]').attr("href");
	var current = old_url.split("/").pop().split(".").shift();
	var url = old_url.substring(0,(old_url.length-(current.length+4)));
	for(i=0;i<available.length;i++) {
		if (current == available[i]) {
			if (available[i+1] == undefined) var stylesheet = available[0];
			else var stylesheet = available[i+1];
			break;
		}
	}
    $('link[@rel*=style][@title=main]').attr('href',url + stylesheet + '.css');

    var old_url = $('link[@rel*=style][@title=]').attr("href");
	var current = old_url.split("/").pop().split("_").pop();
	var url = old_url.split("/").shift()
    $('link[@rel*=style][@title=]').attr('href',url + '/' + stylesheet + '_' + current);
     	
   	 createCookie('style', stylesheet, 365);
}
 
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	} else expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}


function popScreen(type,playerId,PassValues) {
  if (type == 'Edit') {var url = "../players/player_search.php?player_id="+playerId+PassValues;}
  else if (type == 'Warn') {var url = "../players/warn_player.php?player_id="+playerId;}
  else if (type == 'Ban') {var url = "../players/ban_player.php?player_id="+playerId;}
  else {var url = type;}
  openWindow(url,'Edit','width=1100,height=800,scrollbars=yes');
  return(false);
}

function openWindow(winURL,winName,winFeatures,winNotUnique)
{
	if (winName == '')
	{
		winName = 'edit';
	}
	if (winFeatures == '')
	{
		winFeatures = 'width=800,height=700,scrollbars=yes';
	}
	if (winNotUnique)
	{
		winName = winName + Math.random()*5;
	}


  EditWindow = window.open(winURL,winName,winFeatures);
  EditWindow.focus();
}


function showOverflow(table_id, starting_row)
{
	if (document.getElementById(table_id)) {
		table_body = document.getElementById(table_id).tBodies[0];
		table_body_length = table_body.rows.length;

		if (starting_row < table_body_length)
		{
			for (var i=starting_row; i<table_body_length; i++)
			{
				if (table_body.rows[i].style.display=="none")
					table_body.rows[i].style.display="";
				else
					table_body.rows[i].style.display="none";
			}
		}
	}
}

function toggleMenu(menu,content)
{
	$(menu).toggleClass('open');
	$(menu).toggleClass('close');
	$('#'+content).toggle();
}


/**
 * Show the "loading" image before a form is submitted
 *
 * This function is run before an ajax form is run.  It displays the loading
 * image beside the button being clicked.
 *
 * If a loading image is already being displayed elsewhere it is removed first.
 *
 * @param array	List of all form input objects and their values.
 * @param object	jQuery object encasing the form object being submitted.
 * @param object	Settings that are being used for the ajax submission.
 * @return boolean	TRUE if everything is okay.  If a FALSE is sent the form
 *				isn't submitted.
 */
function ajaxLoading(form_array, jquery, options)
{
	// Animations don't work in Safari
	if (! $.browser.safari) {
		// Destroy the existing loading animation if it exists
		
		if ($("#loading")[0]) {
			$("#loading").remove();
		}
		
		$(jquery).find(":submit").before("<img id='loading' src='/global_images/loading.gif' style='float:right; width:20px; height:20px; display:none;' />");
		$("#loading").show();
	}
	
	return true;
}


/**
 * Process the results sent back via an ajax form submission
 * 
 * @param string	Xml results returned from the submission.
 * @param string	Text message showing whether the form submission succeeded or failed.
 */
function ajaxResponse(xml, status_text)
{

	var redirect = $("redirect", xml).text();
	if (redirect){
		window.location = redirect;
	}
	else{
	// Animations don't work in Safari
	if (! $.browser.safari) {
		$("#loading").fadeOut("slow", function() {
			$(this).remove();
		});
	}

	var action = $("action", xml).text();
	var message = $("result", xml).text();
	
	$("#ajax_response").empty().append(message).slideDown("fast", function() {
		// The .animate() is a little trick to put a delay between the slideDown() and the slideUp()
		$(this).animate({opacity: 1.0}, 3000).slideUp("fast");
	});
	}
}



/**
 * Process the results sent back via an ajax form submission
 * 
 * @param string	JSON result returned from the submission.
 * @param string	Text message showing whether the form submission succeeded or failed.
 */
function ajaxAlert(json, status_text)
{
	// Animations don't work in Safari
	if (! $.browser.safari) {
		$("#loading").fadeOut("slow", function() {
			$(this).remove();
		});
	}
	
	if (json.error_list != undefined && json.error_list.length > 0) {
		$.each(json.error_list, function(i, error) {
			json.message = json.message + '<br/><b> &nbsp; - ' + error.message + '</b>';
		});
	}

	// Please don't take the complexity of this statement as an open-door to make lots of complex statements.
	$("#ajax_response")
		.empty()
		.append(json.message)
		.slideDown("fast", function() {
			// The .animate() is a little trick to put a delay between the slideDown() and the slideUp()
			$(this).animate({opacity: 1.0}, 3000).slideUp("fast");
		});
}


/**
 * Mark Item for Translation
 *
 * This just sends back whatever is sent to it
 * It is just a marker for what needs to be translated
 * Required for all output of text to the screen.
 */
function trans(phrase)
{
  return phrase;
}

$(document).ready(function(){
	if ($(".list_table")) {
		$(".list_table tr:even").addClass("even");
	}
	if ($(":submit:not(.searchBTN)")) {
		$(":submit:not(.searchBTN)").addClass("stnBTN");
	}
	if ($(":button")) {
		$(":button").addClass("stnBTN");
	}
  	if ($(".stnBTN")) {
  	 	 $('.stnBTN').wrap("<span class='button'></span>");
  	 }
  	 
  	if ($("input[rel=calendar]").length > 0) {
  		
  		$("input[rel=calendar]").datepicker({ dateFormat: 'yy-mm-dd' }); 
  	}

  	if ($("table.sortable").length > 0) {
   		
   		/*
   		$.getScript("/global_javascripts/jquery_ext/jquery.dataTables-min.js", function() {
   		// For Safari 2.0 will need to add a delay
	  	 	$("table.sortable").dataTable(); 
	  	 });	
   		*/
   		$.getScript("/global_javascripts/jquery_ext/jquery.tablesorter.pack.js", function() {
	  		// For Safari 2.0 will need to add a delay
	  	 	$("table.sortable").each(function() {
				settings = {sortList:Array()};
				var header_cells = $(this).find("thead tr td");
				for (var i=0;i<header_cells.length;i++) {
					if ($(header_cells[i]).hasClass('sortASC')) {settings.sortList.push(Array(i,0));}
					else if ($(header_cells[i]).hasClass('sortDESC')) {settings.sortList.push(Array(i,1));}
				}
				$(this).tablesorter(settings);
	  	 	}); 			
   		});
   	

  	 }  
   	 
  	 // TODO: Add http://trentrichardson.com/Impromptu/ to all delete buttons	 
});


/**
 * Similar to PHP's ucwords
 * 
 * @param str
 * @return string
 */
function ucwords( str ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Waldo Malqui Silva
    // +   bugfixed by: Onno Marsman
    // *     example 1: ucwords('kevin van zonneveld');
    // *     returns 1: 'Kevin Van Zonneveld'
    // *     example 2: ucwords('HELLO WORLD');
    // *     returns 2: 'HELLO WORLD'
    return (str+'').replace(/^(.)|\s(.)/g, function ( $1 ) { return $1.toUpperCase( ); } );
}


/**
 * Round a number to a given precision
 * @param value
 * @param precision
 * @return
 */
function round(value, precision) {
	return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
}

