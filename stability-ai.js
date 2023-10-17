const axios = require('axios');


// Example Text to Image API call
const headers = {
  'Host': 'api.stability.ai',
  'Authorization': 'Bearer sk-GqAG2qyunS6JlOpOkkw39yc043D8NmPSwkYMRth97etgK4iz',
  'Content-Type': 'application/json',
  'Content-Length': '119',
  'Accept-Encoding': 'gzip',
  'User-Agent': 'okhttp/5.0.0-alpha.10',
};

const data = {
  cfg_scale: 7,
  height: 512,
  samples: 1,
  seed: 0,
  steps: 10,
  text_prompts: [{ text: '1girl', weight: 1.0 }],
  width: 512,
};

axios.post('https://api.stability.ai/v1/generation/stable-diffusion-xl-beta-v2-2-2/text-to-image', data, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
