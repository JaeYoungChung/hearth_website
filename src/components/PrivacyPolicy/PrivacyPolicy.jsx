import React, { useEffect } from 'react';
import './privacypolicy.css';

function PrivacyPolicy() {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'termly-jssdk';
    script.src = 'https://app.termly.io/embed-policy.min.js';
    
    // Append the script to the body
    document.body.appendChild(script);

    // Clean up by removing the script when component unmounts
    return () => {
      document.getElementById('termly-jssdk')?.remove();
    };
  }, []);

  return (
    <div>
      <h1>Privacy Policy</h1>
      <div name="termly-embed" data-id="565a43fa-de5e-4b24-8e21-92b615d094e4"></div>
    </div>
  );
}

export default PrivacyPolicy;
