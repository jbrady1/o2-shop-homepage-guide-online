/**
 Copyright (c) 2011 eGain Communications Corporation. All rights reserved.
 */

if(!eGain)
    var eGain={};
eGain.allowCobrowse = {} ;
eGain.cobrowseConfig = {} ;
eGain.cobrowse = {} ;

var eGainCB = {
    scriptTags: {}
};
eGainCB.cacheidParamName = "egcbcacheid";
eGainCB.userRole = "MASTER";
eGainCB.postMsgCountForIframeChk = "5";
eGainCB.CobrowseIframeIds='|egcb_checksession|eGain_cobrowse_frame|';

eGain.allowCobrowse.loadScriptAsync = function(url, callback, id) {
    if (eGain.allowCobrowse.isPluginAlreadyLoaded ())
        return;

    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) { //IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    }
    else { //Others
        script.onload = function() {
            callback();
        };
    }
    script.src = url;
    script.id = script.name = id;
    eGainCB.scriptTags[id]    =   script;
    if (eGain.allowCobrowse.isPluginAlreadyLoaded ())
        return;
    document.getElementsByTagName("head")[0].appendChild(script);
}

eGain.allowCobrowse.loadConfig = function() {
    var configPath='', src='', params, qs='', locale;
    function getQueryParam(key) {
        if (!params) {
            params = {};
            var qs = location.search;
            qs = qs.length>0 ? qs.substring(1) : null;
            if(qs != null)
            {
                qs = qs.replace(/\+/g, ' ');
                var parampairs = qs.split('&');

                for (var i=0; i<parampairs.length; i++) {
                    var arr = parampairs[i].split('=');
                    params[decodeURIComponent(arr[0])] = decodeURIComponent(arr[1]);
                }
            }
        }
        return params[key];
    }
    function setLocale(locale) {
        eGain.allowCobrowse.locale = locale;
    }
    var scripts = document.getElementsByTagName('SCRIPT');
    for(var i=0; i<scripts.length;i++)
        if(scripts[i].src.replace(/\\/,"/").indexOf("/allow_cobrowse.") != -1 ) {
            src = scripts[i].src;
            configPath = src.substring(0, src.lastIndexOf("/")+1);
        }
    if (configPath == "") {
        var addOn = document.getElementById("_egainallowcobrowse");
        if (addOn && addOn.src)
            configPath = addOn.src.substring(0,addOn.src.lastIndexOf("/")+1);
    }
    if (locale = getQueryParam("locale"))
        setLocale(locale);

    configPath += 'cobrowseconfig.jsp';
    if (window.egcbstarted) {
        configPath += eGainCB.getNoCacheQueryString() + '&genInvUrl=true';
    }
    else {
        configPath += eGainCB.getCacheQueryString();
    }

    configPath += "&cbAdminUrl=" + encodeURIComponent(eGainCB.getUrl(configPath));
    var csUrl = getQueryParam("cbCSUrl") ;
    if(csUrl && csUrl.length > 0){
        configPath += "&cbCSUrl=" + encodeURIComponent(csUrl) ;
    }
    eGain.allowCobrowse.loadScriptAsync(configPath, eGain.allowCobrowse.insertSessionStateFrame, "eGain_cobrowse_cfg");
}

eGain.allowCobrowse.loadJS = function() {
    var jsPath = eGain.cobrowseConfig.cdnBase + '/AllCdnScripts.jsp?role=MASTER&' + eGainCB.getCacheQueryString(true);
    eGain.allowCobrowse.loadScriptAsync (jsPath, function() {eGain.cobrowse.initForTagSolution()}, "eGain_cobrowse_js");
}

eGain.allowCobrowse.isPluginAlreadyLoaded = function() {
    if ((eGain.cobrowse || {}).tagBasedSolution) {
        return true;
    }
    if (document.getElementById("eGain_cobrowse_js")) {
        return true;
    }
    return false;
};
// Function to determine if
// - egcbcacheid cookie is present in the browser cookie, if present return the value of the cookie
// - If egcbcacheid cookie is not present, add this cookie to existing cookies and return the value.
// The returned value is used for fetching cobrowse related files from the server or browser cache.
eGainCB.getCacheId = function() {
    var cacheid = "" ;
    var search = eGainCB.cacheidParamName + "=";
    if (document.cookie && document.cookie.length > 0) {
        var offset = document.cookie.indexOf(search)
        if (offset != -1) {
            offset += search.length ;
            end = document.cookie.indexOf(";", offset) ;
            if (end == -1)
                end = document.cookie.length ;
            cacheid = document.cookie.substring(offset, end) ;
        }
    }
    if(cacheid.length == 0) {
        cacheid = new Date();
        document.cookie = eGainCB.cacheidParamName + "=" + cacheid;
    }
    return cacheid ;
};

eGainCB.getCacheQueryString = function(withoutQMark) {
    //return (withoutQMark ? "" : "?") + eGainCB.cacheidParamName + "=" + eGainCB.getCacheId();
    //return eGainCB.getCBBuildNumber(withoutQMark) ;
    var todayDate = new Date() ;
    todayDate = todayDate.getMonth() + todayDate.getDay() + todayDate.getYear() ;
    var buildnumber =  (!eGain.cobrowseConfig.cb_build_number) ? todayDate : eGain.cobrowseConfig.cb_build_number;
    return (withoutQMark ? "" : "?") + eGainCB.cacheidParamName + "=" + buildnumber ;

};

eGainCB.getNoCacheQueryString = function(withoutQMark) {
    return (withoutQMark ? "" : "?") + (new Date()).getTime();
};

eGainCB.getUrl = function(url){
    var retVal;
    if(url){
    	var protocol, endIdx;
    	//handling for protocol relative URL (IE browser issue).
        if(url.indexOf("//") == 0){
        	var protocol = window.location.protocol+"//";
        	endIdx = 2;
        }
        else{
        	endIdx = url.indexOf("://") + 3 ;
        	protocol = url.substring(0, endIdx) ;
        }

        var leftOver = url.substring(endIdx, url.length) ;
        var hostname = leftOver.substring(0, leftOver.indexOf("/")) ;
        retVal = protocol + hostname ;
    }
    return retVal;
} ;

eGain.allowCobrowse.insertSessionStateFrame = function(){
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete"){
            clearInterval(readyStateCheckInterval);
    if(!document.body){
                // log error; could not proceed with Cobrowse, document.body is required
        return;
    }

    // if cbAutostart then no need to check for session, continue to load js
    if(window.location.search.indexOf("cbAutostart")!= -1){
        eGain.allowCobrowse.loadJS();
        return;
    }
	if(eGain.cobrowseConfig.csURL){
    var ifrm = document.createElement("IFRAME");
    ifrm.setAttribute("src", eGain.cobrowseConfig.csURL+"checkSession.html?wsname="+window.location.protocol+"//"+window.location.host);
    ifrm.setAttribute("id", "egcb_checksession");
    ifrm.style.display = 'none'

    if (navigator.userAgent.indexOf("MSIE") > -1 && !window.opera) { //IE
            ifrm.onreadystatechange = function() {
                if (ifrm.readyState == "loaded" || ifrm.readyState == "complete") {
                    ifrm.onreadystatechange = null;
                    window.setTimeout(function(){
		        ifrm.contentWindow.postMessage('getSessionState', eGain.cobrowseConfig.csURL);
      		    }, 100);
                }
            };
    }
    else { //Others
    	ifrm.onload = function(){
            ifrm.contentWindow.postMessage('getSessionState', eGain.cobrowseConfig.csURL);
            };
        }

    var isIE = window.attachEvent != null;
    if (isIE) {
        window.attachEvent("onmessage", eGain.allowCobrowse.onMessage);
    } else {
        window.addEventListener("message", eGain.allowCobrowse.onMessage, false);
    }
    document.body.appendChild(ifrm);
		}
	}
	}, 100);
}

eGain.allowCobrowse.onMessage = function(e){
    if((e.data == "startCobrowse")||(e.data == "SESSION_INITIALIZED=true" && eGain.cobrowseConfig.csURL && eGain.cobrowseConfig.csURL.indexOf(e.origin)==0 )){
        eGain.allowCobrowse.tagCobrowsableFrames();
        eGain.allowCobrowse.loadJS();
    }else if(e.data.indexOf("cobrowsableFrame") == 0) {
        var response = "eg_cbFrameResponse: "+ e.data;
        e.source.postMessage(response, e.origin);
    }else if (e.data.indexOf("eg_cbFrameResponse:") == 0){
            // detect the iframe, for which response received, and tag it as cobrowsableFrame
            var iframeSrc = e.data.split('$cb_split$')[1];
            if (!eGain.cobrowse.browserFrame) return;
            var framesets = eGain.cobrowse.browserFrame.document.getElementsByTagName('iframe');

            for (var i1 = 0; i1 < framesets.length; i1++) {
                var frameElement = framesets [i1];
                if(frameElement.src == iframeSrc){
                    frameElement.setAttribute("eg_cobrowsableFrame","true");
                    eGain.allowCobrowse.checkAndSendModifiedFrameSrc(frameElement);
                }
            }
    }
};
eGain.allowCobrowse.checkAndSendModifiedFrameSrc = function (node){
    var winId = node.getAttribute("egcb_wnd_id");
    if(winId){
        var egid=node.getAttribute("egid");
         eGainCB.callCommMethod("sendModifiedSrcForFrame", null, egid,winId,null);
    }
};
eGain.allowCobrowse.tagCobrowsableFrames = function(){

        var framesets =document.getElementsByTagName('iframe');
        var nonCobrowsableFrameExists = false;
        for (var i1 = 0; i1 < framesets.length; i1++) {
            var frameElement = framesets [i1];
            var frameSrc = frameElement.src;
            if(frameElement.getAttribute("eg_cobrowsableFrame") == "true" || eGainCB.CobrowseIframeIds.indexOf('|'+frameElement.id+'|') >= 0 || frameElement.getAttribute("egcbFrameCheckAttempt") == eGainCB.postMsgCountForIframeChk){
                continue;
            }
            nonCobrowsableFrameExists = true;

            var urlArray = frameSrc.split('/');
            if (urlArray[0].indexOf('http') < 0)
                urlArray = document.location.href.split('/');
            var count = frameElement.getAttribute("egcbFrameCheckAttempt");
            if(!count){
                count = 0;
            }
            var domain = (urlArray[0] + '//' + urlArray[2]);
            console.log("postMessage: "+ frameSrc + " count: "+ count);
            frameElement.contentWindow.postMessage('cobrowsableFrame$cb_split$'+frameSrc, domain);
            frameElement.setAttribute("egcbFrameCheckAttempt",(++count));
        }
        if(nonCobrowsableFrameExists){
            eGain.allowCobrowse.markCobrowsableFrames();
        }

}

eGain.cobrowse.startCobrowse = function () {
    eGain.allowCobrowse.markCobrowsableFrames();
    eGain.allowCobrowse.loadJS();
    eGain.allowCobrowse.startCobrowseonLoad();
}

eGain.allowCobrowse.markCobrowsableFrames = function(){
    setTimeout(eGain.allowCobrowse.tagCobrowsableFrames,1000);
}

eGain.allowCobrowse.startCobrowseonLoad = function(){
    if(eGain.cobrowse.startCobrowse_) {
        eGain.cobrowse.startCobrowse_();
    }else{
        window.setTimeout(eGain.allowCobrowse.startCobrowseonLoad, 100);
    }
};

(function (){
    // prevent loading the plugin into a popup window
    try {
		// Checking if this window has an opener and has been opened with egcbautostart=true. Only in this case we go ahead with cobrowse otherwise we don't since we do not support popups yet.
        if (top.location.search && (top.location.search.indexOf("cbAutostart")!=-1) && top.opener && window.location.search && window.location.search.indexOf("cbAutostart") == -1)
        	top.opener = null;

        var ignorePopupCheck = top.name && top.name.indexOf("egcb_cust_")==0;
        if (!ignorePopupCheck && window.location.search.indexOf("cbAutostart") == -1 && window.opener && window.opener.eGain && window.opener != self) {
            if (window.opener.eGain.allowCobrowse){
                return;
            }
        }
    }
    catch (e) {return}

    if (eGain.allowCobrowse.isPluginAlreadyLoaded ())
        return;

    window.setTimeout(eGain.allowCobrowse.loadConfig, 500);
})();
