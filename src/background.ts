/// <reference types="chrome"/>
// Background service worker
console.log("Discount Compiler: Background service worker started");

// Listen for extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  
  // Set default storage values
  chrome.storage.local.set({
    totalSavings: 0,
    discountsApplied: 0,
    studentVerified: false
  });
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "discountFieldDetected") {
    // Show badge when discount field is detected
    if (sender.tab?.id) {
      chrome.action.setBadgeText({ 
        text: "!", 
        tabId: sender.tab.id 
      });
      chrome.action.setBadgeBackgroundColor({ 
        color: "#9b87f5",
        tabId: sender.tab.id 
      });
    }
  }
  
  if (request.action === "savingsUpdate") {
    // Update total savings in storage
    chrome.storage.local.get(["totalSavings", "discountsApplied"], (result) => {
      chrome.storage.local.set({
        totalSavings: (result.totalSavings || 0) + request.amount,
        discountsApplied: (result.discountsApplied || 0) + 1
      });
    });
  }
  
  return true;
});

// Handle tab updates to check for shopping sites
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    // Check if it's a shopping site
    const shoppingSites = ['amazon', 'ebay', 'walmart', 'target', 'bestbuy'];
    const isShoppingSite = shoppingSites.some(site => tab.url?.includes(site));
    
    if (isShoppingSite) {
      // Send message to content script to check for discounts
      chrome.tabs.sendMessage(tabId, { action: "checkDiscounts" });
    }
  }
});
