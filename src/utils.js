import {
    SARA_REFER_KEY_NAME,
    SARA_REFER_URL_NAME,
} from "./const";

function saraReferTrigger(callback) {
    if (window.location.search) {
        const params = new URLSearchParams(window.location.search);
        if (params.has(SARA_REFER_URL_NAME)) {
            callback(params.get(SARA_REFER_URL_NAME));
        }
    }
}

function goToSafeLocation(url, replace = true) {
    console.log(1, url)
    url = isSafeRedirectUrl(url) ? url : process.env.VUE_APP_WEBSITE_URL;
    if (replace) {
        window.location.replace(url);
    } else {
        window.location.assign(url);
    }
}

function isSafeRedirectUrl(url) {
    return url.startsWith(process.env.VUE_APP_WEBSITE_URL);
}

function exitApplication() {
    const url = sessionStorage.getItem(SARA_REFER_KEY_NAME) || "";
    console.log(2, url)
    setTimeout(() => goToSafeLocation(url), 500);
    sessionStorage.removeItem(SARA_REFER_KEY_NAME);
    console.log(3, url)
}

export { saraReferTrigger, goToSafeLocation, isSafeRedirectUrl, exitApplication };
