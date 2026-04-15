import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { FolderArchive, Lock, User, Eye, EyeOff, Shield, Users, EyeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const success = await login(username, password);
    if (!success) {
      setError("Username atau password salah!");
    }

    setIsLoading(false);
  };

  const demoAccounts = [
    { role: "Admin", username: "admin", password: "admin123", desc: "Akses penuh" },
    { role: "User", username: "pegawai", password: "pegawai123", desc: "View, Create, Edit" },
    { role: "Viewer", username: "viewer", password: "viewer123", desc: "View only" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 p-4">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Login Form */}
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl shadow-lg">
                <FolderArchive className="w-10 h-10 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center text-slate-800">
              Sistem Registrasi Arsip Digital
            </CardTitle>
            <CardDescription className="text-center text-slate-500">
              Masukkan kredensial Anda untuk mengakses sistem
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-slate-700 font-medium">
                  Username
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    id="username"
                    placeholder="Masukkan username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    Memuat...
                  </span>
                ) : (
                  "Masuk"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Right Side - Demo Accounts */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              Hak Akses Pengguna
            </h2>
            <p className="text-slate-600">
              Sistem ini memiliki 3 level akses dengan hak berbeda:
            </p>
          </div>

          <div className="space-y-4">
            {demoAccounts.map((account, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => {
                  setUsername(account.username);
                  setPassword(account.password);
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        account.role === "Admin"
                          ? "bg-purple-100 text-purple-600"
                          : account.role === "User"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {account.role === "Admin" ? (
                        <Shield className="w-6 h-6" />
                      ) : account.role === "User" ? (
                        <Users className="w-6 h-6" />
                      ) : (
                        <EyeIcon className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-slate-800">
                          {account.role}
                        </h3>
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            account.role === "Admin"
                              ? "border-purple-300 text-purple-600"
                              : account.role === "User"
                              ? "border-blue-300 text-blue-600"
                              : "border-slate-300 text-slate-600"
                          }`}
                        >
                          {account.desc}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-500">
                        Username: <span className="font-mono font-medium">{account.username}</span> | 
                        Password: <span className="font-mono font-medium">{account.password}</span>
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-blue-600 font-medium">
                        Klik untuk isi
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-700">
              <strong>💡 Tips:</strong> Klik salah satu kartu di atas untuk mengisi otomatis username dan password. 
              Setiap role memiliki hak akses yang berbeda terhadap data arsip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
