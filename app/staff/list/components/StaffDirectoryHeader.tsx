'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { MdAdd, MdDownload } from 'react-icons/md';
import Link from 'next/link';

export function StaffDirectoryHeader() {
  return (
    <div className="border-b border-border bg-card px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Staff Directory</h1>
          <p className="text-sm text-muted-foreground">Manage and view all staff members</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <MdDownload className="text-muted-foreground" />
            Export
          </Button>
          <Link href="/staff/enroll">
            <Button className="gap-2">
              <MdAdd size={20} />
              Add Staff
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
