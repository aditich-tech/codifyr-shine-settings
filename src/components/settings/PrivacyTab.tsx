import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';
import { toast } from 'sonner';

export const PrivacyTab = () => {
  const [isPublic, setIsPublic] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = () => {
    if (!oldPassword || !newPassword) {
      toast.error('Please fill in all password fields');
      return;
    }
    toast.success('Password changed successfully');
    setOldPassword('');
    setNewPassword('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Privacy Settings</h2>
        <p className="text-muted-foreground">Control your privacy and security preferences</p>
      </div>

      <div className="glass-card rounded-2xl p-6 space-y-6">
        <div className="flex items-center justify-between pb-6 border-b border-border">
          <div>
            <h4 className="font-medium">Public Profile</h4>
            <p className="text-sm text-muted-foreground">Make your profile visible to others</p>
          </div>
          <Switch checked={isPublic} onCheckedChange={setIsPublic} />
        </div>

        <div>
          <h4 className="font-medium mb-4">Change Password</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="old-password">Current Password</Label>
              <Input
                id="old-password"
                type="password"
                placeholder="Enter current password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="bg-background/50"
              />
            </div>
            <Button onClick={handlePasswordChange} className="w-full">
              Update Password
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
