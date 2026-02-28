const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center chessboard-bg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    <div className="relative text-center z-10">
      <p className="font-body text-sm uppercase tracking-[0.4em] text-muted-foreground mb-6 fade-up">
        The Ancient Game of Kings
      </p>
      <h1 className="font-heading text-8xl md:text-9xl font-bold text-foreground mb-4 fade-up">
        Chess
      </h1>
      <p className="font-body text-xl italic text-muted-foreground mb-12 fade-up">
        Where every move tells a story
      </p>
      <div className="text-8xl text-primary opacity-30 fade-up">♚</div>
    </div>
  </section>
);

export default Hero;
