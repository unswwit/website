const axios = require('axios');
const config = require('./config');

const validateRecaptcha = async (request, response) => {
    // extract token from request
    const {
        captchaToken
    } = request.body;

  const result = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${config.captcha.key}&response=${captchaToken}`
  );

  if (result.data.success){
    console.log('Verified');
    response.status(200).json({});
  }
  else {
    console.error('Verification failed.');
    response.status(403).json({});
  }
}

module.exports = { validateRecaptcha }