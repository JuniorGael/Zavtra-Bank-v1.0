import { pdf } from "@react-pdf/renderer";

/**
 * @param {string} filename
 * @param {JSX.Element} template
 */
export const downloadPdf = async (template, filename) => {
  try {
    const blob = await pdf(template).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename + ".pdf";
    link.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.log(error);
  }
};
