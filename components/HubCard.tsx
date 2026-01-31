export default function HubCard({ title, desc, url }: { title: string; desc: string; url: string }) {
  return (
    <a href={url} className="block rounded-2xl border border-white/10 bg-black/30 p-5 hover:border-white/20">
      <div className="text-[#d4af37] font-bold text-lg">{title}</div>
      <div className="text-white/70 mt-2 text-sm">{desc}</div>
      <div className="text-white/40 mt-4 text-xs">Open</div>
    </a>
  );
}
