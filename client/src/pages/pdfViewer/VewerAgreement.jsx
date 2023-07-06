import { useLocation } from 'react-router-dom'
import { PDFViewer} from '@react-pdf/renderer'
import PdfDepositAgreement from '../../components/PdfDepositAgreement';
import DownloadPdfBtn from '../../components/DownloadPdfBtn';

const ViewerAgreement = () => {

  const data = useLocation().state

  return (
    <>
      <PDFViewer showToolbar={false} style={{width: '100%', height: '90vh'}}>
        <PdfDepositAgreement data={data} />
      </PDFViewer>

      <DownloadPdfBtn pdfComponent={<PdfDepositAgreement data={data} />} pdfName={'deposit_agreement'}/>
    </>
  )
}

export default ViewerAgreement