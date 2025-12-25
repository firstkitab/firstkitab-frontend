import { StaffEnrollStep4Header } from './components/StaffEnrollStep4Header';
import { StaffEnrollPersonalSummary } from './components/StaffEnrollPersonalSummary';
import { StaffEnrollProfessionalSummary } from './components/StaffEnrollProfessionalSummary';
import { StaffEnrollDocumentsSummary } from './components/StaffEnrollDocumentsSummary';
import { StaffEnrollSubmissionPanel } from './components/StaffEnrollSubmissionPanel';
import { StaffEnrollApplicationTimeline } from './components/StaffEnrollApplicationTimeline';

export default function StaffEnrollStep4() {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl w-full">
        <StaffEnrollStep4Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <StaffEnrollPersonalSummary />
            <StaffEnrollDocumentsSummary />
            <StaffEnrollProfessionalSummary />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <StaffEnrollSubmissionPanel />
              <StaffEnrollApplicationTimeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
