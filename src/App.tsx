import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FormRegistrasi } from "@/components/FormRegistrasi";
import { DaftarArsip } from "@/components/DaftarArsip";
import { StatistikArsip } from "@/components/StatistikArsip";
import { LoginPage } from "@/components/LoginPage";
import { useArsip } from "@/hooks/useArsip";
import { useAuth, AuthProvider } from "@/hooks/useAuth";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormInput, List } from "lucide-react";

function AppContent() {
  const { arsipList, isLoaded, addArsip, deleteArsip } = useArsip();
  const { isAuthenticated, isLoading } = useAuth();

  const handleAddArsip = (arsipData: Parameters<typeof addArsip>[0]) => {
    addArsip(arsipData);
    toast.success("Arsip berhasil diregistrasi!", {
      description: `${arsipData.nomorSurat} - ${arsipData.judul}`,
    });
  };

  const handleDeleteArsip = (id: string) => {
    const arsip = arsipList.find((a) => a.id === id);
    if (arsip) {
      deleteArsip(id);
      toast.info("Arsip telah dihapus", {
        description: `${arsip.nomorSurat} - ${arsip.judul}`,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-pulse text-blue-600 font-medium">
          Memuat sistem...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-pulse text-blue-600 font-medium">
          Memuat data arsip...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Statistik */}
        <div className="mb-8">
          <StatistikArsip arsipList={arsipList} />
        </div>

        {/* Tabs for mobile-friendly layout */}
        <Tabs defaultValue="daftar" className="space-y-6 lg:hidden">
          <TabsList className="grid w-full grid-cols-2 bg-white border border-slate-200 p-1">
            <TabsTrigger value="daftar" className="flex items-center gap-2">
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Daftar Arsip</span>
              <span className="sm:hidden">Daftar</span>
            </TabsTrigger>
            <TabsTrigger value="registrasi" className="flex items-center gap-2">
              <FormInput className="w-4 h-4" />
              <span className="hidden sm:inline">Registrasi Baru</span>
              <span className="sm:hidden">Registrasi</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="daftar" className="space-y-6">
            <DaftarArsip arsipList={arsipList} onDelete={handleDeleteArsip} />
          </TabsContent>

          <TabsContent value="registrasi" className="space-y-6">
            <div className="max-w-2xl mx-auto">
              <FormRegistrasi onSubmit={handleAddArsip} />
            </div>
          </TabsContent>
        </Tabs>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <FormRegistrasi onSubmit={handleAddArsip} />
          </div>
          <div className="lg:col-span-2">
            <DaftarArsip arsipList={arsipList} onDelete={handleDeleteArsip} />
          </div>
        </div>
      </main>

      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
