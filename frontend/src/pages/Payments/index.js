import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

export default function Payments() {
  const [payments, setPayments] = useState([])
  const history = useHistory()

  useEffect(() => {
    api.get('/payments').then(response => {
      setPayments(response.data)
    })
  }, [])

  async function handleDeletePayment(id) {
    try {
      await api.delete(`/payments/${id}`)

      setPayments(payments.filter(payment => payment.id !== id))
    } catch (err) {
      alert('Erro ao deletar mensagem, tente novamente')
    }
  }

  function handlePushForm(id, title, value, date, comments) {
    localStorage.setItem('paymentId', id)
    localStorage.setItem('paymentTitle', title)
    localStorage.setItem('paymentValue', value)
    localStorage.setItem('paymentDate', date)
    localStorage.setItem('paymentComments', comments)
    history.push('/form')
  }

  return (
    <div className="content">
      <h1>Seja bem vindo(a) a Voxus</h1>
      <button className="button" type="button" onClick={() => history.push('/create')}>Adicionar novo pagamento</button>
      
      <h2>Pagamentos:</h2>

      <ul>
        {payments.map((payment) => {
          return (
            <li className="payment" key={payment.id}>
              <p>ID: {payment.id}</p>
              <p>Título: {payment.title}</p>
              <p>Valor: {payment.value}</p>
              <p>Data: {payment.date}</p>
              <p>Taxa externa: {payment.external_tax}</p>
              <p>Observações: {payment.comments}</p>
              <button className="button" type="button" onClick={() => handleDeletePayment(payment.id)}>Deletar</button>
              <button 
                className="button" 
                type="button" 
                onClick={() => handlePushForm(payment.id, payment.title, payment.value, payment.date, payment.comments)}
              >
                Alterar
              </button>
            </li>
          )
        })}

      </ul>
    </div>
  )
}