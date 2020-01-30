const client = require("@pnp/nodejs-commonjs");
const pnp = require("@pnp/sp-commonjs");
const getListItemWithAuthor = require("../listitem");

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

it("gets the default page with author information", async () => {
  const itemId = 1;
  const listItem = await getListItemWithAuthor("Pages", itemId);

  expect(listItem.ID).toBe(itemId);
  expect(listItem.Author.Id).toBeTruthy();
});
