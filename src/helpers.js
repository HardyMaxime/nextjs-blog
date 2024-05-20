
export function throttle(callback, delay) {
    var last;
    var timer;
    return function () {
        var context = this;
        var now = +new Date();
        var args = arguments;
        if (last && now < last + delay) {
            // le délai n'est pas écoulé on reset le timer
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                callback.apply(context, args);
            }, delay);
        } else {
            last = now;
            callback.apply(context, args);
        }
    };
}

export function triggerOnce(breakpoint, callbackDesktop, callbackMobile)
{
    var largeurFenetre = document.documentElement.clientWidth;
    if(largeurFenetre > parseInt(breakpoint)) {
      if (typeof(desktop) == "undefined") {
        desktop = true;
        mobile = undefined;
        callbackDesktop();
      }
    }
    else
    {
      if (typeof(mobile) == "undefined") {
        mobile = true;
        desktop = undefined;
        callbackMobile();
      }
    }
}

export function isDefined(element) {
    return (element == null || element == undefined || element.length == 0) ? false : true;
}

export function updateURLParameter(url, param, paramVal)
{
    var TheAnchor = null;
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";

    if (additionalURL) 
    {
        var tmpAnchor = additionalURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor = tmpAnchor[1];
        if(TheAnchor)
            additionalURL = TheParams;

        tempArray = additionalURL.split("&");

        for (var i=0; i<tempArray.length; i++)
        {
            if(tempArray[i].split('=')[0] != param)
            {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }        
    }
    else
    {
        var tmpAnchor = baseURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor  = tmpAnchor[1];

        if(TheParams)
            baseURL = TheParams;
    }

    if(TheAnchor)
        paramVal += "#" + TheAnchor;

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function sleep(callback, ms, ...args)
{
    await timeout(ms);
    return callback(...args);
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

export function parseHTML(html) {
    new DOMParser().parseFromString(html, "text/html");
}

export function extratID(slug)
{
    const regexPattern = /(\d+)$/;
    const match = slug.match(regexPattern);
    if (match !== null) {
        return match[1];
    } else {
        return null;
    }
}

export function decodeEntities(encodedString) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}

export function getBaseURL()
{
    let fullURL = process.env.BASE_URL;

    const url = new URL(fullURL);
    const baseUrl = `${url.protocol}//${url.host}/`;
    return baseUrl;
}