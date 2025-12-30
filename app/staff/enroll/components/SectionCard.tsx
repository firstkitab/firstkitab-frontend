'use client';

import React, { ReactNode } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SectionCardProps {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export const SectionCard = ({ title, icon, children, className, action }: SectionCardProps) => (
  <Card className={cn('rounded-2xl border-border/70 bg-card/70 shadow-sm', className)}>
    <header className="flex items-center justify-between gap-2 border-b border-border/80 px-6 py-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {icon}
        {title}
      </div>
      {action}
    </header>
    <CardContent className="px-6 py-5 space-y-4">{children}</CardContent>
  </Card>
);
