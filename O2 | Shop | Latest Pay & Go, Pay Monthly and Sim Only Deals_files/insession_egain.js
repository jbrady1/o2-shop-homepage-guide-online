var serverName="chat.o2.co.uk";
var protocol="https";

function insertOrder(jsonData)
{
    var activityId=readActivityCookie();
    if(activityId>0)
    {
        var d = new Date();
        var postUrl = protocol+"://"+serverName+"/system/ws/v11/ps/order/create";
        $.ajax({
            url: postUrl,
            type: "POST",
            async:   true,
            data : {'order':jsonData,'activityId':activityId,'time':d.getTime()},
            success: function(json) {
            },
            error: function() {
            }
        });
    }
}

function readActivityCookie()
{
    if (document.cookie.length>0)
    {
        var allcookies = document.cookie;
        cookiearray  = allcookies.split(';');
        for(var i=0; i<cookiearray.length; i++)
        {
            name = cookiearray[i].split('=')[0].trim();
            if(name=='activityId')
            {
                value = cookiearray[i].split('=')[1].trim();
                return value;
            }
        }
    }
    return 0;
}
