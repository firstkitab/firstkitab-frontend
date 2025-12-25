import React from 'react';
import { MdBadge } from 'react-icons/md';

export const StaffEnrollApplicationTimeline = () => {
  return (
    <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
      <div className="flex items-start gap-3">
        <MdBadge className="text-blue-600 dark:text-blue-400 text-lg mt-0.5" />
        <div>
          <p className="text-sm font-medium text-blue-900 dark:text-blue-200">
            Application Timeline
          </p>
          <ul className="text-xs text-blue-800 dark:text-blue-300 mt-2 space-y-1">
            <li>• Review: 2-3 business days</li>
            <li>• Interview: Within 1 week</li>
            <li>• Background check: 3-5 days</li>
            <li>• Final decision: 1-2 weeks</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
