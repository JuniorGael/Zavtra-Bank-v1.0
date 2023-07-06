import { downloadPdf } from "../utils/func"


const DownloadPdfBtn = ({pdfComponent, pdfName}) => {
  return (
    <button style={{width: "fit-content", margin: '10px auto' }} onClick={() => downloadPdf(pdfComponent, pdfName)} className='btn'>Telecharger en PDF</button>
  )
}

export default DownloadPdfBtn