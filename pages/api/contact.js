const handler = (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
        res.status(422).json({message: 'Invalid inputs'});
        return;
    }
    const info = { name,email, message };
    console.log(info);
    res.status(201).json({message: 'Message sent!'});
  }
};

export default handler;
