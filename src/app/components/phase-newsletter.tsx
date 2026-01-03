
'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { articles, type Article } from '@/lib/articles';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ViolationModal from './violation-modal';
import GlitchLetter from './glitch-letter';
import Redacted from './redacted';
import PhaseOpinionViolation from './phase-opinion-violation';
import PhaseGlitch from './phase-glitch';
import PagePeel from './page-peel';
import FlashingAd from './flashing-ad';
import Footer from './footer';
import { decode } from '@/lib/utils';

type PhaseNewsletterProps = {
  onPasswordSuccess: () => void;
};

const adContent = [
    { id: 1, title: 'The Optimism Visor™', imageId: 'ad-visor', letter: 'C', tagline: "Hate the smog? Pretend it’s not there!", smallPrint: "Filters out grey color spectrums and safety warning signs. (Caution: Do not use near open pits)." },
    { id: 2, title: 'Krovus Dehydrated Water', imageId: 'ad-water', letter: 'O', tagline: "Lightweight! Portable! Just add... wait.", smallPrint: "Warning: Do not ingest powder directly. May cause internal dunes." },
    { id: 3, title: 'Grey-Scale Flavor Paste', imageId: 'ad-paste', letter: 'L', tagline: "Lunch in 3 seconds flat!", smallPrint: "Now with 5% less chalk! Flammable if exposed to direct optimism." },
    { id: 4, title: <>Surplus <Redacted>{decode('RGVjaWJvdA==')}</Redacted> Leg</>, imageId: 'ad-leg', letter: 'D', tagline: "Lonely? Adopt a drone part!", smallPrint: "It doesn't eat, sleep, or love you. But it does twitch when you yell at it." },
];

const Rivet = () => <div className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 border border-yellow-900" />;

const PhaseNewsletter = ({ onPasswordSuccess }: PhaseNewsletterProps) => {
  const [gateInput, setGateInput] = useState('');
  const [filteredArticles, setFilteredArticles] = useState<Article[]>(articles);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [revealedLetters, setRevealedLetters] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeAd, setActiveAd] = useState<(typeof adContent)[0] | null>(null);
  const [showOpinionViolation, setShowOpinionViolation] = useState(false);
  const [glitchingOut, setGlitchingOut] = useState(false);
  const [showPeel, setShowPeel] = useState(true);
  const [peelGlitch, setPeelGlitch] = useState(false);
  const [flashingAdToShow, setFlashingAdToShow] = useState<(typeof adContent)[0] | null>(null);
  const timeouts = useRef<NodeJS.Timeout[]>([]).current;
  
  const handleAdClick = useCallback((ad: (typeof adContent)[0]) => {
    if (revealedLetters.includes(ad.letter)) return;
    setActiveAd(ad);
    setIsModalOpen(true);
  }, [revealedLetters]);

  useEffect(() => {
    const adInterval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % adContent.length);
    }, 5000);
    return () => clearInterval(adInterval);
  }, []);

  useEffect(() => {
    if (showOpinionViolation) {
        document.body.setAttribute('data-theme', 'phaseopinionviolation');
        document.documentElement.classList.add('dark');
      const timer = setTimeout(() => {
        setGlitchingOut(true);
        setTimeout(() => {
          setShowOpinionViolation(false);
          setGlitchingOut(false);
          document.body.setAttribute('data-theme', 'newsletter');
          document.documentElement.classList.remove('dark');
        }, 1500); // Duration of the glitch effect
      }, 5000); // 5 seconds on the violation screen

      return () => {
        clearTimeout(timer);
        document.body.setAttribute('data-theme', 'newsletter');
        document.documentElement.classList.remove('dark');
      }
    }
  }, [showOpinionViolation]);

  useEffect(() => {
    const scheduleAd = (adIndex: number, delay: number) => {
      const timeout = setTimeout(() => {
        setFlashingAdToShow(adContent[adIndex]);
      }, delay);
      timeouts.push(timeout);
    };
  
    const adCycle = () => {
      timeouts.forEach(clearTimeout);
      scheduleAd(0, 10000); // 10s
      scheduleAd(1, 25000); // 10s + 15s
      scheduleAd(2, 45000); // 25s + 20s
      scheduleAd(3, 70000); // 45s + 25s
    };
  
    adCycle();
    const interval = setInterval(adCycle, 71000); // Loop after the last ad + buffer
  
    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [timeouts]);

  const handleGateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchTerm = gateInput.toLowerCase().trim();

    if (searchTerm.replace(/\s/g, '') === decode('Y29sZGZyaWVz')) {
      setGateInput('');
      onPasswordSuccess();
      return;
    }

    if (searchTerm === '') {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm) ||
        article.summary.toLowerCase().includes(searchTerm) ||
        article.content.toLowerCase().includes(searchTerm)
      );
      setFilteredArticles(filtered);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (activeAd && !revealedLetters.includes(activeAd.letter)) {
      setRevealedLetters(prev => [...prev, activeAd.letter]);
    }
    setActiveAd(null);
  };

  const handleOpinionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowOpinionViolation(true);
  };

  const handlePeelClick = () => {
    setShowPeel(false);
    setPeelGlitch(true);
    setTimeout(() => {
      setPeelGlitch(false);
    }, 2000);
  };
  
  const handleFlashingAdClick = () => {
    setIsModalOpen(true);
    setFlashingAdToShow(null);
  };

  const handleFlashingAdClose = () => {
    setFlashingAdToShow(null);
  };

  if (glitchingOut || peelGlitch) {
    return <PhaseGlitch />;
  }

  if (showOpinionViolation) {
    return <PhaseOpinionViolation />;
  }

  const Ticker = () => {
    const tickerItems = [
      "Days since last accident: 0",
      "...",
      "Reminder: Crying in the breakroom is strictly limited to 5 minutes",
      "...",
      "Krovus Stock holds steady at v0.00.",
      "...",
      "BREAKING NEWS: PET BOT LEG CAUSES CHAOS IN 5TH ST SAN RAMOS",
    ];

    return (
        <div className="bg-primary/20 border-y border-primary/50 text-primary-foreground/80 overflow-hidden relative h-10 flex items-center">
            <div className="flex animate-marquee whitespace-nowrap">
                <div className="flex-shrink-0 flex items-center">
                    {tickerItems.map((item, index) => (
                        <span key={index} className="mx-8">{item}</span>
                    ))}
                </div>
                <div className="flex-shrink-0 flex items-center" aria-hidden="true">
                    {tickerItems.map((item, index) => (
                        <span key={index} className="mx-8">{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};
  
  const currentAd = adContent[currentAdIndex];
  const adImage = PlaceHolderImages.find(p => p.id === currentAd.imageId);

  return (
    <div className="w-full min-h-screen grain-texture relative bg-background">
       {showPeel && <PagePeel onClick={handlePeelClick} />}
       {isModalOpen && <ViolationModal onClose={handleCloseModal} />}
       {flashingAdToShow && <FlashingAd ad={flashingAdToShow} onClose={handleFlashingAdClose} onAdClick={handleFlashingAdClick} />}

      <nav className="relative leather-texture border-b-4 border-secondary shadow-md p-4 flex justify-center items-center">
        <Rivet style={{ top: '6px', left: '6px' }} />
        <Rivet style={{ top: '6px', right: '6px' }} />
        <Rivet style={{ bottom: '6px', left: '6px' }} />
        <Rivet style={{ bottom: '6px', right: '6px' }} />
        <div className="flex space-x-8 font-headline text-xl text-amber-100">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/news" className="hover:text-primary">News</Link>
          <a href="#" onClick={handleOpinionClick} className="hover:text-primary cursor-pointer">Opinion</a>
        </div>
      </nav>

      <header className="text-center py-12 flex justify-center">
        <Image src="/daily-grind-logo.png" alt="The Daily Grind" width={698} height={382} className="w-full max-w-2xl" />
      </header>

      <Ticker />

      <div className="container mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <main className="lg:col-span-2 space-y-8">
          {filteredArticles.length > 0 ? filteredArticles.map((article) => {
            const articleImage = PlaceHolderImages.find(p => p.id === article.image1Id);
            return (
              <Link href={`/articles/${article.id}`} key={article.id}>
                <Card className="bg-card/80 border-2 border-secondary/50 ragged-edges hover:border-primary transition-all">
                  <CardContent className="p-8 md:p-10">
                    <h2 className="font-headline text-4xl mb-4 text-secondary group-hover:text-primary">{article.title}</h2>
                    {articleImage && <Image src={articleImage.imageUrl} data-ai-hint={articleImage.imageHint} alt={articleImage.description} width={600} height={400} className="w-full h-auto mb-4 object-cover" />}
                    <p className="font-body text-lg leading-relaxed">{article.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          }) : (
            <Card className="bg-card/80 border-2 border-primary/50 ragged-edges">
              <CardContent className="p-8 md:p-10 text-center">
                <p className="font-body text-2xl text-primary">No articles found matching your search.</p>
              </CardContent>
            </Card>
          )}
        </main>
        
        <aside className="space-y-8 lg:sticky top-8 self-start">
          <Card className="bg-card/80 border-2 border-primary/50">
            <CardContent className="p-6">
              <h3 className="font-headline text-2xl mb-4 text-primary">Search</h3>
              <form onSubmit={handleGateSubmit} className="space-y-2">
                <Input 
                  type="text" 
                  value={gateInput}
                  onChange={e => setGateInput(e.target.value)}
                  placeholder="Search" 
                  className="bg-input border-primary/70 focus:ring-primary text-lg font-body"
                />
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-headline text-lg">Enter</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-2 border-secondary/50">
            <CardContent className="p-6">
              <h3 className="font-headline text-2xl mb-4 text-secondary">Advertisements</h3>
              <div className="group relative aspect-[2/3] overflow-hidden border-2 border-dashed border-secondary/50 cursor-pointer" onClick={() => handleAdClick(currentAd)}>
                {revealedLetters.includes(currentAd.letter) ? (
                   <div className="w-full h-full flex items-center justify-center bg-background">
                     <GlitchLetter letter={currentAd.letter} />
                   </div>
                ) : (
                  adImage && (
                    <Image 
                      src={adImage.imageUrl}
                      data-ai-hint={adImage.imageHint} 
                      alt={currentAd.title?.toString() || ''}
                      fill 
                      className="object-cover transition-opacity duration-1000"
                    />
                  )
                )}
                {!revealedLetters.includes(currentAd.letter) && (
                  <div className="absolute inset-0 bg-black/50 text-center text-amber-100 font-body text-sm flex flex-col justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-bold">{currentAd.title}</p>
                    <p className="text-xs italic">"{currentAd.tagline}"</p>
                    <p className="text-xs mt-1 opacity-70">{currentAd.smallPrint}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default PhaseNewsletter;
