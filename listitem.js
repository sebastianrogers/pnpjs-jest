const pnp = require("@pnp/sp-commonjs");

const getListItemWithAuthor = async function(listTitle, itemId) {
  return await pnp.sp.web.lists
    .getByTitle(listTitle)
    .items.getById(itemId)
    .expand("Author")
    .select("*,Author/Id,Author/Title,Author/Name,Author/EMail")
    .get();
};

module.exports = getListItemWithAuthor;
