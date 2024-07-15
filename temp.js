const sdk = require("node-appwrite");

const client = new sdk.Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("6690bdd2002d757b64c4") // Your project ID
  .setKey(
    "30a26c055aa8447bd16961922f30aaac653ba6c304feb12018a1cd27775047a0d46f3533951e4dc051795968f26b7fe32a0f5a7f4793e1785424ff00188042c6bdc22dc9df341c3fcb2137f781291159b53bd90f005351cf6e92a4af8e145722c37223e88e8a1b0a8746e1938d376473c2d0e117c5bbd70ee3609304340a7309"
  ); // Your secret API key

const users = new sdk.Users(client);

(async () => {
  try {
    const result = await users.create(
      sdk.ID.unique(), // userId
      "email@example.com", // email (optional)
      "+12065550100", // phone (optional)
      undefined, // password (optional)
      "ritesh" // name (optional)
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
})();
