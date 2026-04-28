const raw = '{"id": 1, "name": "A"}';

const riskyUser = JSON.parse(raw) as { id: number; name: string }; // not appropriate way to give types

console.log(riskyUser.name);

// you should aLways check the type first then use

type User10 = { id: number; name: string };

function isUser(v: unknown): v is User10 {
    return (
        typeof v === "object" && v !== null && "id" in v &&
        typeof (v as any).id === "number" && "name" in v &&
        typeof (v as any).name === "string"
    );
}

const maybe = JSON.parse(raw) as unknown;
if (isUser(maybe)) {
    console.log(maybe.name);
}