import * as sdk from "node-appwrite";

// export const {
//   PROJECT_ID,
//   API_KEY,
//   DATABASE_ID,
//   PATIENT_COLLECTION_ID,
//   DOCTOR_COLLECTION_ID,
//   APPOINTMENT_COLLECTION_ID,
//   NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
//   NEXT_PUBLIC_ENDPOINT: ENDPOINT,
// } = process.env;
console.log(process.env.API_KEY);
const PROJECT_ID = "6690bdd2002d757b64c4";
const API_KEY =
  "30a26c055aa8447bd16961922f30aaac653ba6c304feb12018a1cd27775047a0d46f3533951e4dc051795968f26b7fe32a0f5a7f4793e1785424ff00188042c6bdc22dc9df341c3fcb2137f781291159b53bd90f005351cf6e92a4af8e145722c37223e88e8a1b0a8746e1938d376473c2d0e117c5bbd70ee3609304340a7309";
const DATABASE_ID = "6690be9e0022716d6d83";
const PATIENT_COLLECTION_ID = "6690bec6000066e90c18";
const DOCTOR_COLLECTION_ID = "6690bf3200074b86a329";
const APPOINTMENT_COLLECTION_ID = "6690bf78002d5d9e8abd";
const NEXT_PUBLIC_BUCKET_ID = "6690bfb9001073746479";
const NEXT_PUBLIC_ENDPOINT = "https://cloud.appwrite.io/v1";
const client = new sdk.Client();
client
  .setEndpoint(NEXT_PUBLIC_ENDPOINT!)
  .setProject(PROJECT_ID!)
  .setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
