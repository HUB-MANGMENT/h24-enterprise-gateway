export const metadata = {
  title: "H-24 Enterprise",
  description: "H-24 | HUBs – 2 Be & 4 All"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#0b0b0b", color: "white", margin: 0 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
          {children}
          <footer style={{ borderTop: "1px solid rgba(255,255,255,.08)", marginTop: 30, paddingTop: 20, opacity: 0.7 }}>
            H-24 • HUBs – 2 Be & 4 All • Knowledge • Earn • Grow
          </footer>
        </div>
      </body>
    </html>
  );
}
