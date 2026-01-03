
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { articles } from '@/lib/articles';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Redacted from '@/app/components/redacted';
import { deobfuscate } from '@/lib/utils';

const Censor = ({ text }: { text: string }) => {
  const decibotsRegex = new RegExp(`(${deobfuscate('uvtqwxA')}|${deobfuscate('uvtqwxAh')})`, 'gi');
  const parts = text.split(decibotsRegex);
  return (
    <>
      {parts.map((part, i) =>
        decibotsRegex.test(part) ? (
          <Redacted key={i}>{part}</Redacted>
        ) : (
          part
        )
      )}
    </>
  );
};


export default function ArticlePage() {
  const params = useParams();
  const articleId = params.id as string;

  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return notFound();
  }

  const image1 = PlaceHolderImages.find((p) => p.id === article.image1Id);
  const image2 = PlaceHolderImages.find((p) => p.id === article.image2Id);

  return (
    <div className="w-full min-h-screen grain-texture bg-background text-foreground p-4 md:p-8">
       <header className="text-center py-8 flex justify-center">
        <Link href="/">
          <Image src="/daily-grind-logo.png" alt="The Daily Grind" width={698} height={382} className="w-full max-w-2xl hover:opacity-90 transition-opacity" />
        </Link>
      </header>

      <div className="container mx-auto">
        <Card className="bg-card/80 border-2 border-primary/50 ragged-edges p-2">
          <CardContent className="p-6 md:p-8">
            <h2 className="font-headline text-4xl md:text-5xl mb-6 text-primary">{article.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {image1 && (
                    <Image
                    src={image1.imageUrl}
                    data-ai-hint={image1.imageHint}
                    alt={image1.description}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-sm"
                    />
                )}
                {image2 && (
                    <Image
                    src={image2.imageUrl}
                    data-ai-hint={image2.imageHint}
                    alt={image2.description}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-sm"
                    />
                )}
            </div>

            <div className="font-body text-lg leading-relaxed space-y-4">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>
                  <Censor text={paragraph} />
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
