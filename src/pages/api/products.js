// User: master-tech   pass: K4QhoBCbnA75AHu0

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://master-tech:K4QhoBCbnA75AHu0@cluster0.5xecsyp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();

    const productCollection = client.db("master-tech").collection("products");

    if (req.method === "GET") {
      const products = await productCollection.find({}).toArray();
      res.send({ message: "Success", statur: 200, data: products });
    }
    if (req.method === "POST") {
      const products = req.body;
      const result = await productCollection.insertOne(products);
      res.send(result);
    }
  } finally {
  }
}
// run().catch(console.dir);
export default run;
