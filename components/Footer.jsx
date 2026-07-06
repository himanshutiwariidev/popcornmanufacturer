const FOOTER_LINKS = {
  Company: ["About", "Certifications", "Careers", "Contact"],
  Products: ["Classic Butter", "Caramel Crunch", "Cheese & Herb", "Private Label"],
  Partners: ["Retail", "Cinema Chains", "Export", "Distributors"],
};

export default function Footer() {
  return (
    <footer className="bg-ink pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-10 pb-14 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-4 lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-popred text-paper">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <circle cx="7" cy="8" r="3" />
                  <circle cx="13" cy="5" r="2.4" />
                  <circle cx="17" cy="10" r="2.8" />
                  <circle cx="10" cy="12" r="2.2" />
                </svg>
              </span>
              <span className="font-display text-xl font-bold text-paper">
                TipTop <span className="text-butter">Kernels</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-paper/60">
              Full-scale popcorn manufacturing for retail, cinema and export
              partners — sourced, popped and packed in-house.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-body text-sm font-bold text-paper">{heading}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-paper/60 transition-colors hover:text-butter"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-paper/10 py-7 sm:flex-row">
          <p className="font-body text-xs text-paper/50">
            © {new Date().getFullYear()} TipTop Kernels. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="text-paper/60 hover:text-butter">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-paper/60 hover:text-butter">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 014 0v4M12 13v4" strokeLinecap="round" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-paper/60 hover:text-butter">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M15 8h-2a2 2 0 00-2 2v2H9v3h2v6h3v-6h2.2l.3-3H14v-1.5a.5.5 0 01.5-.5H15V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
