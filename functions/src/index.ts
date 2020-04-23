import * as functions from 'firebase-functions';

export const myBot = functions.https.onRequest( (req, res) => {
  
    // Request from Slack
    const { challenge }  = req.body;
  
    // Response from You
    res.send({ challenge })
  
  });