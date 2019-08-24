import jwt from 'jsonwebtoken';

// middleware to verify token for users
const authorization = (req, res, next) => {
  const { headers } = req;
  const token = headers.authorization || headers['x-access-token'] || req.body.token;
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) return res.status(403).json({ message: 'Invalid Token' });
        return next();
      });
  } else {
    res.status(401).json({ message: 'Token not provided' });
  }
}


export default authorization;
