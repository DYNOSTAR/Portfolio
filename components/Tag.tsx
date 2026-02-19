type TagProps = {
  label: string;
};

export function Tag({ label }: TagProps) {
  return (
    <span className="inline-flex rounded-full border border-accent-light bg-[#F4FAFF] px-3 py-1 text-sm font-medium text-navy">
      {label}
    </span>
  );
}
