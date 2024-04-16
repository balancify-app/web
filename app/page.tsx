import { auth, currentUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  const user = currentUser();

  return (
    <div>
      <h1>Username: </h1>
      <UserButton />
    </div>
  );
}
