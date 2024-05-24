chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (
      details.url.includes("blok%3A%2F%2F") ||
      details.url.startsWith("blok://")
    ) {
      const block = details.url
        .replace(/.*blok%3A%2F%2F/, "")
        .replace("blok://", "")
        .split("&")[0];
      const redirectUrl = `https://blokblokblok.xyz/${block}`;
      return { redirectUrl: redirectUrl };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
