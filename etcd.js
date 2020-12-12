const { Etcd3 } = require("etcd3");
const client = new Etcd3();

(async () => {
  const fooValue = await client.get("TEST").string();
  console.log("foo was:", fooValue);
})();
