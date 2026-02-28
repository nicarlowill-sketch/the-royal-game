const strategies = [
  { title: "Control the Center", desc: "Occupy and influence the central squares — d4, d5, e4, e5. Central control grants your pieces maximum mobility and flexibility." },
  { title: "Develop Your Pieces", desc: "Bring knights and bishops into play early. Each undeveloped piece is a soldier left behind, weakening your position with every tempo lost." },
  { title: "King Safety", desc: "Castle early to tuck your king behind a wall of pawns. A vulnerable king invites devastating attacks and tactical combinations." },
  { title: "Pawn Structure", desc: "Pawns form the skeleton of your position. Avoid doubled, isolated, and backward pawns — they become long-term weaknesses." },
  { title: "Think in Plans", desc: "Every move should serve a purpose. Develop a strategic plan based on the pawn structure and piece placement rather than moving aimlessly." },
  { title: "Calculate Variations", desc: "Before committing to a move, visualize the consequences. Calculate forcing moves — checks, captures, and threats — before quiet moves." },
];

const Strategy = () => (
  <section id="strategy" className="py-32 bg-secondary/30">
    <div className="container max-w-3xl">
      <h2 className="font-heading text-4xl text-center text-foreground mb-4 fade-up">Strategy</h2>
      <p className="font-body text-center text-muted-foreground mb-16 fade-up">Core principles that separate beginners from masters</p>
      <div className="space-y-12">
        {strategies.map((s, i) => (
          <div key={s.title} className="fade-up flex gap-6">
            <span className="font-heading text-4xl text-primary/20 font-bold leading-none mt-1 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-muted-foreground text-base">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Strategy;
