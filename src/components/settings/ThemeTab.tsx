import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export const ThemeTab = () => {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = (value: string) => {
    setTheme(value);
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    toast.success(`Theme changed to ${value}`);
  };

  const themes = [
    { value: 'light', label: 'Light', icon: Sun, description: 'Bright and clean interface' },
    { value: 'dark', label: 'Dark', icon: Moon, description: 'Easy on the eyes' },
    { value: 'system', label: 'System', icon: Monitor, description: 'Follow system preference' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Theme Preferences</h2>
        <p className="text-muted-foreground">Choose how Codifyr looks to you</p>
      </div>

      <div className="glass-card rounded-2xl p-6">
        <RadioGroup value={theme} onValueChange={handleThemeChange} className="space-y-3">
          {themes.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.value}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  theme === t.value
                    ? 'border-primary bg-primary/5 glow-border'
                    : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                }`}
                onClick={() => handleThemeChange(t.value)}
              >
                <RadioGroupItem value={t.value} id={t.value} />
                <Icon className="w-5 h-5 text-primary" />
                <div className="flex-1">
                  <Label htmlFor={t.value} className="font-medium cursor-pointer">
                    {t.label}
                  </Label>
                  <p className="text-sm text-muted-foreground">{t.description}</p>
                </div>
              </div>
            );
          })}
        </RadioGroup>
      </div>
    </div>
  );
};
