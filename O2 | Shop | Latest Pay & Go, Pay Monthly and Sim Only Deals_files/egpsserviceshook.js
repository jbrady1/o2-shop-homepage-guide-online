eGOFR.PreCreateInteractionEx = function(bannerid, offertype, ruleid, conditionsmet,agentOffer)
{
	
	// If the product behavior is overriden to have some custom logic to create the interaction. 
	// Ensure that the callback eGOFR.OnAddVisitorToDashboard or equivalent gets called after the interaction is created
	backButton = 0; 
}
eGOFR.preSetBannerPositionEx = function(bannerDiv, bannerid){
	//===============================================================================================================	
	//               Sticky chat offer...starts
	//===============================================================================================================
	var egainDomain = 'https://chat.o2.co.uk';
	var url = egainDomain+'/system/l10n/en/us/pl/web/offers/tooltext.properties';
	$.getScript(url, propertiesFileProcessing);
	//===============================================================================================================	
	//               Sticky chat offer...ends
	//===============================================================================================================
	//===============================================================================================================	
	//               PSENG-4693 offer UI development...starts
	//===============================================================================================================
	if(bannerDiv.querySelector('#egofr-offer4-content') != null && typeof (bannerDiv.querySelector('#egofr-offer4-content')) != undefined){
		bannerDiv.querySelector('#egofr-offer4-content').style.display = 'none';
		setTimeout(function(){bannerDiv.querySelector('#egofr-offer4-content').style.display = 'table';}, 2650);
	}
	//===============================================================================================================	
	//               PSENG-4693 offer UI development...ends
	//===============================================================================================================
return new eGOFR.HookSuccess();

}
function checkUrl(partUrl){
	var newRegexp=null;
	var regexExpParts = partUrl.match(/^\/(.*?)\/([gim]*)$/);
	if (regexExpParts!=null) {
		partUrl=eval(partUrl);
	}
	var str = (document.URL).match(partUrl);
	if(str != null){
		return 'true';
	}
	else{
		return 'false';
	}
}

function checkCookie(){
	if(document.cookie.indexOf("login=") != -1){
		if(eGOFR.GetCookie("login")=='true'){
			return 'true';
		}
		else{
			return 'false';	
		}
	}
	else{
		return 'true';
	}
}
function checkpreviousUrl(parturl){
	var userJourney = sessionStorage.userJourney.split(',');
	if(userJourney.length >1){
		var url = userJourney[userJourney.length-2];
		if(url.indexOf(parturl) != -1){
			return 'true';
		}
		else{
			return 'false';
		}
	}else
		return 'false';
}

function checkExpressionInUrl(exp){
	var result = document.URL.match(exp);
	if(result != null){
		return 'true';
	}
	else{
		return 'false';
	}
}

function checkExpressionInPreviousUrl(exp){
	var userJourney = sessionStorage.userJourney.split(',');
	if(userJourney.length >1){
		var result = userJourney[userJourney.length-2].match(exp);
		if(result != null){
			return 'true';
		}
		else{
			return 'false';
		}
	}else
		return 'false';
}

(function(a){

try{sessionStorage.setItem('foo','bar');}catch(err){alert('please turn off private browsing to view all offers');};
  var userJourney = new Array();
    if(sessionStorage.reJectedOffer == undefined){
		sessionStorage.reJectedOffer = 'false';
	}
	
	if(sessionStorage.rejectionShop == undefined){
		sessionStorage.rejectionShop = 'false';
	}
	
		
	if(sessionStorage.userJourney != undefined){
		userJourney = sessionStorage.userJourney.split(',');
		userJourney.push(document.URL);
		sessionStorage.userJourney = userJourney;
	}
	else{
		userJourney.push(document.URL);
		sessionStorage.userJourney = userJourney;
	}
	
	
	//===============================================================================================================	
	//               PSENG-3825 Chat offers by device customization...starts
	//===============================================================================================================
	
	var domaindeviceType = 'https://chat.o2.co.uk';
	var deviceTypeURL =  domaindeviceType + '/system/ws/ps/devicebasedoffer';
	var offerDeviceType = sessionStorage.deviceType;
	if (((sessionStorage.deviceType) == undefined) || ((sessionStorage.deviceType)!= 'error') ) {
		$.ajax({
					type : "GET",
					url : deviceTypeURL,
					dataType:"jsonp",
					async: false,
					success : function(data) {
						var deviceJson = data;
						if (((deviceJson.deviceType)!=undefined)&& ((deviceJson.deviceName)!=undefined)){
							sessionStorage.deviceType = (deviceJson.deviceType);
							sessionStorage.deviceName = (deviceJson.deviceName);
						} else{
							if (window.console) {
							try {
								 window.console.error('Error while retrieving data from devicebasedoffer web service.');
							} catch(err) { }
							}
							sessionStorage.deviceType = 'error';       
							sessionStorage.deviceName = 'error';
						}
					   
					},
					error: function(xhr, status, error) {
						if (window.console) {
							try {
								window.console.error('Error while retrieving data from devicebasedoffer web service. '+error);
							} catch(err) { }
						}	
					}
		});
	}
	
	
	//=====================================================================================================================
	//               PSENG-3825 Chat offers by device customization...ends
	//=====================================================================================================================		

	//=====================================================================================================================
	//             PSENG-4690 Pre-Hot lead by area customization...starts
	//=====================================================================================================================	
var preHotLeadURL = domaindeviceType + '/system/ws/ps/offersprehotleaddata';
if(sessionStorage.getItem('jsonArray')==undefined){
	$.ajax({
				type : "GET",
				url : preHotLeadURL,
				dataType:"jsonp",
				async: false,
				success : function(data) {
					
					sessionStorage.setItem('jsonArray',JSON.stringify(data));  
					var jsonArray =  data;
					if(jsonArray.length==0){
					if (window.console) {	 
						 try {
								window.console.error('Error while retrieving data from prehotlead web service.');
							} catch(err) { }
						}
					return;
				}
				for(var i=0;i<jsonArray.length;i++){
					sessionStorage.setItem((jsonArray[i].sessionVariable), false);
				 }
				   
				},
				error: function(xhr, status, error) {
					if (window.console) {
					 try {
							 window.console.error('Error while retrieving data from prehotlead web service. '+error);
						} catch(err) { }
				}
				}
	});
}
	
	
	//=====================================================================================================================
	//               PSENG-4690 Pre-Hot lead by area customization...ends
	//=====================================================================================================================		
	

})(window);


//===============================================================================================================	
//               PSENG-3234 Personalised offers customisation...starts
//===============================================================================================================
eGOFR.ReplacePlaceHoldersEx = function(htm){
	
	htm = replaceText(htm);
	var allcookies = document.cookie;
	cookiearray  = allcookies.split(';');
	var cookiePresent = false;
	for(var i=0; i<cookiearray.length; i++){
		  name = cookiearray[i].split('=')[0];
		  value = cookiearray[i].split('=')[1];
		  
		  if(name == 'anonP3')
		  {
			cookiePresent = true;
			htm = htm.replace("<Name>",value);
			htm = htm.replace("<name>",value);
			break;	
		  }
		  
	}
	if(!cookiePresent)
	{
		htm = htm.replace(/(\s<name>)/i,"");
	}
	   
	return htm;
}
 //===============================================================================================================	
//               PSENG-3234 Personalised offers customisation...ends
//===============================================================================================================
	   
 eGOFR.postOnRejectEx = function(reason,bannerid,ruleid){
 
	if(checkUrl("/shop") == "true"){
		sessionStorage.setItem('rejectionShop','true');
	}
	//=====================================================================================================================
	//             PSENG-4690 Pre-Hot lead by area customization...starts
	//=====================================================================================================================	
	var jsonArray1=JSON.parse(sessionStorage.getItem('jsonArray'));
	if(jsonArray1 !=undefined){
		
		for(var i=0;i<jsonArray1.length;i++){
			if(checkUrl(jsonArray1[i].regexPattern) == "true"){
				sessionStorage.setItem((jsonArray1[i].sessionVariable), true);
			}
		 }
    }
	//=====================================================================================================================
	//               PSENG-4690 Pre-Hot lead by area customization...ends
	//=====================================================================================================================	
	sessionStorage.reJectedOffer = 'true'; 
}

 eGOFR.postOnAcceptEx = function(reason,bannerid,ruleid){
 
	//=====================================================================================================================
	//             PSENG-4690 Pre-Hot lead by area customization...starts
	//=====================================================================================================================	
	
	var jsonArray1=JSON.parse(sessionStorage.getItem('jsonArray'));
	if(jsonArray1 !=undefined){
		
		for(var i=0;i<jsonArray1.length;i++){
			if(checkUrl(jsonArray1[i].regexPattern) == "true"){
				sessionStorage.setItem((jsonArray1[i].sessionVariable), true);
			}
		 }
	}				  
	//=====================================================================================================================
	//               PSENG-4690 Pre-Hot lead by area customization...ends
	//=====================================================================================================================	
	sessionStorage.reJectedOffer = 'true';  
}
function checkOfferSessionValue (){
	var checkFlag = document.getElementById('offerSession');
	return checkFlag;
}

/*This method will get called before setting the attributes of banner in both the cases
relative style and fixed style i.e. Botton Left, Botton Top*/

/* Code Starts here which is Added to get the toolTip text for sticky offer through L10N resource.*/

/*eGOFR.preSetBannerPositionEx = function(bannerDiv, bannerid){
	
	return new eGOFR.HookSuccess();
}*/

function propertiesFileProcessing() {
    try {
        /* wait until the file has been fully loaded */
        if (L10N_TOOLTIP_TEXT == undefined) {
            setTimeout('propertiesFileProcessing()', 0.1 * 1000);
            return;
        }
		var tooltip = L10N_TOOLTIP_TEXT;
		$('#egofr-stickychat-container').attr('title', tooltip);
    } catch(e) {
		if (window.console) {
					 try {
							  console.log("Error Description: " + e.message);
							console.log("Error occured in loading properties file OR setting text to the div element of template");
						} catch(err) { }
				}
           
    }
}
/* Code Ends here which is Added to get the toolTip text for sticky offer through L10N resource.*/

function replaceText(str)
{
	str = str.replace("&nbsp;"," ");
	str = str.replace("&lt;","<");
	str = str.replace("&gt;",">");
	str = str.replace("&amp;","&");
	return str;
}
$(document).bind("click touchstart", function(e){       //PSENG-6840 : ipad hover fix
		if(e.target.id!='egofr-stickychat-container'){
			 $('#egofr-stickychat-container').off('hover');
		}
});		