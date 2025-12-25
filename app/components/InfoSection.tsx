'use client';
const InfoSection = () => {
  const backgroundImageUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDUlfsmEKy0B2dx7uhllWFbJQWHshJRLkQY_gSBajarimYfkAc4-v8xSLwDAAgSVf5gvKpjmkQTa1aYg1T-NhTwZfLHZh6xYScM0B0xC0YOT1-dUvL0j25P12GkU3zG0Ro4uFq7m2pL5elDivSqt8fRMM51EwElKP9O4QRjsZOwtrBbavoIHJDiglC3Jy8IeJVm8Ln36c0z_xm50flYFyA7nqq3uEKMNkqa2DzUser8JTl3YO89I_yzzOAXvxGBSkWQ9GkbQWjbO1A';

  return (
    <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-end p-12">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      ></div>
      <div className="absolute inset-0 bg-linear-to-t from-[#111418]/90 via-[#111418]/50 to-primary/30 z-10 mix-blend-multiply"></div>
      <div className="relative z-20 max-w-lg">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
              school
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">FirstKitab</h2>
        </div>
        <p className="text-3xl font-bold leading-tight text-white mb-4">
          Empowering the next generation of learners.
        </p>
        <p className="text-lg text-gray-200 opacity-90">
          Seamlessly connecting students, guardians, and educators in one unified platform.
        </p>
        <div className="mt-8 flex gap-2">
          <div className="h-1.5 w-8 rounded-full bg-white"></div>
          <div className="h-1.5 w-2 rounded-full bg-white/40"></div>
          <div className="h-1.5 w-2 rounded-full bg-white/40"></div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
