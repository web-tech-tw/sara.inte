function isSafeRedirectUrl(url) {
    return url.startsWith(process.env.VUE_APP_WEBSITE_URL)
}

function replaceToLocationSafe(url) {
    location.replace(url && isSafeRedirectUrl(url) ? url : process.env.VUE_APP_WEBSITE_URL)
}

function redirect() {
    const url = sessionStorage.getItem('sara_refer');
    setTimeout(() => replaceToLocationSafe(url), 500);
    sessionStorage.removeItem('sara_refer');
}

export {isSafeRedirectUrl, replaceToLocationSafe, redirect};
