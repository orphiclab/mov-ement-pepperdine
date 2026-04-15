'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageBanner, GuideBand } from '@/components/PageComponents';

const allItems = [
  { type: 'deal', cat: 'Dining', title: "Wave's Pizza — Finals Week 30% Off", date: 'Ends Apr 30', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80', desc: "Fuel your study sessions with the best pizza near campus. Show your Movement pass at the counter." },
  { type: 'event', cat: 'Events', title: 'Pepperdine Spring Block Party Night', date: 'Apr 18, 2025', img: 'https://images.unsplash.com/photo-1688602082765-4619f9b6f844?auto=format&fit=crop&w=600&q=80', desc: 'The Movement partners with local venues for the biggest student night of the semester.' },
  { type: 'deal', cat: 'Fitness', title: 'Fit Life Gym — First 6 Weeks Free', date: 'Ongoing', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80', desc: 'No contract, cancel anytime. First 6 weeks completely free for Pepperdine Waves.' },
  { type: 'deal', cat: 'Retail', title: 'Style Local — 25% Off Spring Collection', date: 'Ends May 15', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80', desc: 'New spring styles just dropped. Pepperdine students save 25% on everything in store.' },
  { type: 'event', cat: 'Events', title: 'Wave Coffee Social @ Campus Eats', date: 'Every Friday', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80', desc: 'Weekly coffee hangout for Pepperdine students. Free coffee for the first 30 through the door.' },
  { type: 'deal', cat: 'Services', title: 'Wave Cuts — $5 Off Any Haircut', date: 'Ongoing', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80', desc: "Malibu's favorite student barbershop. Show your Movement pass and save $5 every single visit." },
  { type: 'deal', cat: 'Dining', title: 'Riverside Café — 30% Off Mon–Fri', date: 'Ongoing', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80', desc: 'Show your Movement student pass and save 30% off your entire order Monday through Friday.' },
  { type: 'event', cat: 'Events', title: 'Local Business Open House Night', date: 'May 2, 2025', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80', desc: 'Meet the owners of 20+ Movement merchants in one big welcome event. Exclusive deals on the night.' },
];

export default function HappeningPage() {
  const [filter, setFilter] = useState<'all' | 'deal' | 'event'>('all');
  const filtered = filter === 'all' ? allItems : allItems.filter(i => i.type === filter);

  return (
    <>
      <Navbar />
      <PageBanner title="Happening Now" breadcrumb="Happening" />

      {/* ─── Filter + Blog grid ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            {/* Header row */}
            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
              <div className="col col-xl-8">
                <div className="d-flex flex-column gspace-2 animate-box animated fast animate__animated" data-animate="animate__fadeInLeft">
                  <div className="sub-heading">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Latest Deals &amp; Events</span>
                  </div>
                  <h2 className="title-heading">What&apos;s Happening Around Pepperdine Campus</h2>
                </div>
              </div>
              <div className="col col-xl-4">
                <div className="d-flex flex-column gspace-2 justify-content-end h-100 animate-box animated animate__animated" data-animate="animate__fadeInRight">
                  <p>New deals added every week. Events, limited-time offers, and campus partnerships — all in one place.</p>
                  <div className="link-wrapper">
                    <Link href="/students">Register & Unlock All Deals</Link>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter buttons */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['all', 'deal', 'event'].map(f => (
                <button key={f} onClick={() => setFilter(f as typeof filter)}
                  className={`btn ${filter === f ? 'btn-accent' : 'btn-outline'}`}
                  style={{ borderRadius: 999, padding: '8px 22px', fontFamily: 'inherit', fontWeight: 600, border: filter === f ? 'none' : '2px solid #ddd', cursor: 'pointer' }}>
                  {f === 'all' ? 'All' : f === 'deal' ? '🏷️ Deals' : '🎉 Events'}
                </button>
              ))}
            </div>

            {/* Blog card grid */}
            <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
              {filtered.map(item => (
                <div className="col" key={item.title}>
                  <div className="card card-blog animate-box animated animate__animated" data-animate="animate__fadeInUp">
                    <div className="blog-image">
                      <img src={item.img} alt={item.title} className="img-fluid" />
                    </div>
                    <div className="card-body">
                      <div className="d-flex flex-row gspace-2">
                        <div className="d-flex flex-row gspace-1 align-items-center">
                          <i className="fa-solid fa-calendar accent-color"></i>
                          <span className="meta-data">{item.date}</span>
                        </div>
                        <div className="d-flex flex-row gspace-1 align-items-center">
                          <i className="fa-solid fa-folder accent-color"></i>
                          <span className="meta-data">{item.cat}</span>
                        </div>
                      </div>
                      <a href="#" className="blog-link">{item.title}</a>
                      <p>{item.desc}</p>
                      <Link href="/students" className="read-more">
                        {item.type === 'deal' ? 'Claim This Deal' : 'View Event Details'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <GuideBand
        title="Never Miss a Deal or Event!"
        desc="Register free and get notified every time a new deal drops or a campus event is added. Be the first to claim the best offers."
        linkLabel="Register Free"
        linkHref="/students"
      />

      {/* ─── Newsletter ─── */}
      <div className="section">
        <div className="hero-container">
          <div style={{
            maxWidth: 680,
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(139,18,223,0.08) 100%)',
            border: '1px solid rgba(224,16,110,0.2)',
            borderRadius: 28,
            padding: '56px 48px',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'linear-gradient(135deg, rgba(255,98,0,0.15), rgba(224,16,110,0.15))',
                border: '1px solid rgba(224,16,110,0.25)',
                borderRadius: 999, padding: '6px 18px', marginBottom: 20,
                fontSize: '0.85rem', fontWeight: 600, color: '#FF6200',
              }}>
                <i className="fa-solid fa-bell" style={{ fontSize: '0.8rem' }}></i>
                Stay Updated
              </div>
              <h3 style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800,
                background: 'linear-gradient(284deg, rgba(255,255,255,0.5) 3%, #fff 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: 12, lineHeight: 1.2,
              }}>
                Stay in the Loop with The Movement
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
                New deals added every week. Subscribe and get the latest offers delivered straight to your Pepperdine inbox.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ position: 'relative' }}>
                <i className="fa-solid fa-envelope" style={{
                  position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)',
                  color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem',
                }}></i>
                <input type="email" placeholder="Enter your Pepperdine email address" required style={{
                  width: '100%', padding: '16px 18px 16px 46px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 14, color: '#fff', fontSize: '0.95rem',
                  outline: 'none', transition: 'border-color 0.3s, box-shadow 0.3s',
                  fontFamily: 'inherit',
                }} onFocus={e => { e.target.style.borderColor = 'rgba(224,16,110,0.5)'; e.target.style.boxShadow = '0 0 20px rgba(224,16,110,0.12)'; }}
                   onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; }} />
              </div>
              <button type="submit" style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #FF6200 0%, #E0106E 50%, #8B12DF 100%)',
                border: 'none', borderRadius: 14, color: '#fff',
                fontSize: '1rem', fontWeight: 700, fontFamily: 'inherit',
                cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 8px 32px rgba(224,16,110,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              }}
                onMouseEnter={e => { (e.target as HTMLElement).style.transform = 'translateY(-2px)'; (e.target as HTMLElement).style.boxShadow = '0 12px 40px rgba(224,16,110,0.4)'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.transform = 'translateY(0)'; (e.target as HTMLElement).style.boxShadow = '0 8px 32px rgba(224,16,110,0.3)'; }}>
                Subscribe
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>

            {/* Trust badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 24, color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
              <i className="fa-solid fa-lock"></i>
              <span>We respect your privacy · Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
