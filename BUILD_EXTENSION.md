# Building the Chrome Extension

## Steps to build and load the extension:

1. **Build the extension:**
   ```bash
   npm run build
   ```

2. **Load in Chrome:**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `dist` folder from your project

3. **Test the extension:**
   - Click the extension icon in Chrome toolbar
   - Navigate to shopping sites to see discount detection
   - Check the popup for available discounts

## Project Structure:

- `manifest.json` - Extension configuration
- `popup.html` - Extension popup UI
- `src/popup.tsx` - Popup React entry point
- `src/content.ts` - Content script (runs on web pages)
- `src/background.ts` - Background service worker
- `src/components/ExtensionPopup.tsx` - Main popup component

## Development workflow:

1. Make changes to code
2. Run `npm run build`
3. Click reload icon on extension card in `chrome://extensions/`
4. Test changes

## Key Chrome APIs used:

- `chrome.storage.local` - Store extension data
- `chrome.tabs` - Access tab information
- `chrome.runtime` - Message passing between scripts
- `chrome.action` - Control extension icon/badge
