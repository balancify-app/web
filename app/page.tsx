import { auth, currentUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  return (
    <div>
      <h1>Username: </h1>
      <p>{JSON.stringify(user)}</p>
      <UserButton />
    </div>
  );
}
