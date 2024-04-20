export function Button({ getAdvice }: { getAdvice: () => void }) {
  return (
    <button
      className="rounded-full bg-blue-700 text-white p-2 focus:outline-none hover:bg-blue-800 mt-5"
      onClick={getAdvice}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.752 11.168l-2.318 2.318a1 1 0 0 1-1.414 0l-2.318-2.318a1 1 0 0 1 1.414-1.414l.904.904V8a1 1 0 1 1 2 0v2.658l.904-.904a1 1 0 0 1 1.414 1.414z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"
        ></path>
      </svg>
    </button>
  );
}
