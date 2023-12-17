
const jwt=require('jsonwebtoken');

const requireAuthentication = (req, res, next) => {
    if (req.session.user) {
      return next();
    } else {
      return res.redirect('/login.html'); // Redirect to the login page
    }
  };
  
  const authenticateToken = (req, res, next) => {
    // const token = req.header('Authorization');
    const token = req.cookies.token;
    console.log('Received Token:', token);
    if (!token) return res.status(401).send('Unauthorized');
  
    jwt.verify(token, 'myuser', (err, user) => {
      if (err) return res.status(403).send('Forbidden');
      req.user = user;
      console.log('User:', req.user);
      next();
    });
  };

  module.exports = {
    requireAuthentication,authenticateToken,
  };