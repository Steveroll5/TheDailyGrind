'use client';

type ViolationModalProps = {
  onClose: () => void;
};

const ViolationModal = ({ onClose }: ViolationModalProps) => {
  return (
    <div 
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
        onClick={onClose}
    >
      <div 
        className="bg-destructive text-destructive-foreground p-8 border-4 border-destructive-foreground/50 w-full max-w-md mx-4 animate-stamp-in-harsh"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center font-code">
          <h2 className="text-3xl font-bold mb-4">HR VIOLATION TICKET</h2>
          <p className="text-xl mb-6">Wage Theft Detected.</p>
          <p className="text-2xl font-bold">Penalty: 50 Valles.</p>
        </div>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-background text-foreground rounded-full w-8 h-8 flex items-center justify-center border-2 border-foreground"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ViolationModal;
