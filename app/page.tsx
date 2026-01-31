import { HUBS } from "@/lib/hubs";
import HubCard from "@/components/HubCard";

export default function Home() {
  return (
    <div style={{ display: "grid", gap: 18 }}>
      <section style={{ padding: 22, border: "1px solid rgba(255,255,255,.08)", borderRadius: 18, background: "rgba(0,0,0,.25)" }}>
        <h1 style={{ margin: 0, color: "#d4af37", fontSize: 52, fontWeight: 900 }}>H-24</h1>
        <div style={{ marginTop: 8, fontSize: 18, opacity: 0.85 }}>HUBs – 2 Be & 4 All</div>
        <div style={{ marginTop: 6, opacity: 0.6 }}>Knowledge • Earn • Grow</div>
      </section>

      <section>
        <h2 style={{ margin: "10px 0", fontSize: 18 }}>Explore Hubs</h2>
        <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {HUBS.map((h) => (
            <HubCard key={h.key} title={h.title} desc={h.desc} url={h.url} />
          ))}
        </div>
      </section>
    </div>
  );
}
