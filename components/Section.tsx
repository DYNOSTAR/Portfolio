import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft sm:p-8">
        <h2 id={`${id}-title`} className="text-2xl font-semibold text-navy sm:text-3xl">
          {title}
        </h2>
        <div className="mt-5">{children}</div>
      </div>
    </section>
  );
}
