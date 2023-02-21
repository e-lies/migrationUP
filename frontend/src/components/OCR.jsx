import React, { useEffect, useState, useCallback } from 'react';
import { createWorker } from 'tesseract.js';
import {Dialog, TextField, Button} from "@material-ui/core"
import {useDropzone} from 'react-dropzone'
import PropTypes from "prop-types";
/**
 * Component that opens up a dialog in which the user can upload an image containing text to be detected by an OCR engine
 */
function OCR({open, onValidate, onClose}) {
 // const [opened, setOpened] = useState(open);
  const [ocr, setOcr] = useState('');
 /* useEffect(() => {
    setOpened(open)
  }, [open])*/
// Dropzone
const worker = createWorker({
  logger: () => {} //console.log(m),
});

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
  const onDrop = useCallback(acceptedFiles => {
    toBase64(acceptedFiles[0]).then(async img => {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(img);
      setOcr(ocr+text);
    })
  }, [ocr])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="App">
      <Dialog open={open} onClose={() => onClose()}>
      <div style={{
        margin: 20, width: "80%", alignSelf: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'
      }}><div  {...getRootProps()}>
      <input {...getInputProps()} />
      <Button variant="contained" style={{ margin: 10}} size="small" color={isDragActive ? "secondary" : "primary"}>
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
      </Button>
    </div>
    <TextField fullWidth style={{margin: 10}} value={ocr} multiline onChange={event => {
      event.persist();
      setOcr(event.target.value)
    }} />
    <Button color="primary" variant="contained" style={{margin: 10, alignSelf:'center'}} onClick={() => {
      onValidate(ocr);
      onClose()
    }}>Confirmer</Button></div>
      </Dialog>
    </div>
  );
}
OCR.propTypes = {
  /**
   * Whether the dialog is opened or closed
   */
  open: PropTypes.bool.isRequired,
  /**
   * Callback fired whenever the submit button is clicked
   */
  onValidate: PropTypes.func.isRequired,
  /**
  * Function for the parent to close the dialog
  */
  onClose: PropTypes.func.isRequired,
}
/*OCR.defaultProps = {
  open: false,
  onValidate: () => {}
}*/
export default OCR;