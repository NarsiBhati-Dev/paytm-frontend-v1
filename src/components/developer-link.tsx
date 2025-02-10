import Link from "next/link";

export default function DeveloperLink() {
  return (
    <Link
      href="https://github.com/NarsiBhati-Dev"
      className="items-end flex justify-end bg-black px-4 py-1 shadow-md text-white font-semibold transition-all duration-300 hover:bg-gray-900 hover:border-blue-500"
      target="_blank"
      rel="noopener noreferrer"
    >
      Developed By Narsi
    </Link>
  );
}
