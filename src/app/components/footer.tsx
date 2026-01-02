
import { Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const DiscordIcon = (props: React.ComponentProps<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21.12,10.16a.46.46,0,0,0-.56.34,6.54,6.54,0,0,1-13.12,0,.46.46,0,0,0-.56-.34.48.48,0,0,0-.32.55,7.5,7.5,0,0,0,6.22,6.77.48.48,0,0,0,.68,0,7.5,7.5,0,0,0,6.22-6.77A.48.48,0,0,0,21.12,10.16Z" />
    <path d="M7,12.43a1.72,1.72,0,1,0,1.71,1.71A1.71,1.71,0,0,0,7,12.43Z" />
    <path d="M15.29,12.43a1.71,1.71,0,1,0,1.71,1.71A1.71,1.71,0,0,0,15.29,12.43Z" />
  </svg>
);


const Rivet = ({ style }: { style: React.CSSProperties }) => <div className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 border border-yellow-900" style={style} />;

const Footer = () => {
  return (
    <footer className="relative leather-texture border-t-4 border-secondary mt-16 shadow-inner">
      <Rivet style={{ top: '6px', left: '6px' }} />
      <Rivet style={{ top: '6px', right: '6px' }} />
      <Rivet style={{ bottom: '6px', left: '6px' }} />
      <Rivet style={{ bottom: '6px', right: '6px' }} />
      <div className="container mx-auto px-4 py-8 text-amber-100">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div className="font-body">
            <p className="font-bold text-lg">The Daily Grind</p>
            <p className="text-sm opacity-80">Your only sanctioned source for news and industrial accidents.</p>
            <p className="text-xs opacity-60 mt-2">&copy; {new Date().getFullYear()} The Apex Signal. All Rights Reserved (and Monitored).</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://discord.gg/AarkhUq3v7" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-primary transition-colors">
              <DiscordIcon className="w-7 h-7" />
            </a>
            <a href="https://www.instagram.com/steveroll5/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
              <Instagram className="w-7 h-7" />
            </a>
            <a href="https://www.youtube.com/@steveroll5" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="hover:text-primary transition-colors">
              <Youtube className="w-7 h-7" />
            </a>
          </div>
        </div>
        <div className="border-t border-amber-100/20 mt-6 pt-4 text-center text-xs opacity-50 font-code">
          <p>This transmission has been approved by Krovus Industries Department of Information. Unauthorized opinions are a violation of corporate policy and subject to immediate asset reclamation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
