'use client';
import InfoSection from './components/InfoSection';
import AuthSection from './components/AuthSection';

export const dynamic = 'force-static';

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-row overflow-hidden">
      <InfoSection />
      <AuthSection />
    </main>
  );
}
