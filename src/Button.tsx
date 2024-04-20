export function Button({ getAdvice }: { getAdvice: () => void }) {
  return (
    <button
      type="button"
      // className="rounded-full bg-blue-700 text-white p-2 focus:outline-none hover:bg-blue-800 mt-5 "
      className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
      onClick={getAdvice}
    >
      Get advice
    </button>
  );
}
