export function Message({ id, advice }: { id: number; advice: string }) {
  return (
    <div className="bg-blue-700 p-8 rounded-lg shadow-lg text-white text-center">
      <div className="mb-4">
        <h1 className="text-lg font-bold uppercase">ADVICE #{id}</h1>
      </div>
      <p className="text-light-cyan font-manrope text-quote bg-dark-blue  px-4 py-2 rounded">
        "{advice}"
      </p>
    </div>
  );
}
