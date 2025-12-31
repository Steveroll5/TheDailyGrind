'use client';
import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

type PhaseNewsletterProps = {
  onGlitch: () => void;
};

const articleImages = {
  sector4: PlaceHolderImages.find(p => p.id === 'sector-4'),
  arkeville: PlaceHolderImages.find(p => p.id === 'arkeville'),
}

const adContent = [
  { id: 1, title: 'Dehydrated Water', image: PlaceHolderImages.find(p => p.id === 'ad1'), letter: 'C' },
  { id: 2, title: 'Optimism Visors', image: PlaceHolderImages.find(p => p.id === 'ad2'), letter: 'O' },
  { id: 3, title: 'Soylent Green', image: PlaceHolderImages.find(p => p.id === 'ad3'), letter: 'L' },
  { id: 4, title: 'Memory Wipes', image: PlaceHolderImages.find(p => p.id === 'ad4'), letter: 'D' },
];

const Rivet = () => <div className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 border border-yellow-900" />;

const PhaseNewsletter = ({ onGlitch }: PhaseNewsletterProps) => {
  const [gateInput, setGateInput] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [revealedAds, setRevealedAds] = useState<number[]>([]);

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gateInput.toLowerCase() === 'coldfries') {
      onGlitch();
    } else {
      setGateInput('ACCESS DENIED');
      setTimeout(() => setGateInput(''), 1000);
    }
  };

  const handleAdClick = (adId: number) => {
    setModalOpen(true);
    if (!revealedAds.includes(adId)) {
      setRevealedAds(prev => [...prev, adId]);
    }
  };

  const Ticker = () => (
    <div className="bg-primary/20 border-y border-primary/50 text-primary-foreground/80 overflow-hidden relative h-10 flex items-center">
      <div className="marquee font-body text-lg">
        <span className="mx-8">Days since last accident: 0</span>
        <span className="mx-8">...</span>
        <span className="mx-8">Reminder: Crying in the breakroom is strictly limited to 5 minutes</span>
        <span className="mx-8">...</span>
        <span className="mx-8">Krovus Stock holds steady at $0.00.</span>
        <span className="mx-8">...</span>
        <span className="mx-8">Days since last accident: 0</span>
        <span className="mx-8">...</span>
        <span className="mx-8">Reminder: Crying in the breakroom is strictly limited to 5 minutes</span>
        <span className="mx-8">...</span>
        <span className="mx-8">Krovus Stock holds steady at $0.00.</span>
      </div>
    </div>
  );
  
  return (
    <div className="w-full min-h-screen grain-texture">
      <nav className="relative leather-texture border-b-4 border-secondary shadow-md p-4 flex justify-center items-center">
        <Rivet style={{ top: '6px', left: '6px' }} />
        <Rivet style={{ top: '6px', right: '6px' }} />
        <Rivet style={{ bottom: '6px', left: '6px' }} />
        <Rivet style={{ bottom: '6px', right: '6px' }} />
        <div className="flex space-x-8 font-headline text-xl text-amber-100">
          <a href="#" className="hover:text-primary">Home</a>
          <a href="#" className="hover:text-primary">News</a>
          <a href="#" className="hover:text-primary">Opinion</a>
        </div>
      </nav>

      <header className="text-center py-12">
        <h1 className="font-headline text-7xl md:text-8xl font-bold text-foreground">THE DAILY GRIND</h1>
        <p className="font-body text-xl text-muted-foreground">By The Apex Signal</p>
      </header>

      <Ticker />

      <div className="container mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2 space-y-8">
          <Card className="bg-card/80 border-2 border-secondary/50 p-2 ragged-edges">
            <CardContent className="p-4 md:p-6">
              <h2 className="font-headline text-4xl mb-4 text-secondary">RUMORED RE-OPENING OF SECTOR 4</h2>
              {articleImages.sector4 && <Image src={articleImages.sector4.imageUrl} data-ai-hint={articleImages.sector4.imageHint} alt={articleImages.sector4.description} width={600} height={400} className="w-full h-auto mb-4 object-cover" />}
              <p className="font-body text-lg leading-relaxed">Dr. Arkeville's simulation is decades away from completion, yet whispers persist among the cog-turners and steam-fitters. Sector 4, sealed since the great noise contamination, might be stirring. Officials remain tight-lipped, their silence only fueling the rampant speculation. What secrets, or horrors, has the rust claimed in its long slumber?</p>
            </CardContent>
          </Card>
           <Card className="bg-card/80 border-2 border-primary/50 p-2 ragged-edges">
            <CardContent className="p-4 md:p-6">
              <h2 className="font-headline text-4xl mb-4 text-primary">A NEW DAWN IN THE LOWER DEPTHS</h2>
              {articleImages.arkeville && <Image src={articleImages.arkeville.imageUrl} data-ai-hint={articleImages.arkeville.imageHint} alt={articleImages.arkeville.description} width={600} height={400} className="w-full h-auto mb-4 object-cover" />}
              <p className="font-body text-lg leading-relaxed">The Apex Signal Initiative promises a brighter future, powered by the tireless hum of the great engine. "Productivity is paramount," declared Senior Manager, his voice echoing through the brass pipes. "Every gear turned is a step towards universal prosperity." The initiative has seen a 200% increase in quota fulfillment, though reports of worker exhaustion are summarily dismissed as "defeatist propaganda".</p>
            </CardContent>
          </Card>
        </main>
        
        <aside className="space-y-8">
          <Card className="bg-card/80 border-2 border-primary/50">
            <CardContent className="p-6">
              <h3 className="font-headline text-2xl mb-4 text-primary">The Gate</h3>
              <form onSubmit={handleGateSubmit} className="space-y-2">
                <Input 
                  type="text" 
                  value={gateInput}
                  onChange={e => setGateInput(e.target.value)}
                  placeholder="System Indexing... (Error 404)" 
                  className="bg-input border-primary/70 focus:ring-primary text-lg font-body"
                />
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-headline text-lg">Enter</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-2 border-secondary/50">
            <CardContent className="p-6">
              <h3 className="font-headline text-2xl mb-4 text-secondary">The Puzzle</h3>
              <div className="grid grid-cols-2 gap-4">
                {adContent.map((ad) => (
                  <button key={ad.id} onClick={() => handleAdClick(ad.id)} className="group relative aspect-[2/3] overflow-hidden border-2 border-dashed border-secondary/50 transition-all hover:border-solid hover:border-primary">
                    {revealedAds.includes(ad.id) ? (
                      <div className="w-full h-full flex items-center justify-center bg-card">
                        <span className="font-headline text-8xl text-secondary">{ad.letter}</span>
                      </div>
                    ) : (
                      ad.image && <Image src={ad.image.imageUrl} data-ai-hint={ad.image.imageHint} alt={ad.title} fill className="object-cover transition-transform group-hover:scale-110" />
                    )}
                    <div className="absolute bottom-0 left-0 w-full p-2 bg-black/50 text-center text-amber-100 font-body text-sm">{ad.title}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
      
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="bg-transparent border-none shadow-none p-0 w-auto max-w-lg animate-stamp-in">
           <div className="relative p-8 bg-red-800 text-white border-8 border-red-900 rotate-[-10deg] shadow-2xl">
              <div className="absolute inset-0 border-4 border-dashed border-red-600"></div>
              <h2 className="font-headline text-4xl text-center text-red-200">HR VIOLATION TICKET</h2>
              <div className="border-t-2 border-dashed border-red-500 my-4"></div>
              <p className="font-body text-xl text-center">Wage Theft Detected.</p>
              <p className="font-body text-3xl text-center font-bold my-4 text-yellow-200">Penalty: 50 Credits.</p>
           </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhaseNewsletter;
