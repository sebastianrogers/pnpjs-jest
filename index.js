const pnp = require("@pnp/sp-commonjs");
const client = require("@pnp/nodejs-commonjs");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// we call setup to use the node client
pnp.sp.setup({
  sp: {
    fetchClientFactory: () => {
      return new client.SPFetchClient(
        process.env.SP_URL,
        process.env.SP_CLIENT_ID,
        process.env.SP_CLIENT_SECRET
      );
    }
  }
});

async function makeRequest() {
  // make a request to get the web's details
  const w = await pnp.sp.web();
  console.log(JSON.stringify(w, null, 2));
}

// get past no await at root of app
makeRequest();
