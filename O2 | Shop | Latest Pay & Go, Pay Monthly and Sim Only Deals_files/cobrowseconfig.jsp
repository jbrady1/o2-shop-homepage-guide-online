






//<script>
/**
Copyright (c) 2011 eGain Communications Corporation. All rights reserved.
*/
if(!eGain)
    var eGain={};

eGain.cobrowseServers = {
    cdnServer:"https://chat.o2.co.uk",
    csServer:"https://chat.o2.co.uk",
    tktSvcServer:"https://chat.o2.co.uk",
    adminServer:"https://chat.o2.co.uk",
    webResourceServer:"https://chat.o2.co.uk",
    csHost:"WMA28MBEGA09"
}  ;

eGain.cobrowseConfig = {
    cb_build_number:"[REVISION_NUMBER]",
    c2c: false,
    allowChat:false,
    allow2DChat:false,
    allowGlyph:true,
    enableVisualIndicator:true,
    enableMouseTracking:true,
    cdnBase: eGain.cobrowseServers.cdnServer + "/" + "system/cb/cdn",
    csURL: eGain.cobrowseServers.csServer + "/" + "system/cb/cs" +"/",
    tktSvcURL: eGain.cobrowseServers.tktSvcServer + "/" + "system/cb/tktsvc" + "/TktGenSvc",
    adminUrl : eGain.cobrowseServers.adminServer + "/" + "system/cb/admin",
    templatePath : eGain.cobrowseServers.webResourceServer + "/" + "system"+"/templates/cobrowse",
    customHookPath : eGain.cobrowseServers.webResourceServer + "/" + "system"+"/web/custom/cobrowse",
    inviteFrndURL:eGain.cobrowseServers.adminServer + "/" + "g" + "/CBInviteFriendServlet" ,
    inviteShortURL:"",
    debugFlag:false,
    sessionEndRedirectUrl:"SessionEnd.jsp",
    sessionErrRedirectUrl:"SessionEnd.jsp",
    sessionInvalidRedirectUrl:"SessionInvalid.jsp",
    msgBatchSize : 50,
    securityWhiteListDomain:"prodo2copy.o2webchat.net,edigitalsurvey.com,cloudfront.net,1.1.1.*,maps.gstatic.com,www.o2recycle.co.uk,bazaarvoice.com,app.trustev.com,www.o2wifi.co.uk,www.telefonica.com,www.telefonicaando2careers.com,app.yieldify.com,assets.adobedtm.com,force.com,o2priority.co.uk,www.o2more.co.uk,guru.force.com,www.nspcc.org.uk,*.iconfinder.com,websiteoftheyear.co.uk,www.tfl.gov.uk,*.apple.com,*.google.com,www.o2-yournumbers.co.uk,www.windowsphone.com,www.o2learn.co.uk,*.o2.co.uk",
    securityBlackListDomain:"",
    securityToggleSetting:"1"
};
//</script>