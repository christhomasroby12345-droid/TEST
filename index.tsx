import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail, Star, UtensilsCrossed } from "lucide-react";
import hero from "@/assets/hero.jpg";
import dish1 from "@/assets/dish1.jpg";
import dish2 from "@/assets/dish2.jpg";
import dish3 from "@/assets/dish3.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saffron House — Authentic Indian Kitchen" },
      {
        name: "description",
        content:
          "A neighbourhood Indian kitchen serving slow-cooked curries, tandoor classics and biryanis from family recipes. Dine in, takeaway, and reservations.",
      },
      { property: "og:title", content: "Saffron House — Authentic Indian Kitchen" },
      {
        property: "og:description",
        content:
          "Slow-cooked curries, tandoor classics and biryanis from family recipes. Open daily for lunch and dinner.",
      },
    ],
  }),
  component: Index,
});

const menu = [
  {
    section: "From the Tandoor",
    items: [
      { name: "Murgh Tikka", desc: "Yogurt-marinated chicken, charred over coals", price: "₹ 320" },
      { name: "Seekh Kebab", desc: "Hand-minced lamb, green chilli, fresh mint", price: "₹ 360" },
      { name: "Paneer Achari", desc: "Pickled-spice paneer, bell pepper, onion", price: "₹ 280" },
    ],
  },
  {
    section: "Curries & Slow Cooks",
    items: [
      { name: "Butter Chicken", desc: "Smoked tomato, fenugreek, cultured butter", price: "₹ 380" },
      { name: "Dal Makhani", desc: "Black urad simmered overnight on low coals", price: "₹ 260" },
      { name: "Laal Maas", desc: "Rajasthani mutton, mathania chilli, ghee", price: "₹ 480" },
    ],
  },
  {
    section: "Biryani & Breads",
    items: [
      { name: "Hyderabadi Mutton Biryani", desc: "Sealed handi, saffron, fried onions", price: "₹ 460" },
      { name: "Garlic Naan", desc: "Wood-fired, brushed with garlic ghee", price: "₹ 80" },
      { name: "Lachha Paratha", desc: "Flaky layered whole wheat", price: "₹ 70" },
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-primary-foreground">
          <a href="#top" className="flex items-center gap-2 font-display text-2xl tracking-wide">
            <UtensilsCrossed className="h-5 w-5" />
            Saffron House
          </a>
          <div className="hidden gap-8 text-sm uppercase tracking-[0.2em] md:flex">
            <a href="#about" className="hover:text-accent transition">About</a>
            <a href="#menu" className="hover:text-accent transition">Menu</a>
            <a href="#gallery" className="hover:text-accent transition">Gallery</a>
            <a href="#visit" className="hover:text-accent transition">Visit</a>
          </div>
          <a
            href="#visit"
            className="hidden rounded-sm border border-primary-foreground/40 px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-primary-foreground hover:text-secondary transition md:inline-block"
          >
            Reserve
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="A copper thali of Indian dishes with naan, biryani, and curries"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <span className="mb-6 inline-block text-xs uppercase tracking-[0.4em] text-accent">
            Est. 1998 · Koramangala
          </span>
          <h1 className="font-display text-6xl leading-[1.05] sm:text-7xl md:text-8xl">
            Where every spice
            <br />
            <em className="text-accent not-italic">tells a story.</em>
          </h1>
          <p className="mt-8 max-w-xl text-base text-primary-foreground/80 md:text-lg">
            A neighbourhood kitchen cooking slow, soulful Indian food the way our
            grandmothers did — over coal, over time, with patience.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu"
              className="rounded-sm bg-primary px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground shadow-[var(--shadow-warm)] hover:opacity-90 transition"
            >
              View the Menu
            </a>
            <a
              href="#visit"
              className="rounded-sm border border-primary-foreground/50 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] hover:bg-primary-foreground hover:text-secondary transition"
            >
              Book a Table
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20 md:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Our Story</span>
            <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              Three generations,<br />one kitchen.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Saffron House began in 1998 as a six-table family kitchen on the corner
                of 5th Block. Twenty-five years on, we are still cooking the same dal —
                simmered overnight, finished with cultured butter, served in the copper
                handi our grandfather brought from Lucknow.
              </p>
              <p>
                Our masalas are still ground fresh each morning. Our breads are still
                slapped against a clay tandoor by hand. Some things, we believe, are
                worth the time.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm">
              <div className="flex items-center gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-muted-foreground">
                4.8 · 2,400+ reviews on Zomato & Google
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src={interior}
              alt="Warm candlelit interior of Saffron House with brass lanterns"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover shadow-[var(--shadow-warm)]"
            />
            <div className="absolute -bottom-6 -left-6 hidden bg-secondary px-8 py-6 text-secondary-foreground md:block">
              <div className="font-display text-4xl">25</div>
              <div className="text-xs uppercase tracking-[0.2em] text-secondary-foreground/70">
                Years cooking
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">The Menu</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">A taste of the kitchen</h2>
            <p className="mx-auto mt-4 max-w-xl text-secondary-foreground/70">
              A small selection from our menu. Ask your server about today's specials and
              regional features.
            </p>
          </div>

          <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-10">
            {menu.map((group) => (
              <div key={group.section}>
                <h3 className="font-display text-2xl text-accent">{group.section}</h3>
                <div className="mt-6 h-px w-12 bg-accent/60" />
                <ul className="mt-6 space-y-6">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="font-display text-lg">{item.name}</span>
                        <span className="text-sm text-accent">{item.price}</span>
                      </div>
                      <p className="mt-1 text-sm text-secondary-foreground/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">From the kitchen</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">Cooked with fire,<br />served with care.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Every dish leaves the kitchen the moment it is ready — never sooner, never later.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            { src: dish1, alt: "Sizzling tandoori chicken with lemon" },
            { src: dish2, alt: "Paneer butter masala with fresh naan" },
            { src: dish3, alt: "Hyderabadi mutton biryani in a copper handi" },
          ].map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden ${i === 1 ? "md:translate-y-10" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={800}
                height={800}
                loading="lazy"
                className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Visit */}
      <section
        id="visit"
        className="relative isolate overflow-hidden bg-[var(--gradient-warm)] text-primary-foreground"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Visit us</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">Pull up a chair.</h2>
            <p className="mt-6 max-w-md text-primary-foreground/80">
              We hold a few tables for walk-ins each evening. For weekends and parties of
              six or more, a quick call goes a long way.
            </p>

            <dl className="mt-10 space-y-5 text-sm">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <dt className="font-medium uppercase tracking-[0.2em] text-xs text-primary-foreground/70">Find us</dt>
                  <dd className="mt-1">12, 5th Block, Koramangala, Bengaluru 560095</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <dt className="font-medium uppercase tracking-[0.2em] text-xs text-primary-foreground/70">Hours</dt>
                  <dd className="mt-1">Tue – Sun · 12:00 – 15:30, 19:00 – 23:00 · Closed Monday</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <dt className="font-medium uppercase tracking-[0.2em] text-xs text-primary-foreground/70">Reserve</dt>
                  <dd className="mt-1">+91 80 4112 3344</dd>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <dt className="font-medium uppercase tracking-[0.2em] text-xs text-primary-foreground/70">Email</dt>
                  <dd className="mt-1">hello@saffronhouse.in</dd>
                </div>
              </div>
            </dl>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — we'll confirm your reservation by phone shortly.");
            }}
            className="rounded-sm bg-background/10 p-8 backdrop-blur-sm ring-1 ring-primary-foreground/20"
          >
            <h3 className="font-display text-2xl">Request a table</h3>
            <div className="mt-6 space-y-4">
              <input
                required
                placeholder="Your name"
                className="w-full border-b border-primary-foreground/30 bg-transparent py-3 text-sm placeholder:text-primary-foreground/60 focus:border-accent focus:outline-none"
              />
              <input
                required
                type="tel"
                placeholder="Phone number"
                className="w-full border-b border-primary-foreground/30 bg-transparent py-3 text-sm placeholder:text-primary-foreground/60 focus:border-accent focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  required
                  type="date"
                  className="w-full border-b border-primary-foreground/30 bg-transparent py-3 text-sm placeholder:text-primary-foreground/60 focus:border-accent focus:outline-none"
                />
                <input
                  required
                  type="time"
                  className="w-full border-b border-primary-foreground/30 bg-transparent py-3 text-sm placeholder:text-primary-foreground/60 focus:border-accent focus:outline-none"
                />
              </div>
              <input
                required
                type="number"
                min={1}
                max={20}
                placeholder="Guests"
                className="w-full border-b border-primary-foreground/30 bg-transparent py-3 text-sm placeholder:text-primary-foreground/60 focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-sm bg-accent px-6 py-4 text-xs uppercase tracking-[0.25em] text-secondary hover:opacity-90 transition"
            >
              Request reservation
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
          <div className="font-display text-xl">Saffron House</div>
          <p className="text-xs uppercase tracking-[0.2em] text-secondary-foreground/60">
            © {new Date().getFullYear()} — Cooked with love in Bengaluru
          </p>
        </div>
      </footer>
    </div>
  );
}
