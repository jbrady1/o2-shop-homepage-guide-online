//default implemenatation to set referrer
eGOFR.SetReferrerEx = function()
{
	//reset the referrer if the domain of the referrer is not same as the offer enabled page
	if(document.referrer != "" && eGOFR.GetDomain()!=eGOFR.GetDomain(document.referrer.toString()))
		eGOFR.SetCookie(eGOFR.REFERRER_COOKIE, document.referrer);
	//reset the referrer if the user had browsed outside of offer enabled page and there is not referrer now
	else if(document.referrer == "" && eGOFR.GetCookie(eGOFR.REFERRER_COOKIE) != "")
		eGOFR.SetCookie(eGOFR.REFERRER_COOKIE, "");
}

//default implemenatation to get referrer
eGOFR.GetReferrerEx = function()
{
	var ref = eGOFR.GetCookie(eGOFR.REFERRER_COOKIE);
	return (ref == "")?document.referrer:ref;
}

//pass any additonal attributes for VD prepend the attribute name with egofr example egofrreference_id
eGOFR.SetVDAdditionalInformationEx = function(arr){}

/*This method will get called before setting the attributes of banner in both the cases
relative style and fixed style i.e. Botton Left, Botton Top*/
eGOFR.preSetBannerPositionEx = function(bannerDiv, bannerid){return new eGOFR.HookSuccess();}

/*This method will get called after setting the attributes of banner in both the cases
relative style and fixed style i.e. Botton Left, Botton Top*/
eGOFR.postSetBannerPositionEx = function(bannerDiv, bannerid){}

/*This method will get called after the banner is floated on Visitor's browser.*/
eGOFR.postOpenInvitationDivEx = function(bannerid,isAgentOffer, agentId,divElem){}

/*This method will get called after Visitor accepts the offer and 
before the rule engine processes this Accept action*/
eGOFR.preOnAcceptEx = function(bannerid, ruleid, agentId){return new eGOFR.HookSuccess();}

/*This method will get called after the rule engine process Accept action*/
eGOFR.postOnAcceptEx = function(bannerid, ruleid, agentId){}

/*This method will get called after Visitor rejects the offer and 
before rule engine process this Reject action*/
eGOFR.preOnRejectEx = function(reason,bannerid,ruleid){return new eGOFR.HookSuccess();}

/*This method will get called after rule engine process Reject action*/
eGOFR.postOnRejectEx = function(reason,bannerid,ruleid){}

/*This method will get called after Visitor rejects/accepts/ignores the offer and 
before rule engine hides the banner from Visitor's browser*/
eGOFR.preCloseInvitationDivEx = function(reason,bannerid,ruleId){return new eGOFR.HookSuccess();}

/*This method will get called after Visitor rejects/accepts/ignores the offer and
rule engine hides the banner from Visitor's browser*/
eGOFR.postCloseInvitationDivEx = function(reason,bannerid,ruleId){}

//Hooks for UI conditions
//Hook called after the UI conditions have been evaluated to true
eGOFR.PostUIConditionEvaluation = function(val){ return val;}

//Hook called after the UI conditions have been evaluated to false
eGOFR.PostUIConditionNotMet = function(){ return false;}

//hook to replace placeholders in the template html
eGOFR.ReplacePlaceHoldersEx = function(htm){ return htm;}

//hook to override the event logging from rules engine
eGOFR.PreLogEventEx = function(stageId,eventType,sessionId,interactionId,offerId,pageId,eventAttribArr)
{
	return false;
}
//hook to do additional processing after submitting the request for logging the event
eGOFR.PostLogEventEx = function(stageId,eventType,sessionId,interactionId,offerId,pageId,eventAttribArr){}

//hook to ovverride the creation of interaction from the rules engine
eGOFR.PreCreateInteractionEx = function(bannerid, offertype, ruleid, conditionsmet,agentOffer)
{
	// If the product behavior is overriden to have some custom logic to create the interaction. 
	// Ensure that the callback eGOFR.OnAddVisitorToDashboard or equivalent gets called after the interaction is created
	return false;
}

//Post interaction creation hook to do any additional processing 
eGOFR.PostCreateInteractionEx = function(bannerid, offertype, ruleid, conditionsmet,agentOffer){}


//Hook to override whether the visitor is already engagaged or not.
eGOFR.eGOFRIsVisitorEngagedEx = function(){return false;}

// egofrhookjs added later in def.js to avoid asynchronous loading of both files
eGOFR.addScriptElement('egofrhookjs', "web/custom/proactivesales/templates/egpsserviceshook.js?patch_no="+eGOFR.PATCH_NO);