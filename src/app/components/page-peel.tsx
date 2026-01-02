
'use client';

type PagePeelProps = {
  onClick: () => void;
};

const PagePeel = ({ onClick }: PagePeelProps) => {
  return (
    <div 
      className="absolute top-0 left-0 w-24 h-24 cursor-pointer group"
      onClick={onClick}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-transparent transition-all duration-300 ease-in-out group-hover:[clip-path:polygon(0%_0%,_100%_0%,_0%_100%)]">
        <div className="w-full h-full bg-primary/20"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full [clip-path:polygon(0%_0%,_100%_0%,_0%_100%)] bg-background transition-all duration-300 ease-in-out group-hover:transform group-hover:rotate-45 group-hover:scale-50 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%]">
        <div 
          className="absolute w-[200%] h-[200%] bg-terminal -rotate-45"
          style={{
            backgroundImage: `
              radial-gradient(circle at top left, transparent 25%, hsl(var(--terminal-background)) 25.5%),
              repeating-linear-gradient(135deg, transparent, transparent 4px, hsla(var(--foreground), 0.1) 4px, hsla(var(--foreground), 0.1) 5px)
            `,
            backgroundSize: '100% 100%, 100% 100%',
            top: '-50%',
            left: '-50%',
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default PagePeel;
