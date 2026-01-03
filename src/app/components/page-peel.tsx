
'use client';

type PagePeelProps = {
  onClick: () => void;
};

const PagePeel = ({ onClick }: PagePeelProps) => {
  return (
    <div 
      className="absolute top-0 left-0 w-24 h-24 cursor-pointer group z-40"
      onClick={onClick}
    >
      {/* Revealed corner (the 'deadly' layer underneath) */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent transition-all duration-300 ease-in-out group-hover:[clip-path:polygon(0%_0%,_100%_0%,_0%_100%)]">
        <div 
          className="w-full h-full"
          style={{
            backgroundColor: 'hsl(var(--terminal-background))',
            backgroundImage: 'repeating-linear-gradient(rgba(0, 255, 0, 0.15) 0px, rgba(0, 255, 0, 0.15) 1px, transparent 1px, transparent 3px)',
          }}
        />
      </div>
      
      {/* Top page that peels away (looks normal) */}
      <div className="absolute top-0 left-0 w-full h-full [clip-path:polygon(0%_0%,_100%_0%,_0%_100%)] bg-background transition-all duration-300 ease-in-out group-hover:transform group-hover:rotate-45 group-hover:scale-50 group-hover:translate-x-[-50%] group-hover:translate-y-[-50%]">
         {/* This creates the page curl shadow effect */}
        <div 
          className="absolute w-[200%] h-[200%] -rotate-45"
          style={{
            backgroundImage: `radial-gradient(circle at top left, transparent 25%, hsl(var(--background)) 25.5%)`,
            backgroundSize: '100% 100%',
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
