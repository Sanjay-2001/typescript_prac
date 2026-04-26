type User = {
  id: number; // required
  name: string; // required
  email?: string; // optional (can be absent)
  readonly createdAt: Date; // cannot be reassigned
};

const user1: User = {
  id: 1,
  name: "sanjay",
  createdAt: new Date(),
};

const user2: User = {
  id: 2,
  name: "Sonu",
  email: "sonu@mail.com",
  createdAt: new Date(),
};

// user1.createdAt = new Date(); //Cannot assign to 'createdAt' because it is a read-only property.

type User2 = { email?: string }; // not mandatory
type User3 = { email: string | undefined }; // mandatory and needs any one of the types mentioned

type Count = { [k: string]: number }; // index signature -> {index: number}
type Count1 = Record<"likes" | "views" | "shares", number>; // <keys, value>

const c1: Count = { whatever: 1 };
const c2: Count1 = { likes: 1, views: 2, shares: 3 };