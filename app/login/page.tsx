// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const router = useRouter();
  const validateForm = () => {
    const newErrors = { email: "", password: "" };

    if (!email.trim()) {
      newErrors.email = "Employee number is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // Simulate login process
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // TODO: Implement authentication logic
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden px-4">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background-jas2.jpg')",
        }}
      />
      {/* Dark Overlay for Exposure Effect */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Futuristic Glow Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-2xl animate-spin-slow" />

      {/* Glassmorphic Form Container */}
      <div className="z-10 w-full max-w-md bg-blue bg-opacity-10 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 shadow-lg">
        <div className="text-center mb-8">
          {/* Company Logo */}
          <div className="mb-4">
            <img
              src="/logo-jas.png"
              alt="JDI Company Logo"
              className="w-15 h-15 mx-auto object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-2 tracking-wide drop-shadow-lg">
            JDI<span className="text-orange-400">-APP</span>
          </h2>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Employee Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Employee Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-300 text-lg">👤</span>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                required
                className={`w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 transition duration-300 ${
                  errors.email
                    ? "focus:ring-red-400 border border-red-400/50"
                    : "focus:ring-cyan-400 hover:bg-white/25"
                }`}
                placeholder="Enter your employee number"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-2">
              Password
            </label>
            <div className="space-y-1">
              {" "}
              {/* Container untuk input dan error message */}
              <div className="relative">
                {" "}
                {/* Container untuk input dan icons */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-300 text-lg">🔒</span>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: "" });
                  }}
                  required
                  className={`w-full pl-10 pr-12 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 transition duration-300 ${
                    errors.password
                      ? "focus:ring-red-400 border border-red-400/50"
                      : "focus:ring-purple-400 hover:bg-white/25"
                  }`}
                  placeholder="••••••••"
                />
                {/* Separator Line */}
                <div className="absolute inset-y-0 right-12 w-px bg-gray-400/20"></div>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 pl-3 flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              {/* Error and Success Messages */}
              <div className="min-h-[20px]">
                {" "}
                {/* Fixed height container for messages */}
                {errors.password && (
                  <p className="text-red-400 text-xs">{errors.password}</p>
                )}
                {password.length >= 6 && !errors.password && (
                  <p className="text-green-400 text-xs">
                    ✓ Password strength: Good
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Form Options */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-cyan-400 bg-white/20 border-gray-300 rounded focus:ring-cyan-400 focus:ring-2"
              />
              <label htmlFor="rememberMe" className="ml-2 text-gray-200">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-green-400 hover:text-cyan-300 transition-colors duration-200 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 bg-gradient-to-r from-orange-400 to-green-500 hover:from-orange-500 hover:to-green-600 text-white font-semibold rounded-full transition duration-300 shadow-md hover:shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-0.5 active:translate-y-0 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Signing In...
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2025 JDI-APP. All rights reserved.
        </p>
      </div>
    </div>
  );
}
