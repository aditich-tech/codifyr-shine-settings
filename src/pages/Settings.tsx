import { useState } from 'react';
import { FloatingKeywords } from '@/components/FloatingKeywords';
import { SettingsSidebar } from '@/components/SettingsSidebar';
import { AccountTab } from '@/components/settings/AccountTab';
import { PrivacyTab } from '@/components/settings/PrivacyTab';
import { ThemeTab } from '@/components/settings/ThemeTab';
import { LanguageTab } from '@/components/settings/LanguageTab';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountTab />;
      case 'privacy':
        return <PrivacyTab />;
      case 'theme':
        return <ThemeTab />;
      case 'language':
        return <LanguageTab />;
      default:
        return <AccountTab />;
    }
  };

  return (
    <div className="min-h-screen dark relative">
      <FloatingKeywords />
      
      <div className="relative z-10">
        <header className="border-b border-border backdrop-blur-sm bg-background/80">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center gap-4">
              <Link 
                to="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </Link>
              <div className="flex-1">
                <h1 className="text-2xl font-bold">
                  <span className="text-primary glow-text">Codifyr</span> Settings
                </h1>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-6">
            <aside>
              <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />
            </aside>
            <section className="min-h-[600px]">
              {renderContent()}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
