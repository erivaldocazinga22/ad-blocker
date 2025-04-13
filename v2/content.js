const adSelectors = [
    '[id*="ad"]',           
    '[class*="ad"]',         
    '[class*="sponsored"]',  
    '[id*="banner"]',        
    '[src*="ads"]',          
    '[src*="doubleclick"]',  
    '[src*="googleads"]',    
    '[class*="popup"]',      
    'iframe[src*="ads"]',    
    'div[class*="ad-"]',     
    'video[autoplay]'        
  ];
  
  function removeAds() {
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  }
  
  const observer = new MutationObserver(removeAds);
  observer.observe(document.body, { childList: true, subtree: true });
  
  removeAds();
  