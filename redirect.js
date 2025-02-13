if (window.location.hostname.endsWith("github.io")) {
    const newHost = window.location.hostname.replace("github.io", "vercel.app");
    window.location.href = window.location.href.replace(window.location.hostname, newHost);
}