import React, { useState, useEffect } from 'react';
import UserProfile from './components/UserProfile';

export default function App() {
  //useState
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({
        name: "Muhammad Mustafid Ilmi",
        role: "Desainer",
        isOnline: true,
      });
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">
          Profil Pengguna
        </h1>
      </div>

      <UserProfile 
        user={user} 
        isLoading={isLoading} 
        onRefresh={fetchUserData} 
      />
    </main>
  );
}