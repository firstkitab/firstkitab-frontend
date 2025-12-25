import ImageUploader from '@/components/common/ImageUploader';

export const StaffEnrollProfileSidebar = () => {
  return (
    <div className="w-full lg:w-80 bg-muted/30 border-b lg:border-b-0 lg:border-r border-border p-6 flex flex-col gap-6">
      <div className="space-y-3">
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">
          Profile Preview
        </h3>
        <div className="rounded-2xl border border-border bg-card p-4 flex flex-col items-center gap-4 shadow-sm">
          <ImageUploader />
          <div className="w-full text-center">
            <p className="text-sm font-bold text-foreground">John Q. Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};
