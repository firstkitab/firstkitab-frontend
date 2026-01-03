import { redirect } from 'next/navigation';

export const dynamic = 'force-static';

export default function EnrollStaffPage() {
  redirect('/staff/enroll/step-1');
}
