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

  useEffect(() => {
    setTitle(localStorage.getItem('paymentTitle'))
    setValue(localStorage.getItem('paymentValue'))
    setDate(localStorage.getItem('paymentDate'))
    setComments(localStorage.getItem('paymentComments'))
  }, [])

  async function handleSubmitPayment(e) {
    e.preventDefault()
    const paymentId = localStorage.getItem('paymentId')

    const data = {
      title,
      value,
      date,
      comments
    }

    await api.patch(`/payments/${paymentId}`, data)
    history.push('/');
  }

  return (
    <div className="content">
      <form className="form" onSubmit={handleSubmitPayment}>
        <h1>Altere os campos desejados</h1>
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

        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}