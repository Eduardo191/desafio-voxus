const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    let {
      title,
      value,
      date,
      comments
    } = req.body

    const external_tax = value * 0.05

    if (!comments) {
      comments = ''
    }

    if (title.length < 5 || title.length > 100) {
      return res.status(401).json({ error: 'The title must be between 5 and 100 characters'})
    }

    const [id] = await connection('payments').insert({
      title,
      value,
      date,
      external_tax,
      comments,
    })

    return res.json({ id, message: 'Payment created' })
  },
  async index(req, res) {
    const payments = await connection('payments').select('*')

    return res.json(payments)
  },
  async delete(req, res) {
    const { id } = req.params

    if (!id) {
      return res.status(401).json({ error: 'Operation not permitted.' })
    }

    await connection('payments').where('id', id).delete()

    return res.status(200).json({ message: 'Payment deleted' })
  },
  async update(req, res) {
    const { id } = req.params

    let {
      title,
      value,
      date,
      comments
    } = req.body

    if (!id) {
      return res.status(401).json({ error: 'Operation not permitted.' })
    }

    if (title) {
      if (title.length < 5 || title.length > 100) {
        return res.status(401).json({ error: 'The title must be between 5 and 100 characters'})
      }
    }

    await connection('payments').where('id', id).update({
      title,
      value,
      date,
      comments
    })

    return res.status(200).json({ message: 'Payment updated' })
  }
}