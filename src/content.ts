/// <reference types="chrome"/>
// Content script - runs on web pages
console.log("Discount Compiler: Content script loaded");

// Listen for messages from popup or background
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "checkDiscounts") {
    // Get current page info
    const pageUrl = window.location.href;
    const pageTitle = document.title;
    
    // Send back page info
    sendResponse({
      url: pageUrl,
      title: pageTitle,
      discountsFound: true
    });
  }
  
  if (request.action === "applyDiscount") {
    // Apply discount code to page
    console.log("Applying discount:", request.code);
    // Add logic to find and fill discount input fields
    sendResponse({ success: true });
  }
  
  return true; // Keep message channel open for async response
});

// Auto-detect discount input fields
function detectDiscountFields() {
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach((input) => {
    const placeholder = input.getAttribute('placeholder')?.toLowerCase() || '';
    const name = input.getAttribute('name')?.toLowerCase() || '';
    const id = input.getAttribute('id')?.toLowerCase() || '';
    
    if (placeholder.includes('coupon') || placeholder.includes('promo') || 
        name.includes('coupon') || name.includes('promo') ||
        id.includes('coupon') || id.includes('promo')) {
      // Found a discount field
      chrome.runtime.sendMessage({ 
        action: "discountFieldDetected",
        field: input 
      });
    }
  });
}

// Run detection when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', detectDiscountFields);
} else {
  detectDiscountFields();
}
