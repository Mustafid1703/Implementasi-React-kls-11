import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

export default function UserProfile({ user, isLoading, onRefresh }) {

  if (isLoading) {
    return (
      <Card className="w-full max-w-md p-10 text-center space-y-4 shadow-lg border-slate-200">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-slate-800 mx-auto"></div>
        <p className="text-base text-slate-500 font-medium">Memuat data pengguna...</p>
      </Card>
    );
  }

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
  return (
    
    <Card className="w-full max-w-md shadow-xl border-slate-200/80 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-white/90 p-2">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-5">
          <div className="h-14 w-14 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
            {getInitials(user?.name)}
          </div>
          <div>
            <CardTitle className="text-xl font-bold text-slate-900 leading-tight">
              {user?.name || "Pengguna"}
            </CardTitle>
            <p className="text-sm font-medium text-slate-500 mt-1">{user?.role || "Developer"}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-0">
        <div className="h-[1px] bg-slate-100 w-full my-2" />

        <div className="flex justify-between items-center text-base py-1">
          <span className="text-slate-500 font-medium">Status Akun</span>

          <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
              user?.isOnline
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-rose-50 text-rose-700 border border-rose-200"
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                user?.isOnline ? "bg-emerald-500 animate-pulse" : "bg-rose-500"
              }`}
            />
            {user?.isOnline ? "Online" : "Offline"}
          </span>
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <Button
          onClick={onRefresh}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg text-base transition-all active:scale-[0.98] shadow-md"
        >
          Muat Ulang Data
        </Button>
      </CardFooter>
    </Card>
  );
}