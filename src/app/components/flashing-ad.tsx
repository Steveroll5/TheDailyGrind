
'use client';

import Image from 'next/image';
import { XCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Redacted from './redacted';
import { decode } from '@/lib/utils';

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
  const decibotStr = decode('RGVjaWJvdA==');

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <Card 
        className="relative w-full max-w-lg bg-card border-4 border-destructive shadow-2xl animate-in fade-in"
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
        <CardContent className="p-4 space-y-4">
          <div className="w-full">
            {adImage && (
              <Image 
                src={adImage.imageUrl}
                alt={ad.title?.toString() || 'Advertisement'}
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            )}
          </div>
          <div className="text-center border-t-2 border-destructive/50 pt-4">
             <h3 className="font-headline text-3xl text-destructive mb-2">
                {typeof ad.title === 'string' && ad.title.includes(decibotStr) ? <Redacted>{decibotStr}</Redacted> : ad.title}
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
