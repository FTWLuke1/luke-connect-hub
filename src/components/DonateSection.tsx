import { DollarSign, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const DonateSection = () => {
  return (
    <section aria-labelledby="donate-heading" className="glass rounded-xl p-6 shadow-card">
      <h2 id="donate-heading" className="text-xl font-semibold mb-3">Support the Creator</h2>
      <p className="text-muted-foreground text-sm mb-4">
        Donate via Venmo or PayPal: <span className="font-medium">@d1goat0</span>
      </p>
      <div className="flex gap-3">
        <Button asChild className="btn-neon">
          <a href="https://venmo.com/u/d1goat0" target="_blank" rel="noopener noreferrer" aria-label="Donate on Venmo @d1goat0">
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              <span>Venmo @d1goat0</span>
            </div>
          </a>
        </Button>
        <Button asChild variant="secondary" className="btn-glass">
          <a href="https://paypal.me/d1goat0" target="_blank" rel="noopener noreferrer" aria-label="Donate on PayPal @d1goat0">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              <span>PayPal @d1goat0</span>
            </div>
          </a>
        </Button>
      </div>
    </section>
  );
};

export default DonateSection;
