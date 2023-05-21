const express = require("express");
const port = 3000;
const app = express();
const firebaseapp = require('./config')
const { getDatabase, ref, child, get } = require("firebase/database");

app.use(express.json());

app.get("/home1", async (req, res)=> {
  const dbRef = ref(getDatabase());
  let hall = await (await get(child(dbRef, `home1/hall`))).val()
  let room = await (await get(child(dbRef, `home1/room`))).val()
  let kitchen = await (await get(child(dbRef, `home1/kitchen`))).val()

  res.json({
    'room':room,
    'hall': hall,
    'kitchen': kitchen
  });

});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
