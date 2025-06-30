// Utility to debug font loading issues
export const debugFonts = () => {
  if (typeof window === 'undefined') return;

  console.log('=== Font Debug Info ===');

  // Check if fonts are available
  const fonts = ['Times New Roman', 'Times', 'Dancing Script', 'serif', 'cursive'];

  fonts.forEach((font) => {
    const isAvailable = document.fonts.check(`12px ${font}`);
    console.log(`${font}: ${isAvailable ? '✅ Available' : '❌ Not available'}`);
  });

  // Check current font
  const bodyStyle = window.getComputedStyle(document.body);
  console.log('Current body font:', bodyStyle.fontFamily);

  // Check font loading status
  if ('fonts' in document) {
    console.log('Font Loading API supported');
    document.fonts.ready.then(() => {
      console.log('All fonts loaded');
    });
  } else {
    console.log('Font Loading API not supported');
  }
};

// Function to force font reload
export const reloadFonts = () => {
  if (typeof window === 'undefined') return;

  // Force browser to reload fonts
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Times New Roman';
      src: local('Times New Roman');
    }
    @font-face {
      font-family: 'Dancing Script';
      src: local('Dancing Script');
    }
  `;
  document.head.appendChild(style);

  // Remove after a short delay
  setTimeout(() => {
    document.head.removeChild(style);
  }, 100);
};
