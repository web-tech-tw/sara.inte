const {
    VITE_INDEX_INTE_HOST: indexInteHost,
} = import.meta.env;

import {
    SARA_REFER_KEY_NAME,
    SARA_REFER_URL_NAME,
} from "./const.js";

function saraReferTrigger(callback) {
    if (window.location.search) {
        const params = new URLSearchParams(window.location.search);
        if (params.has(SARA_REFER_URL_NAME)) {
            callback(params.get(SARA_REFER_URL_NAME));
        }
    }
}

function goToSafeLocation(url, replace = true) {
    if (!isSafeRedirectUrl(url)) {
        console.warn("Unsafe redirect url detected: " + url);
        url = indexInteHost;
        console.warn("Reject it");
    }
    if (replace) {
        window.location.replace(url);
    } else {
        window.location.assign(url);
    }
}

function isSafeRedirectUrl(url) {
    const targetUrl = new URL(url);
    const safeUrl = new URL(indexInteHost);
    return targetUrl.host === safeUrl.host;
}

function exitApplication() {
    const url = sessionStorage.getItem(SARA_REFER_KEY_NAME) || indexInteHost;
    setTimeout(() => goToSafeLocation(url), 500);
    sessionStorage.removeItem(SARA_REFER_KEY_NAME);
}

export { saraReferTrigger, goToSafeLocation, isSafeRedirectUrl, exitApplication };
