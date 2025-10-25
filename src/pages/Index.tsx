import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Settings as SettingsIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background dark">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">
          Welcome to <span className="text-primary glow-text">Codifyr</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Your modern development platform
        </p>
        <Link to="/settings">
          <Button size="lg" className="gap-2">
            <SettingsIcon className="w-5 h-5" />
            Open Settings
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
