'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/articles';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ViolationModal from './violation-modal';
import GlitchLetter from './glitch-letter';

type PhaseNewsletterProps = {
  onPasswordSuccess: () => void;
};

const adContent = [
  { id: 1, title: 'Dehydrated Water', imageId: 'ad1', letter: 'C' },
  { id: 2, title: 'Optimism Visors', imageId: 'ad2', letter: 'O' },
  { id: 3, title: 'Soylent Green', imageId: 'ad3', letter: 'L' },
  { id: 4, title: 'Memory Wipes', imageId: 'ad4', letter: 'D' },
];

const Rivet = () => <div className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 border border-yellow-900" />;

const PhaseNewsletter = ({ onPasswordSuccess }: PhaseNewsletterProps) => {
  const [gateInput, setGateInput] = useState('');
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [revealedLetters, setRevealedLetters] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAd, setActiveAd] = useState<(typeof adContent)[0] | null>(null);

  useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % adContent.length);
    }, 5000);
    return () => clearInterval(adInterval);
  }, []);

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (gateInput.toLowerCase() === 'coldfries') {
      onPasswordSuccess();
    } else {
      setGateInput('ACCESS DENIED');
      setTimeout(() => setGateInput(''), 1000);
    }
  };

  const handleAdClick = (ad: (typeof adContent)[0]) => {
    if (revealedLetters.includes(ad.letter)) return;
    setActiveAd(ad);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (activeAd && !revealedLetters.includes(activeAd.letter)) {
      setRevealedLetters(prev => [...prev, activeAd.letter]);
    }
    setActiveAd(null);
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
  
  const currentAd = adContent[currentAdIndex];
  const adImage = PlaceHolderImages.find(p => p.id === currentAd.imageId);

  return (
    <div className="w-full min-h-screen grain-texture">
       {isModalOpen && <ViolationModal onClose={handleCloseModal} />}

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
          {articles.map((article) => {
            const articleImage = PlaceHolderImages.find(p => p.id === article.image1Id);
            return (
              <Link href={`/articles/${article.id}`} key={article.id}>
                <Card className="bg-card/80 border-2 border-secondary/50 p-2 ragged-edges hover:border-primary transition-all">
                  <CardContent className="p-4 md:p-6">
                    <h2 className="font-headline text-4xl mb-4 text-secondary group-hover:text-primary">{article.title}</h2>
                    {articleImage && <Image src={articleImage.imageUrl} data-ai-hint={articleImage.imageHint} alt={articleImage.description} width={600} height={400} className="w-full h-auto mb-4 object-cover" />}
                    <p className="font-body text-lg leading-relaxed">{article.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </main>
        
        <aside className="space-y-8">
          <Card className="bg-card/80 border-2 border-primary/50">
            <CardContent className="p-6">
              <h3 className="font-headline text-2xl mb-4 text-primary">Search</h3>
              <form onSubmit={handleGateSubmit} className="space-y-2">
                <Input 
                  type="password" 
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
              <h3 className="font-headline text-2xl mb-4 text-secondary">Advertisements</h3>
              <div className="relative aspect-[2/3] overflow-hidden border-2 border-dashed border-secondary/50 cursor-pointer" onClick={() => handleAdClick(currentAd)}>
                {revealedLetters.includes(currentAd.letter) ? (
                   <div className="w-full h-full flex items-center justify-center bg-background">
                     <GlitchLetter letter={currentAd.letter} />
                   </div>
                ) : (
                  adImage && (
                    <Image 
                      src={adImage.imageUrl}
                      data-ai-hint={adImage.imageHint} 
                      alt={currentAd.title} 
                      fill 
                      className="object-cover transition-opacity duration-1000"
                    />
                  )
                )}
                {!revealedLetters.includes(currentAd.letter) && (
                  <div className="absolute bottom-0 left-0 w-full p-2 bg-black/50 text-center text-amber-100 font-body text-sm">
                    {currentAd.title}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default PhaseNewsletter;
