export function isMobile() {
    // Check if the user's device is a mobile device
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    }
    return false;
  }
  
  export async function checkBandwidth() {
    // Check user's bandwidth
    const bandwidthTestImage = 'https://www.gstatic.com/webp/gallery3/1.png';
    const startTime = performance.now();
    try {
      const response = await fetch(bandwidthTestImage, { mode: 'no-cors' });
      const data = await response.arrayBuffer();
      const endTime = performance.now();
      const duration = endTime - startTime;
      const bps = data.byteLength / (duration / 1000);
      const kbps = bps / 1000;
      if (kbps < 50) {
        return 'low';
      } else {
        return 'high';
      }
    } catch(error) {
      console.error('Error while checking network speed', error);
      return 'high';
    }
  }
  