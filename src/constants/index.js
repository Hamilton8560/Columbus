const navLinks = [
  {
    name: "How It Works",
    link: "#work",
  },
  {
    name: "Shippers",
    link: "#experience",
  },
  {
    name: "Drivers",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Freight", imgPath: "/images/ideas.svg" },
  { text: "Loads", imgPath: "/images/concepts.svg" },
  { text: "Shipments", imgPath: "/images/designs.svg" },
  { text: "Cargo", imgPath: "/images/code.svg" },
  { text: "Freight", imgPath: "/images/ideas.svg" },
  { text: "Loads", imgPath: "/images/concepts.svg" },
  { text: "Shipments", imgPath: "/images/designs.svg" },
  { text: "Cargo", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 50, suffix: "K", label: "Loads Delivered" },
  { value: 800, suffix: "+", label: "Active Carriers" },
  { value: 25, suffix: "%", label: "Average Savings" },
  { value: 98, suffix: "%", label: "On-Time Delivery Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Direct Connect",
    desc: "Connect directly with carriers. No brokers, no middlemen, no hidden fees.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Real-Time Tracking",
    desc: "Track your freight from pickup to delivery with live GPS updates.",
  },
  {
    imgPath: "/images/time.png",
    title: "Lower Costs",
    desc: "Save up to 25% by eliminating broker commissions on every single load.",
  },
];

const techStackImgs = [
  {
    name: "Dry Van Freight",
    imgPath: "/images/boxtruckimage.png",
  },
  {
    name: "Flatbed Hauling",
    imgPath: "/images/flatbedimage.png",
  },
  {
    name: "Refrigerated Loads",
    imgPath: "/images/reeferimage.png",
  },
  {
    name: "Step Deck Trailers",
    imgPath: "/images/stepdeckimage.png",
  },
  {
    name: "Oversized Freight",
    imgPath: "/images/oversizedimage.png",
  },
];

const techStackIcons = [
  {
    name: "Dry Van Freight",
    modelPath: "/models/box_truck.glb",
    scale: 3,
    rotation: [0, Math.PI / 5, 0],
  },
  {
    name: "Flatbed Hauling",
     modelPath: "/models/flatbed.glb",
    scale: 3,
    rotation: [0, 0, 0],
  },
  {
    name: "Refrigerated Loads",
    modelPath: "/models/reefer.glb",
    scale: 3,
    rotation: [0, Math.PI / 4, 0],
  },
  {
    name: "Step Deck Trailers",
    modelPath: "/models/stepdeck.glb",
    scale: 3,
    rotation: [0, 0, 0],
  },
  {
    name: "Oversized Freight",
    modelPath: "/models/oversized.glb",
    scale: 3,
    rotation: [0, Math.PI / 2, 0],
  },
];

const expCards = [
  {
    review: "Columbus transformed how we move freight. We cut shipping costs by 22% and now have direct relationships with reliable carriers we trust.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "For Shippers",
    date: "Post Loads in Minutes",
    responsibilities: [
      "Get instant quotes from verified carriers competing for your freight.",
      "Track shipments in real-time from pickup to final delivery destination.",
      "Eliminate broker fees and connect directly with qualified drivers.",
    ],
  },
  {
    review: "Since joining Columbus, I've increased my take-home pay by keeping more of each load. Finding freight has never been easier.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "For Carriers",
    date: "Find Loads Directly",
    responsibilities: [
      "Access thousands of loads posted directly by shippers nationwide.",
      "Keep more of your earnings without broker commissions eating profits.",
      "Build direct relationships with shippers for consistent freight.",
    ],
  },
  {
    review: "The platform is incredibly easy to use. I went from signing up to booking my first load in under an hour. Game changer.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "For Owner-Operators",
    date: "Maximize Your Earnings",
    responsibilities: [
      "Set your own rates and choose the loads that work for your schedule.",
      "Get paid faster with streamlined payment processing and tracking.",
      "Access dedicated support to help grow your trucking business.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    mentions: "@mitchellfreight",
    review:
      "Columbus completely changed how we handle logistics. We used to spend hours calling brokers and now we post a load and have carriers bidding within minutes. Our shipping costs dropped 20%.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Marcus Johnson",
    mentions: "@marcusjhauls",
    review:
      "As an owner-operator, Columbus has been a game changer. I keep more money from each load without brokers taking their cut. The app makes finding good-paying freight incredibly simple. Highly recommend to any trucker.",
    imgPath: "/images/client3.png",
  },
  {
    name: "David Thompson",
    mentions: "@thompsonlogistics",
    review:
      "We've been in the freight business for 15 years and Columbus is the best platform we've used. The direct shipper connections mean better rates, and the real-time tracking gives our customers peace of mind. If you're looking to streamline your freight operations and cut costs, Columbus is the solution.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Jennifer Rodriguez",
    mentions: "@jrodshipments",
    review:
      "Finding reliable carriers used to be our biggest headache. With Columbus, we have access to vetted drivers who actually show up on time. Our delivery success rate is now at 99%.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Robert Williams",
    mentions: "@rwilliamstrucking",
    review:
      "I was skeptical at first but Columbus delivered on every promise. More loads, better pay, and I finally have control over my schedule. My revenue increased by 30% in the first three months!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Amanda Foster",
    mentions: "@fostermfg",
    review:
      "Our manufacturing company ships nationwide daily. Columbus simplified everything and gave us visibility we never had before. The customer support team is responsive and helpful.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
