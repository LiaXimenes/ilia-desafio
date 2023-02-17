import "./setup";
import app from "./app";
// import { init } from "./app"

const port = process.env.PORT;

// init().then(() => {
//     app.listen(port, () => {
//       console.log(`Server is listening on port ${port}.`);
//     });
//   });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});
