import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

interface NotesDialogProps {
  stepId: string;
  stepText: string;
  notes: string;
  onSave: (id: string, notes: string) => void;
}

export function NotesDialog({ stepId, stepText, notes, onSave }: NotesDialogProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(notes);

  const handleSave = () => {
    onSave(stepId, draft);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <button
            className={`ml-2 p-1 rounded hover:bg-accent transition-colors ${notes ? 'text-primary' : 'text-muted-foreground'}`}
            title={notes ? 'Edit notes' : 'Add notes'}
          />
        }
      >
        <MessageSquare className="h-3.5 w-3.5" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-sm font-medium leading-snug pr-6">{stepText}</DialogTitle>
        </DialogHeader>
        <Textarea
          placeholder="Add your notes here..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="min-h-[120px] resize-y"
        />
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
          <Button size="sm" onClick={handleSave}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
