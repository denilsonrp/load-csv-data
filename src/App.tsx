import './App.css'
import Dropzone from 'react-dropzone'
import Papaparse from 'papaparse'

function App() {
  function parseCSV(files: any) {    
    Papaparse.parse(files[0], {
      header: true,
      complete: (results) => {
        console.log(results.data)
      }
    })    
  }

  return (
    <Dropzone onDrop={files => parseCSV(files)}>
      {({getRootProps, getInputProps}) => (
        <div className="container-input" {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      )}
    </Dropzone>
  )
}

export default App;
