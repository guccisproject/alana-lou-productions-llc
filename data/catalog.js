/* Alana Lou Productions LLC — catalog data
   Edit prices/descriptions here; services.html, packages.html and
   products.html all render from these arrays. */

const services = [
  {
    id: "custom-portrait-art",
    name: "Custom Portrait Art (Digital)",
    price: 65,
    unit: "piece",
    desc: "Send us a favorite photo and we'll turn it into a one-of-a-kind digital art piece — ready to print, frame, or keep on your phone.",
    image: "https://images.unsplash.com/photo-1485118019109-67fdcf7ff608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "pet-memorial-portrait",
    name: "Pet Memorial & Tribute Portrait",
    price: 75,
    unit: "piece",
    desc: "A custom art piece honoring a beloved pet — current companion or one you're missing. Gentle, personal, and made to last.",
    image: "https://images.unsplash.com/photo-1771149669629-941987de828f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "custom-apparel-design",
    name: "Custom Apparel Design",
    price: 40,
    unit: "design",
    desc: "A one-of-a-kind design built around your photo or idea, ready to be printed on the shirt, hoodie, or item of your choice.",
    image: "https://images.unsplash.com/photo-1643216674491-33878507b402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "photo-restoration",
    name: "Photo Restoration & Enhancement",
    price: 35,
    unit: "photo",
    desc: "Repair, clean up, or bring color back to a treasured old photograph so it can be shared for another generation.",
    image: "https://images.unsplash.com/photo-1514207994142-98522b5a2b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "mini-photo-session",
    name: "Mini Photography Session",
    price: 150,
    unit: "session",
    desc: "A relaxed on-location mini session in the Las Vegas area for portraits, pets, or milestone moments — digital gallery included.",
    image: "https://images.unsplash.com/photo-1695048994291-2e96839a0a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "event-coverage",
    name: "Event Photography & Videography Coverage",
    price: 300,
    unit: "event, from",
    desc: "On-site photo and video coverage for weddings, parties, and milestone celebrations — base rate for a few hours, scaled to your event.",
    image: "https://images.unsplash.com/photo-1503525443530-339273ca8a86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "podcast-recording",
    name: "Podcast Recording Session",
    price: 120,
    unit: "session",
    desc: "A guided recording session for a single episode — audio capture and basic cleanup, ready for you to publish.",
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "brand-identity-design",
    name: "Brand Identity & Logo Design",
    price: 250,
    unit: "package",
    desc: "A logo and a small brand kit (colors, fonts, and basic usage guide) built for a small business, creator, or personal brand.",
    image: "https://images.unsplash.com/photo-1716471330463-f475b00f0506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "social-media-content",
    name: "Social Media Content Package",
    price: 180,
    unit: "package",
    desc: "A batch of short-form video and photo content shot and edited for your business or personal brand's social channels.",
    image: "https://images.unsplash.com/photo-1690883793939-f8cca2f28ee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "rush-turnaround",
    name: "Rush Turnaround Add-On",
    price: 20,
    unit: "order",
    desc: "Need it sooner? Add this to move your order to the front of the queue. We'll confirm the new timeline when we see your inquiry.",
    image: "https://images.unsplash.com/photo-1663433567177-9f94be0bff4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  }
];

const packages = [
  {
    id: "memory-keepsake-bundle",
    name: "Memory Keepsake Bundle",
    price: 120,
    unit: "bundle",
    desc: "One photo, two keepsakes: a custom art print plus a matching apparel piece, made as a set so the memory travels with you.",
    image: "https://images.unsplash.com/photo-1786408161444-770f9b34639e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "pet-tribute-package",
    name: "Pet Tribute Package",
    price: 130,
    unit: "package",
    desc: "A pet portrait art piece, a printed keepsake, and the digital file — a full tribute to a companion who deserves one.",
    image: "https://images.unsplash.com/photo-1606147442403-795098e868b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "celebration-of-life",
    name: "Celebration of Life Package",
    price: 200,
    unit: "package",
    desc: "A multi-piece custom memorial set — art, print, and keepsake — designed to be displayed at a service or gathering.",
    image: "https://images.unsplash.com/photo-1528351655744-27cc30462816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "bulk-event-package",
    name: "Bulk Event Commemorative Package",
    price: 8,
    unit: "piece (10-piece minimum)",
    desc: "Matching custom pieces made in quantity for weddings, reunions, memorials, birthdays, or any gathering worth remembering.",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "podcast-launch-package",
    name: "Podcast Launch Package",
    price: 275,
    unit: "package",
    desc: "Cover art design plus recording and editing for your first three episodes — everything you need to get a show off the ground.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "brand-launch-package",
    name: "Brand Launch Package",
    price: 350,
    unit: "package",
    desc: "Logo, mini brand kit, and a first batch of social media content — a full starter identity for a new or growing business.",
    image: "https://images.unsplash.com/photo-1776278806688-64ef6a7e2cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  }
];

const products = [
  {
    id: "canvas-print",
    name: "Custom Canvas Print",
    price: 55,
    unit: "print, from",
    desc: "Your custom art or photo, printed and stretched on gallery-quality canvas. Multiple sizes available.",
    image: "https://images.unsplash.com/photo-1684741890991-70599d096d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "framed-art-print",
    name: "Custom Framed Art Print",
    price: 70,
    unit: "print, from",
    desc: "A finished, ready-to-hang print in a clean frame — the easiest way to get a custom piece straight onto the wall.",
    image: "https://images.unsplash.com/photo-1742219738392-0fd865539070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "photo-blanket",
    name: "Custom Photo Blanket",
    price: 60,
    unit: "blanket",
    desc: "A soft, everyday keepsake featuring your custom photo or art — cozy enough to actually use.",
    image: "https://images.unsplash.com/photo-1610286347146-af3d8f9a9103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "custom-tshirt",
    name: "Custom T-Shirt",
    price: 35,
    unit: "shirt",
    desc: "Your design, your photo, your shirt. Available in a range of sizes.",
    image: "https://images.unsplash.com/photo-1637729099669-3881fe3e4de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "custom-hoodie",
    name: "Custom Hoodie",
    price: 55,
    unit: "hoodie",
    desc: "Same custom design, made for cooler nights. A favorite for matching family or event orders.",
    image: "https://images.unsplash.com/photo-1629219219925-ea8de62f2d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  },
  {
    id: "keepsake-ornament",
    name: "Custom Keepsake Ornament",
    price: 18,
    unit: "ornament",
    desc: "A small, meaningful piece for the tree, a shelf, or a gift — featuring the photo or art you choose.",
    image: "https://images.unsplash.com/photo-1590190537798-4db559287bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900"
  }
];
