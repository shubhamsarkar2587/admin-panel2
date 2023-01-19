import pdfFile from '../../assets/sample.pdf';

const PdfViewer = ({ isPdfOpen }) => {
	return isPdfOpen
		? (
			<div className="my-6">
				<iframe title="head" src={pdfFile} width="100%" height="700px" />
			</div>
		)
		: null;
};

export default PdfViewer;
