
'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { hash } from "@/lib/utils";

type PhaseTerminalProps = {
    onLockdown: () => void;
};

// HASHED: "decibot" (lowercase, no spaces)
const THREAT_HASH = 'd8b8ddce36209210452a230588d95180f5539560f472d7f870233c06d86a6039';

const PhaseTerminal = ({ onLockdown }: PhaseTerminalProps) => {
    const [threatInput, setThreatInput] = useState('');
    const [trapError, setTrapError] = useState('');
    const [bobName, setBobName] = useState('Gqg Ibdjw'); // Keep obfuscated display name

    useEffect(() => {
        document.body.setAttribute('data-theme', 'terminal');
        document.documentElement.classList.add('dark');
        
        return () => {
            document.body.removeAttribute('data-theme');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const handleReportSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const hashedInput = await hash(threatInput);

        if (hashedInput === THREAT_HASH) {
            onLockdown();
        } else if (threatInput.toLowerCase().includes('rust')) {
            setTrapError("Error: Too Generic. Specify entity.");
        } else if (threatInput.toLowerCase().includes('monster')) {
            setTrapError("Error: Unscientific. Use designated nomenclature.");
        } else {
            setTrapError("Error: Threat not recognized.");
        }
    };

    return (
        <div className="w-full min-h-screen font-code text-lg md:text-xl p-4 sm:p-6 md:p-8 flex flex-col items-center text-glow">
            <header className="w-full max-w-5xl mb-8 text-center border-b-2 border-primary/50 pb-2">
                <p>&gt; KROVUS INDUSTRIES EMPLOYEE DATABASE (LEGACY)</p>
                <p>&gt; // SERVER OFFLINE // LAST BACKUP: 5 YEARS AGO</p>
            </header>
            
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <Card className="bg-card/50 border-primary/50 p-4">
                        <CardContent className="space-y-2 pt-6">
                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                <Image 
                                    src="/bob-dwyer.png" 
                                    alt="Bob Dwyer Employee Photo"
                                    width={128} 
                                    height={128} 
                                    className="rounded-sm border-2 border-primary/30 aspect-square object-cover"
                                />
                                <div>
                                    <p><span className="text-primary/70">Searching for ID: #WIRE-808...</span></p>
                                    <p>... Match found.</p>
                                    <br/>
                                    <p><strong>Name:</strong> {bobName}</p>
                                    <p><strong>ID:</strong> #WIRE-808</p>
                                    <p><strong>Role:</strong> Senior Perimeter Specialist</p>
                                    <p><strong>Status:</strong> <span className="text-destructive animate-pulse">MIA</span> (Last seen near Vending Machine B)</p>
                                </div>
                            </div>
                            <br/>
                            <p><strong>--- NOTES ---</strong></p>
                            <p>&gt; Clearance Level 1 (Can open doors, cannot open snacks).</p>
                            <p>&gt; Medical: Patient complains the rust is 'looking at him'.</p>
                            <p>&gt; Repeatedly forgets lunch room password. See attached.</p>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="relative">
                    <div className="bg-amber-100 text-black p-6 transform -rotate-3 shadow-lg font-handwritten">
                        <h4 className="font-bold text-xl border-b border-black/20 pb-1 mb-2">URGENT</h4>
                        <p className="text-lg">Password for lunch room:</p>
                        <p className="font-bold text-2xl my-2">COLD FRIES</p>
                        <p className="text-lg">(DON'T FORGET AGAIN BOB)</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-5xl mt-12">
                <Card className="bg-card/50 border-primary/50 p-4">
                    <CardContent className="pt-6">
                        <p className="text-2xl mb-4">&gt; SUBMIT NEW INCIDENT REPORT</p>
                        <form onSubmit={handleReportSubmit} className="flex flex-col sm:flex-row items-start gap-4">
                            <label htmlFor="threat" className="flex-shrink-0 pt-2">&gt; Identify the threat to initiate lockdown:</label>
                            <div className="w-full">
                                <div className="flex gap-2">
                                <Input 
                                    id="threat"
                                    type="text"
                                    value={threatInput}
                                    onChange={e => {
                                        setThreatInput(e.target.value);
                                        setTrapError('');
                                    }}
                                    className="bg-input border-primary text-primary focus:ring-primary font-code text-2xl h-12 flex-grow"
                                />
                                <Button type="submit" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground h-12 px-6">SUBMIT</Button>
                                </div>
                                {trapError && <p className="text-destructive mt-2 animate-pulse">&gt; {trapError}</p>}
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default PhaseTerminal;
