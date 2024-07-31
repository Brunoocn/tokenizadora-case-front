import PageHeader from "@/components/header";

export default function OperationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader />
      <div className="h-[1px] bg-gray-5 "></div>
      <main className="mx-[100px] mt-[24px]">{children}</main>
    </>
  );
}
