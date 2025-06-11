import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  return (
    <>
      <h1 className="h1-bold">Welcome</h1>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGNIN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form>
    </>
  );
}
