import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 overflow-auto bg-white w-full">
          <div className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b px-4 sm:px-6 bg-white w-full">
            <SidebarTrigger />
            <div className="flex-1" />
          </div>
          <div className="py-8 px-4 md:px-6 bg-white w-full">
            <div className="space-y-6 max-w-7xl mx-auto">{children}</div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
