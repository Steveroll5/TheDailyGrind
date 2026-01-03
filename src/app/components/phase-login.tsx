
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { decode } from '@/lib/utils';

type PhaseLoginProps = {
  onLoginSuccess: () => void;
};

const PhaseLogin = ({ onLoginSuccess }: PhaseLoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === decode('Qm9iX0R3eWVy')) {
      onLoginSuccess();
    } else {
      setError('Invalid Credentials. ACCESS DENIED.');
      setTimeout(() => setError(''), 2000);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm bg-card/50 border-primary/50 shadow-lg text-glow">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <Image src="/krovus-logo.png" alt="Krovus Industries Logo" width={150} height={150} />
          </div>
          <CardTitle className="font-code text-3xl text-primary">Krovus Employee Portal</CardTitle>
          <CardDescription className="font-code text-muted-foreground">Secure Entry Point</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="font-code text-primary/80">Employee ID</Label>
              <Input
                id="username"
                type="text"
                placeholder="e.g. Xxxxx_Yyyyy"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-input border-primary/30 focus:ring-primary font-code text-lg text-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="font-code text-primary/80">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-input border-primary/30 focus:ring-primary font-code text-lg text-primary"
                required
              />
            </div>
            {error && <p className="font-code text-destructive text-center animate-pulse">{error}</p>}
            <Button type="submit" variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-primary-foreground font-code text-xl tracking-wider">
              Authenticate
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhaseLogin;
