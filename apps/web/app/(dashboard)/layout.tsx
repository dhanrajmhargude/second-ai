import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-[#F8F5EF]">
      <Sidebar />

      <section className="flex-1 overflow-auto">
        {children}
      </section>
    </main>
  );
}