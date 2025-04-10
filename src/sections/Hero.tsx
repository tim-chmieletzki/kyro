import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="px-6 pt-40">
      <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[660px]">
        <div className="flex flex-col justify-center items-center gap-8 text-center">
          <h1 className="text-6xl">
            Connecting you to the pulse of the crypto market
          </h1>
          <p className="text-lg">
            Track real-time crypto prices and trends with ease. Gain clarity and
            insight to navigate the market confidently.
          </p>
          <a
            href=""
            className="flex justify-center items-center gap-2 bg-accentPrim px-4 py-3 rounded-[48px] font-medium text-background text-lg"
          >
            <span>Get started now</span>
            <ChevronDown className="text-background" />
          </a>
        </div>
      </div>
    </section>
  );
}
