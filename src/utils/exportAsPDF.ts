import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";

/**
 * Utility to capture a DOM element as an image and embed it into a downloadable PDF.
 * @param element - The HTML element to be captured (cardRef.current)
 */
export const exportAsPDF = async (element: HTMLElement | null): Promise<void> => {
  if (!element) {
    throw new Error("Element not found for PDF export.");
  }

  try {
    // 1. Capture the element as a high-quality PNG
    const dataUrl = await toPng(element, { 
      quality: 1, 
      pixelRatio: 3 // Higher ratio for print-quality PDF
    });

    // 2. Initialize jsPDF (Portrait, Millimeters, A4 size)
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // 3. Calculate scaling to fit the image on the A4 page
    const imgProps = pdf.getImageProperties(dataUrl);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    // 4. Add the image to the PDF (Positioned at top-left: 0, 0)
    pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);

    // 5. Trigger download
    pdf.save("profile-card.pdf");

  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
};