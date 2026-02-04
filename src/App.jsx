import GenerateOTP from "./components/GenerateOTP";
import VerifyOTP from "./components/VerifyOTP";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        OTP SaaS Demo Dashboard
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <GenerateOTP />
        <VerifyOTP />
      </div>
    </div>
  );
}
