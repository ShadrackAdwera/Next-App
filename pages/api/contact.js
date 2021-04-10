import { MongoClient } from 'mongodb';

const handler = async(req, res) => {
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
    let client;
    try {
      client =  await MongoClient.connect(process.env.DB_URL)
    } catch (error) {
      res.status(500).json({message: error.message || 'An error occured, try again'});
      return;
    }
    
    try {
     const db = client.db();
     await db.collection('next-blog').insertOne(info);
     client.close();
    } catch (error) {
      client.close();
      res.status(500).json({message: error.message || 'An error occured, try again'});
      return; 
    }
    res.status(201).json({message: 'Message sent!'});
  }
};

export default handler;
