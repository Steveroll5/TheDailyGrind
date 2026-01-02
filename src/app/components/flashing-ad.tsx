
'use client';

import Image from 'next/image';
import { XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Redacted from './redacted';

type FlashingAdProps = {
  ad: {
    id: number;
    title: React.ReactNode;
    imageId: string;
    tagline: string;
    smallPrint: string;
  };
  onClose: () => void;
  onAdClick: () => void;
};

const FlashingAd = ({ ad, onClose, onAdClick }: FlashingAdProps) => {
  const adImage = PlaceHolderImages.find(p => p.id === ad.imageId);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={onClose}>
      <Card 
        className="relative w-full max-w-lg bg-card border-4 border-destructive shadow-2xl animate-stamp-in-harsh"
        onClick={(e) => {
          e.stopPropagation();
          onAdClick();
        }}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute -top-4 -right-4 text-background bg-destructive rounded-full z-10 hover:scale-110 transition-transform"
          aria-label="Close ad"
        >
          <XCircle size={32} />
        </button>
        <CardContent className="p-0">
          <div className="relative aspect-video">
            {adImage && (
              <Image 
                src={adImage.imageUrl}
                alt={ad.title?.toString() || 'Advertisement'}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="p-6 text-center">
             <h3 className="font-headline text-3xl text-destructive mb-2">
                {typeof ad.title === 'string' && ad.title.includes('Decibot') ? <Redacted>Decibot</Redacted> : ad.title}
             </h3>
            <p className="font-body text-lg italic text-foreground/80">"{ad.tagline}"</p>
            <p className="font-body text-xs mt-4 text-muted-foreground">{ad.smallPrint}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FlashingAd;
