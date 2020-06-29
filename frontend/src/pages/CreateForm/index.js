import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import api from '../../services/api'
import './styles.css'

export default function PaymentForm() {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  const [comments, setComments] = useState('')
  const history = useHistory()

  async function handleSubmitPayment(e) {
    e.preventDefault()

    const data = {
      title,
      value,
      date,
      comments
    }

    await api.post('/payments', data)
    history.push('/');
  }

  return (
    <div className="content">
      <form className="form" onSubmit={handleSubmitPayment}>
        <h1>Preencha os campos do pagamento</h1>
        <input
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          placeholder="Valor"
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        <input
          placeholder="Data"
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <input
          placeholder="Observações"
          value={comments}
          onChange={e => setComments(e.target.value)}
        />

        <button className="button" type="button" onClick={() => history.push('/upload')}>Upload de arquivo</button>
        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}