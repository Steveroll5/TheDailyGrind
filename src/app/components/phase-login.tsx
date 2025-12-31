'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

type PhaseLoginProps = {
  onLoginSuccess: () => void;
};

const PhaseLogin = ({ onLoginSuccess }: PhaseLoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Bob_Dwyer') {
      onLoginSuccess();
    } else {
      setError('Invalid Credentials. ACCESS DENIED.');
      setTimeout(() => setError(''), 2000);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-background p-4 grain-texture">
      <Card className="w-full max-w-sm border-2 border-primary/50 shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <Image src="/krovus-logo.png" alt="Krovus Industries Logo" width={150} height={150} />
          </div>
          <CardTitle className="font-headline text-3xl text-primary">Krovus Employee Portal</CardTitle>
          <CardDescription className="font-body text-muted-foreground">Secure Entry Point</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="font-body text-foreground/80">Employee ID</Label>
              <Input
                id="username"
                type="text"
                placeholder="e.g. Bob_Dwyer"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-input border-primary/30 focus:ring-primary font-body text-lg"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="font-body text-foreground/80">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-input border-primary/30 focus:ring-primary font-body text-lg"
                required
              />
            </div>
            {error && <p className="font-body text-destructive text-center animate-pulse">{error}</p>}
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-headline text-xl tracking-wider">
              Authenticate
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhaseLogin;
