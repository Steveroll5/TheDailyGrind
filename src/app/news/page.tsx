'use client';

import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/lib/articles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewsPage() {
  return (
    <div className="w-full min-h-screen grain-texture bg-background text-foreground">
      <header className="text-center py-12 flex justify-center">
        <Link href="/">
            <Image src="/daily-grind-logo.png" alt="The Daily Grind" width={698} height={382} className="w-full max-w-2xl hover:opacity-90 transition-opacity" />
        </Link>
      </header>

      <div className="container mx-auto p-4 md:p-8">
        <main className="space-y-8">
          {articles.map((article) => (
            <Link href={`/articles/${article.id}`} key={article.id}>
              <Card className="bg-card/80 border-2 border-secondary/50 p-4 ragged-edges hover:border-primary transition-all group">
                <CardContent className="p-4 md:p-6">
                  <h2 className="font-headline text-4xl mb-4 text-secondary group-hover:text-primary">{article.title}</h2>
                  <p className="font-body text-lg leading-relaxed">{article.summary}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}
