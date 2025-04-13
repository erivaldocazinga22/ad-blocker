const adSelectors = [
    '[id^="ad-"]',
    '[class*="ad-"]',
    '[class*="ads"]',
    '[class*="advert"]',
    'iframe[src*="ads"]',
    'iframe[src*="doubleclick"]',
    'iframe[src*="googlesyndication"]'
  ];
  
  function removeAds() {
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.remove();
      });
    });
  }
  
  removeAds();
  const observer = new MutationObserver(removeAds);
  observer.observe(document.body, { childList: true, subtree: true });
  