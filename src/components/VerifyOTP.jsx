import { useState } from "react";
import api from "../services/api";
import ResponseBox from "./ResponseBox";

export default function VerifyOTP() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const verifyOTP = async () => {
    try {
      setLoading(true);
      setResponse(null);

      const res = await api.post("/otp/verify", { email, otp });
      setResponse(res.data);
    } catch (err) {
      setResponse(err.response?.data || { error: "Verification failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Verify OTP</h2>

      <input
        type="email"
        placeholder="Enter email"
        className="w-full p-2 mb-3 rounded bg-gray-700 outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter OTP"
        className="w-full p-2 mb-4 rounded bg-gray-700 outline-none"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button
        onClick={verifyOTP}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded w-full"
      >
        {loading ? "Verifying..." : "Verify OTP"}
      </button>

      <ResponseBox response={response} />
    </div>
  );
}
