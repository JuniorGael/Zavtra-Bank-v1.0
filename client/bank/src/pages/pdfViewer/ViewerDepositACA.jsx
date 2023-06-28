import { useLocation } from 'react-router-dom'
import { PDFViewer} from '@react-pdf/renderer'
import PdfDepositACA from '../../components/PdfDepositACA';
import DownloadPdfBtn from '../../components/DownloadPdfBtn';

const ViewerDepositACA = () => {

  const data = useLocation().state

  return (
    <>
      <PDFViewer showToolbar={false} style={{width: '100%', height: '90vh'}}>
        <PdfDepositACA data={data}/>
      </PDFViewer>

      <DownloadPdfBtn pdfComponent={<PdfDepositACA data={data} />} pdfName={'deposit_aca'}/>
    </>
  )
}

export default ViewerDepositACA