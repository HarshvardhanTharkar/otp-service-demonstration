export default function ResponseBox({ response }) {
  if (!response) return null;

  return (
    <div className="mt-4 bg-black text-green-400 p-4 rounded-lg text-sm overflow-auto">
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
