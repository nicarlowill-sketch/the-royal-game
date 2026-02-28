import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-scrolled py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="font-heading text-xl tracking-widest text-primary">
          ♛ The Royal Game
        </a>
        <div className="flex gap-8">
          {["Pieces", "Rules", "Strategy"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleClick(item.toLowerCase())}
              className="font-body text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
