import { toPng } from 'html-to-image';

/**
 * Utility to capture a DOM element and trigger a PNG download.
 * @param element - The HTML element to be captured (retrieved from cardRef.current)
 */
export const exportAsImage = async (element: HTMLElement | null): Promise<void> => {
  if (!element) {
    throw new Error("Element not found for export.");
  }

  try {
    // Convert the DOM element to a Base64 data URL
    // We include a cache-busting timestamp and a high quality scale if needed
    const dataUrl = await toPng(element, { 
      cacheBust: true,
      quality: 1,
      pixelRatio: 2 // Increases resolution for a crisp, professional look
    });

    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.download = 'profile-card.png';
    link.href = dataUrl;
    
    // Append to body, click, and cleanup
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  } catch (error) {
    console.error('Error exporting image:', error);
    throw error;
  }
};