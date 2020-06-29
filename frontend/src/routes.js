import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

import Payments from './pages/Payments'
import NewAccount from './pages/NewAccount'
import PaymentForm from './pages/PaymentForm'
import CreateForm from './pages/CreateForm'
import UploadForm from './pages/UploadForm'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Payments} />
        <Route path="/form" component={PaymentForm} />
        <Route path="/create" component={CreateForm} />
        <Route path="/upload" component={UploadForm} />
      </Switch>
    </BrowserRouter>
  )
}