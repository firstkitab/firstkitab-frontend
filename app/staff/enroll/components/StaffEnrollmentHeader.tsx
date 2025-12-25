import { MdSearch, MdNotifications, MdMenu } from 'react-icons/md';

export const StaffEnrollmentHeader = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6 lg:px-8 shrink-0 shadow-sm z-10">
      <div className="flex items-center gap-4 lg:hidden">
        <button className="text-muted-foreground hover:text-primary">
          <MdMenu className="text-2xl" />
        </button>
        <span className="text-lg font-bold text-foreground">FirstKitab</span>
      </div>

      <div className="hidden lg:flex flex-col justify-center">
        <h2 className="text-lg font-bold leading-tight tracking-tight text-foreground font-display">
          Staff Enrollment Form
        </h2>
        <p className="text-xs text-muted-foreground">Academic Year 2024-2025</p>
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">
        <div className="hidden max-w-sm flex-1 lg:flex justify-end">
          <div className="relative w-64">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground text-lg">
              <MdSearch />
            </span>
            <input
              className="h-9 w-full rounded border border-input bg-muted/50 pl-9 pr-4 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all shadow-sm"
              placeholder="Search records..."
              type="text"
            />
          </div>
        </div>

        <div className="h-6 w-px bg-border hidden lg:block"></div>

        <button className="relative text-muted-foreground hover:text-primary transition-colors">
          <MdNotifications className="text-2xl" />
          <span className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-orange-500 ring-1 ring-white"></span>
        </button>

        <button className="text-muted-foreground hover:text-primary transition-colors lg:hidden">
          <MdSearch className="text-2xl" />
        </button>
      </div>
    </header>
  );
};
