import { useState } from "react";
import api from "../services/api";
import ResponseBox from "./ResponseBox";

export default function GenerateOTP() {
  const [email, setEmail] = useState("");
  const [type, setType] = useState("numeric");
  const [organization, setOrganization] = useState("");
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const sendOTP = async () => {
    try {
      setLoading(true);
      setResponse(null);

      const res = await api.post("/otp/generate", {
        email,
        type,
        organization,
        subject,
      });

      setResponse(res.data);
    } catch (err) {
      setResponse(err.response?.data || { error: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Generate OTP</h2>

      {/* Email */}
      <input
        type="email"
        placeholder="Enter email"
        className="w-full p-2 mb-3 rounded bg-gray-700 outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* OTP Type */}
      <select
        className="w-full p-2 mb-3 rounded bg-gray-700 outline-none"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="numeric">Numeric</option>
        <option value="alphanumeric">Alphanumeric</option>
        <option value="alphabet">Alphabet</option>
      </select>

      {/* Organization */}
      <input
        type="text"
        placeholder="Organization name"
        className="w-full p-2 mb-3 rounded bg-gray-700 outline-none"
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
      />

      {/* Subject */}
      <input
        type="text"
        placeholder="Email subject"
        className="w-full p-2 mb-4 rounded bg-gray-700 outline-none"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <button
        onClick={sendOTP}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full"
      >
        {loading ? "Sending OTP..." : "Send OTP"}
      </button>

      <ResponseBox response={response} />
    </div>
  );
}
