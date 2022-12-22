import axios from 'axios'

export const sendContactEmail = async (name, senderMail, content) => {
  const data = {
    name,
    senderMail,
    content,
  }

  try {
    const res = await axios.post('/api/contacts', data)
    return res
  } catch (err) {
    console.error(err)
  }
}
