import { Database } from "lucide-react";
import { UserMenu } from "./UserMenu";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-800 to-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - Left */}
          <div className="flex items-center">
            <img 
              src="/logo-arta-pupr.png" 
              alt="ARTA PUPR Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Right Section - Badge & User Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 bg-white/10 px-4 py-2.5 rounded-lg backdrop-blur-sm border border-white/10">
              <Database className="w-5 h-5 text-blue-300" />
              <div className="text-right">
                <p className="text-xs text-blue-200 leading-tight">LATSAR CPNS</p>
                <p className="text-sm font-medium leading-tight">Aktualisasi</p>
              </div>
            </div>
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
