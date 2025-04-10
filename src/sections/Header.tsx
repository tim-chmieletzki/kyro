import Logo from "@/assets/nexus-logo.svg";

export default function Header() {
  return (
    <header className="top-0 sticky bg-background/80 backdrop-blur-sm p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 font-medium text-xl">
          <Logo />
          <h1 className="font-medium">Nexus</h1>
        </div>
        <nav className="">-</nav>
      </div>
    </header>
  );
}
