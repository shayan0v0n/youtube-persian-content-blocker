import { persianAlphabets } from "../constants/alphabets";
import { validSites } from "../constants/uri";
import { makeElementInvisible } from "./accessElement";

export const blockPosts = () => {
  if (chrome.tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];

      if (tab.id && validSites.includes(tab.url!)) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id! },
          func: () => {
            const selectElement = document.getElementById(".primary");

            makeElementInvisible(selectElement!);
          },
        });
      }
    });
  }
};
