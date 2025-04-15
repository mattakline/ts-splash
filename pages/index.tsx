import Image from "next/image";
import { Montserrat, Roboto_Mono } from "next/font/google";
import { FaDiscord } from "react-icons/fa";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${montserrat.className} ${robotoMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <div className="absolute top-8 left-8">
        <Image src="/tailstrike-logo.webp" alt="Tailstrike Logo" width={240} height={240} />
      </div>
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start text-center sm:text-left">
        <h1 className="text-4xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Every flight matters. Tailstrike makes it real.
        </h1>
        <h2 className="text-base max-w-xl">
          Tailstrike aims to add a new layer of realism, interactivity, and identity for flight simulation and aviation enthusiasts.
        </h2>
        <h2 className="mt-12">
          Sign up to receive news, updates, and to be included in the upcoming beta.
        </h2>
        <form className="flex flex-col sm:flex-row gap-4 mt-4 max-w-xl w-full">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </main>
      <footer className="row-start-3 flex gap-[8px] items-center justify-center text-white text-lg">
        <FaDiscord />
        <a
          href="https://discord.gg/VMf9v3Pbgp"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Join our Discord
        </a>
      </footer>
    </div>
  );
}
