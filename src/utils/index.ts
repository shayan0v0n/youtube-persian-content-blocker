import { validSite } from "../constants/uri";

export const blockPosts = () => {
  if (chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];

      if (tab.id && validSite.test(tab.url!)) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id! },
          func: () => {
            const isSearchPostsActive = true;
            const isExplorerPostsActive = true;
            const persianLettersRegex = /[\u0600-\u06FF]/;

            if (isExplorerPostsActive) {
              const posts = document.querySelectorAll("#primary #content");
              posts.forEach((post: any) => {
                const postContent =
                  post.querySelector("#video-title")?.textContent;
                if (persianLettersRegex.test(postContent)) {
                  post.style.visibility = "hidden";
                  post.style.position = "absolute";
                  post.style.opacity = "0";
                }
              });
            }

            if (isSearchPostsActive) {
              const posts = document.querySelectorAll("#primary #dismissible");
              posts.forEach((post: any) => {
                const postContent =
                  post.querySelector("#video-title")?.textContent;
                if (persianLettersRegex.test(postContent)) {
                  post.style.visibility = "hidden";
                  post.style.position = "absolute";
                  post.style.opacity = "0";
                }
              });
            }
          },
        });
      }
    });
  }
};
