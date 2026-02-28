const pieces = [
  { symbol: "♚", name: "King", desc: "Moves one square in any direction — the most vital piece on the board." },
  { symbol: "♛", name: "Queen", desc: "Moves any number of squares along rank, file, or diagonal — the most powerful piece." },
  { symbol: "♜", name: "Rook", desc: "Moves any number of squares along a rank or file, dominating open lines." },
  { symbol: "♝", name: "Bishop", desc: "Moves diagonally any number of squares, commanding long diagonal corridors." },
  { symbol: "♞", name: "Knight", desc: "Moves in an L-shape and is the only piece that can leap over others." },
  { symbol: "♟", name: "Pawn", desc: "Moves forward one square, captures diagonally, and can promote upon reaching the eighth rank." },
];

const Pieces = () => (
  <section id="pieces" className="py-32">
    <div className="container">
      <h2 className="font-heading text-4xl text-center text-foreground mb-4 fade-up">The Pieces</h2>
      <p className="font-body text-center text-muted-foreground mb-16 fade-up">Six distinct warriors, each with a role to play</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pieces.map((p) => (
          <div
            key={p.name}
            className="fade-up group bg-card border border-border rounded p-8 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="text-5xl text-primary mb-4 group-hover:scale-110 transition-transform duration-500">{p.symbol}</div>
            <h3 className="font-heading text-xl text-foreground mb-2">{p.name}</h3>
            <p className="font-body text-muted-foreground text-base">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pieces;
