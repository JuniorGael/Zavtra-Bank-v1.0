import { useLocation } from 'react-router-dom'
import { PDFViewer} from '@react-pdf/renderer'
import PdfDebt from '../../components/PdfDebt';
import DownloadPdfBtn from '../../components/DownloadPdfBtn';

const ViewerDebt = () => {

  const data = useLocation().state

  return (
    <>
      <PDFViewer showToolbar={false} style={{width: '100%', height: '90vh'}}>
        <PdfDebt data={data}/>
      </PDFViewer>

      <DownloadPdfBtn pdfComponent={<PdfDebt data={data} />} pdfName={'debt'}/>
    </>
  )
}

export default ViewerDebt
