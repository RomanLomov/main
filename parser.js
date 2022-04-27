window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
    let textNodes = [];
    
    function recursy (element) { 
      element.childNodes.forEach(node => {
      
        if (node.nodeName.math(/^H\d/)) {
          const obj = { 
            header: node.nodeName,
            content: node.textContent
          };
          textNodes.push(obj);
        } else {
           recursy(node);
        }   
      });  
    }
    
    recursy(body);
