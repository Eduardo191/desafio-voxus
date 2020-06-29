import React, { useState } from 'react'
import api from '../../services/api'
import './styles.css'

export default function UploadForm() {
  const [file, setFile] = useState('')

  async function handleUpload(e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append('file', file)

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    api.post("/upload", formData, config).then((response) => {
      alert("The file is successfully uploaded");
      }).catch((error) => {
        console.log(error)
    })

  }

  function onChange(e) {
    setFile(e.target.files[0])
  }

  return (
    <div className="content">
      <form className="uploadForm" method="post" encType="multipart/form-data" onSubmit={handleUpload}>
        <input type="file" name="file" onChange={onChange} />
        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}