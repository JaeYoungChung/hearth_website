import React, { useEffect } from 'react';

function TermsUse() {
  useEffect(() => {
    // Check if the script is already present to avoid duplicates
    if (!document.getElementById('termly-jssdk')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = 'termly-jssdk';
      script.src = 'https://app.termly.io/embed-policy.min.js';
      
      // Append the script to the body
      document.body.appendChild(script);
    }

    // Clean up by removing the script when component unmounts
    return () => {
      // Note: You might not want to remove the script immediately if other pages use it
      document.getElementById('termly-jssdk')?.remove();
    };
  }, []);

  return (
    <div>
      <h1>Terms of Use</h1>
      <div name="termly-embed" data-id="cb44745d-fa6f-477e-9e22-d581a5d1fa21"></div>
    </div>
  );
}

export default TermsUse;
