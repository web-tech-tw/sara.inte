function isSafeRedirectUrl(url) {
    return url.startsWith('https://web-tech-tw.github.io/')
}

function replaceToLocationSafe(url) {
    location.replace(url && isSafeRedirectUrl(url) ? url : 'https://web-tech-tw.github.io')
}

function redirect() {
    const url = sessionStorage.getItem('sara_refer');
    setTimeout(() => replaceToLocationSafe(url), 500);
    sessionStorage.removeItem('sara_refer');
}

export { isSafeRedirectUrl, replaceToLocationSafe, redirect };
