export default function Logo({ light = false }) {
  return (
    <a href="#" className={`flex min-h-11 w-fit items-center gap-2 text-lg font-semibold ${light ? "text-white" : "text-ink"}`}>
      <span className="grid h-7 w-7 place-items-center rounded-md bg-teal text-sm font-bold text-white">N</span>
      NEXengage
    </a>
  );
}
