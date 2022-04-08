function redirect() {
    const url = sessionStorage.getItem('sara_refer')
    setTimeout(() => location.replace(url || 'https://web-tech-tw.github.io'), 500);
}

export { redirect };
