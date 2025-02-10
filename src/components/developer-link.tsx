import Link from "next/link";

export default function DeveloperLink() {
  return (
    <Link
      href="https://github.com/NarsiBhati-Dev"
      className="fixed bottom-4 right-4 bg-black rounded-md px-4 py-1 shadow-md text-white font-semibold border border-blue-400 transition-all duration-300 hover:bg-gray-900 hover:border-blue-500"
      target="_blank"
      rel="noopener noreferrer"
    >
      Developed By Narsi
    </Link>
  );
}
