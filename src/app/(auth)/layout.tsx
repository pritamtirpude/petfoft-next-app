import Logo from "@/components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-y-5 justify-center items-center w-full min-h-screen">
      <Logo />
      {children}
    </div>
  );
}
