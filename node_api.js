
// Exposing an Endpoint in our server



var fetch = require("node-fetch");
var express = require("express");
var app = express();
const titleIwant = 'accusamus beatae ad facilis cum similique qui sunt';
const upstream_Server = 'https://jsonplaceholder.typicode.com'

  
/* Task 1
- Look for a specific title in [{...}]
- Fetch the photo API
- https://jsonplaceholder.typicode.com/photos
- Look for a specific tile
- Send back a response (JSON with the data)
*/


app.get("/photos", async (req, res) => {
  const response = await fetch(upstream_Server + req.path);
  const data = await response.json();
  data.forEach((item) => {
    if (item.title === titleIwant) {
      res.json({
        title: item.title,
        url: item.url,
        id: item.id
      })
    }
  });
  res.send("Error: title not found")
});


/*

Step 2:
if i understood correctly because i do not have ReadMe file any more but AFAIK task was
i.e., pass id as param and return related data

e.g.,
Upstream server API implementation https://jsonplaceholder.typicode.com/photos?id=1

My designed API usage: <server_url/photos/id>

*/
app.get("/photos/:id", async (req, res) => {
  const response = await fetch("https://jsonplaceholder.typicode.com" + "/photos?id=" + req.params.id);
  const data = await response.json();
  res.send(data)
});

app.listen(8080, () => {
  console.log(`Example app listening on port ${8080}`);
});


