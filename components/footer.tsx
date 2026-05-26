export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer mt-12 border-t border-white/10 bg-black/10">
      <div className="section-shell py-6">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <div className="footer-logo">
            <img src="/brand/drz.jpg" alt="DRZ logo" />
          </div>
          <p className="text-sm text-white/70">
            Copyright © {year} DRZ Cycle Parts & Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}