import ContentBlock from "@/components/content-block";
import H1 from "@/components/h1";
import SignOutButton from "@/components/sign-out-button";
import { auth } from "@/lib/auth-no-edge";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main>
      <H1 className="my-8 text-white">Your Account</H1>

      <ContentBlock className="h-[500px] flex flex-col gap-y-3 justify-center items-center">
        <p>Logged in as {session.user.email}</p>
        <SignOutButton />
      </ContentBlock>
    </main>
  );
}
