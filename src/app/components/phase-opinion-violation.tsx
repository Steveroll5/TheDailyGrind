const PhaseOpinionViolation = () => {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center p-8 text-center animate-pulse-alarm">
        <div className="font-code text-glow space-y-4">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-destructive">
            🚨 ACCESS DENIED 🚨
          </h1>
          <p className="text-2xl md:text-4xl text-foreground">
            Clearance Level 1 does not have permission to see or give opinions.
          </p>
          <p className="text-3xl md:text-5xl font-bold">
            Penalty: 500 Valles.
          </p>
          <p className="text-xl md:text-2xl text-foreground/80">
            Please report to your designated HR representative.
          </p>
        </div>
      </div>
    );
  };
  
  export default PhaseOpinionViolation;
  