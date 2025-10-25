import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LogOut, Mail } from 'lucide-react';
import { toast } from 'sonner';

export const AccountTab = () => {
  const handleLogout = () => {
    toast.success('Logged out successfully');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Account Settings</h2>
        <p className="text-muted-foreground">Manage your account information and preferences</p>
      </div>

      <div className="glass-card rounded-2xl p-6 space-y-6">
        <div className="flex items-center gap-4 pb-6 border-b border-border">
          <Avatar className="w-16 h-16 ring-2 ring-primary/20">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=dev" />
            <AvatarFallback>DV</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Developer User</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>developer@codifyr.co</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3 text-muted-foreground">ACCOUNT ACTIONS</h4>
          <Button
            variant="destructive"
            className="w-full justify-start gap-2"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};
