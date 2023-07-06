import { useLocation } from 'react-router-dom'
import { PDFViewer} from '@react-pdf/renderer'
import PdfDepositSlip from '../../components/PdfDepositSlip';
import DownloadPdfBtn from '../../components/DownloadPdfBtn';

const ViewerSlip = () => {

  const data = useLocation().state

  return (
    <>
      <PDFViewer showToolbar={false} style={{width: '100%', height: '90vh'}}>
        <PdfDepositSlip data={data}/>
      </PDFViewer>

      <DownloadPdfBtn pdfComponent={<PdfDepositSlip data={data} />} pdfName={'slip'}/>
    </>
  )
}

export default ViewerSlip