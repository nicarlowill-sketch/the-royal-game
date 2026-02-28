const rules = [
  { title: "Check", desc: "A king is in check when it is under direct attack by an opponent's piece. The player must resolve the threat immediately." },
  { title: "Checkmate", desc: "When a king is in check and cannot escape, the game ends. This is the ultimate objective of every chess game." },
  { title: "Castling", desc: "A special move involving the king and a rook. The king moves two squares toward a rook, and the rook jumps to the other side." },
  { title: "En Passant", desc: "A special pawn capture that can occur when an opponent's pawn advances two squares from its starting position, passing an adjacent pawn." },
  { title: "Promotion", desc: "When a pawn reaches the opposite end of the board, it must be promoted to a queen, rook, bishop, or knight." },
  { title: "Stalemate", desc: "When the player to move has no legal moves and their king is not in check. The game is declared a draw." },
];

const Rules = () => (
  <section id="rules" className="py-32 bg-secondary/30">
    <div className="container">
      <h2 className="font-heading text-4xl text-center text-foreground mb-4 fade-up">The Rules</h2>
      <p className="font-body text-center text-muted-foreground mb-16 fade-up">Foundations of the royal game</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rules.map((r, i) => (
          <div key={r.title} className="fade-up flex gap-4">
            <span className="font-heading text-3xl text-primary/30 font-bold leading-none mt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-heading text-lg text-foreground mb-1">{r.title}</h3>
              <p className="font-body text-muted-foreground text-base">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Rules;
