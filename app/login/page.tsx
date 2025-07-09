// app/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden px-4">
      {/* Futuristic Glow Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-2xl animate-spin-slow" />

      {/* Glassmorphic Form Container */}
      <div className="z-10 w-full max-w-md bg-blue bg-opacity-10 backdrop-blur-md border border-cyan-400/20 rounded-3xl p-8 shadow-lg">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8 tracking-wide drop-shadow-lg">
          JDI<span className="text-cyan-400">-APP</span>
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Employee Number</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Enter your employee number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white font-semibold rounded-full transition duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2025 JDI-APP. All rights reserved.
        </p>
      </div>
    </div>
  );
}
