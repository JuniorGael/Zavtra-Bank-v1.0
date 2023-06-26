import { useLocation } from 'react-router-dom'
import { PDFViewer} from '@react-pdf/renderer'
import PdfDepositSlip from '../../components/PdfDepositSlip';

const ViewerSlip = () => {

  const data = useLocation().state
  // const [file, setFile] = useState(null)

	// const [instance, updateInstance] = usePDF({
  //   document: <PdfTemplate1 data={data} />,
  // });

  // const blobToFile = async () => {
  //   try {
  //     const blob = await pdf(<PdfTemplate1 data={data} />).toBlob()
  //     const url = URL.createObjectURL(blob)
  //     const f = new File([url], 'formulaire.pdf')
  //     setFile(f)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


	// useEffect(()=> {
	// 	updateInstance()

	// }, [])

  return (
    <PDFViewer showToolbar={false} style={{width: '100%', height: '90vh'}}>
      <PdfDepositSlip data={data}/>
    </PDFViewer>
  )
}

export default ViewerSlip