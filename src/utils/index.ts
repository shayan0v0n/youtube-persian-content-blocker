import { persianLettersRegex } from "../constants/regexes";
import { makeElementInvisible } from "./accessElement";
import { validSites } from "../constants/uri";

export const blockPosts = () => {
  if (chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];

      if (tab.id && validSites.includes(tab.url!)) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id! },
          func: () => {
            const posts = document.querySelectorAll("#content");
            posts.forEach((post: any) => {
              const postContent =
                post.querySelector("#video-title")?.textContent;
              const persianLettersRegex = /[\u0600-\u06FF]/;
              if (persianLettersRegex.test(postContent)) {
                post.style.visibility = "hidden";
                post.style.position = "absolute";
                post.style.opacity = "0";
              }
            });
          },
        });
      }
    });
  }
};
