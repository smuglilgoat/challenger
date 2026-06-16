import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, Lightbulb } from 'lucide-react';
import type { InfoSection } from '@/data/types';

interface InfoSectionViewProps {
  sections: InfoSection[];
}

export function InfoSectionView({ sections }: InfoSectionViewProps) {
  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <SectionCard key={section.id} section={section} />
      ))}
    </div>
  );
}

function SectionCard({ section }: { section: InfoSection }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{section.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {section.content && (
          <p className="text-sm text-muted-foreground">{section.content}</p>
        )}

        {section.items && section.items.length > 0 && (
          <div className="space-y-1.5">
            {section.items.map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <Badge variant={item.highlight ? 'default' : 'secondary'} className="shrink-0 text-xs mt-0.5">
                  {item.label}
                </Badge>
                <span className="text-muted-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {section.tables?.map((table, i) => (
          <div key={i} className="space-y-2">
            {table.title && <h4 className="text-sm font-medium">{table.title}</h4>}
            <div className="overflow-x-auto rounded-md border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    {table.data.headers.map((h, j) => (
                      <th key={j} className="px-3 py-2 text-left font-medium text-muted-foreground">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.data.rows.map((row, j) => (
                    <tr key={j} className="border-b last:border-0">
                      {row.map((cell, k) => (
                        <td key={k} className="px-3 py-1.5">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        {section.tips?.map((tip, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 rounded-md p-3">
            <Lightbulb className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{tip}</span>
          </div>
        ))}

        {section.warnings?.map((warn, i) => (
          <div key={i} className="flex items-start gap-2 text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 rounded-md p-3">
            <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{warn}</span>
          </div>
        ))}

        {section.subsections && section.subsections.length > 0 && (
          <div className="space-y-4 pt-2">
            <Separator />
            {section.subsections.map((sub) => (
              <SectionCard key={sub.id} section={sub} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
