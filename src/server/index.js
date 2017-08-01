const express = require('express');
const app = express();
const request = require('request');

app.get("/", (req, res) => {
  const numberRegex = /http:\/\/services\.runescape\.com\/m=itemdb_oldschool\/a=1\/(1501497033562)_obj_big\.gif\?id=/g;
  request('http://services.runescape.com/m=itemdb_oldschool/a=1/Zulrah\'s_scales/viewitem?obj=12934', (err, data, body) => {
    const output = numberRegex.exec(body);
    res.send(output[1]);
  });
});

app.listen(8000);
