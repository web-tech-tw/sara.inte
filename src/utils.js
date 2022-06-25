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

function goToLocationSafe(url, replace = true) {
    const method = replace ? window.location.replace : window.location.assign;
    method(isSafeRedirectUrl(url) ? url : process.env.VUE_APP_WEBSITE_URL);
}

function isSafeRedirectUrl(url) {
    return url.startsWith(process.env.VUE_APP_WEBSITE_URL);
}

function exitApplication() {
    const url = sessionStorage.getItem(SARA_REFER_KEY_NAME) || "";
    setTimeout(() => goToLocationSafe(url), 500);
    sessionStorage.removeItem(SARA_REFER_KEY_NAME);
}

export { saraReferTrigger, goToLocationSafe, isSafeRedirectUrl, exitApplication };
