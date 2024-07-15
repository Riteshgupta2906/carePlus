import { ID, Query } from "node-appwrite";
import { users } from "./appwrite.config";

import { parseStringify } from "./utils";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  //console.log(users);
  try {
    // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    //console.log(newuser);
    return parseStringify(newuser);
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser.users[0];
    }
    console.log(error);
    console.error("An error occurred while creating a new user:", error);
  }
};
