const pricing_data = [
  {
    id: 1,
    category: "Gym & Functional Fitness",
    plans: [
      {
        title: "Daily Pass",
        prices: [
          "Rs. 900 (Summer Offer)",
          "Rs. 1000 (Single/anytime)",
          "Rs. 800 (couple-per person/anytime)",
        ],
      },
      {
        title: "Monthly Membership",
        prices: [
          "Rs. 4250 (Summer Offer)",
          "Rs. 8500 (Single/anytime)",
          "Rs. 7500 (Couple-per person/anytime)",
          "Rs. 6500(timeslot(9am-4pm)/Single)",
          "Rs. 5500(timeslot(9am-4pm)/Couple-per person)",
        ],
      },
      {
        title: "3-Month Membership",
        prices: [
          "Rs. 11500 (Summer Offer)",
          "Rs. 23000 (Single/anytime)",
          "Rs. 18000 (Couple-per person/anytime)",
          "Rs. 16000(timeslot(9am-4pm)/single)",
          "Rs. 13500(timeslot(9am-4pm)/couple-per person)",
        ],
      },
      {
        title: "6-Month Membership",
        prices: [
          "Rs. 21000 (Summer Offer)",
          "Rs. 42000(anytime/single)",
          "Rs. 32000(anytime/couple-per person)",
          "Rs. 29000(timeslot(9am-4pm)/single)",
          "Rs. 24000(timeslot(9am-4pm)/couple-per person)",
        ],
      },
      {
        title: "Yearly Membership",
        prices: [
          "Rs. 59000 (Single)",
          "Rs. 52000(anytime/couple-per person)",
          "Rs. 46000(timeslot(9am-4pm)/single)",
          "Rs. 42000(timeslot(9am-4pm)/couple-per person)",
        ],
      },
    ],
  },
  {
    id: 2,
    category: "Spa & Wellness",
    plans: [
      {
        title: "Trekkers’ Healing Therapy",
        prices: ["Rs. 3000 (90 mins)", "Rs. 4500 (2 hrs)"],
      },
      {
        title: "Ayurvedic Massage",
        prices: [
          "Rs. 2000 (60 mins)",
          "Rs. 2500 (90 mins)",
          "Rs. 3500 (2 hrs)",
        ],
      },
      {
        title: "Deep Tissue Massage",
        prices: [
          "Rs. 2000 (60 mins)",
          "Rs. 2500 (90 mins)",
          "Rs. 3500 (2 hrs)",
        ],
      },
      { title: "Shirodhara Massage", prices: ["Rs. 3500 (90 mins)"] },
    ],
  },
  {
    id: 3,
    category: "Yoga, Meditation, Zumba, Aerobics",
    plans: [
      {
        title: "Yoga",
        prices: ["Rs. 500 (per session)", "Rs. 5000 (monthly)"],
      },
      {
        title: "Zumba",
        prices: ["Rs. 500 (per session)", "Rs. 3000 (monthly)"],
      },
    ],
  },
  {
    id: 4,
    category: "Swimming Pool",
    plans: [
      { title: "Adults", prices: ["Rs. 500 (per day)", "Rs. 13000 (monthly)"] },
      { title: "Kids", prices: ["Rs. 350 (per day)", "Rs. 9000 (monthly)"] },
    ],
  },
  {
    id: 5,
    category: "Club House Membership",
    plans: [
      {
        title: "Single Membership",
        prices: ["Rs. 115000 (Yearly)", "Rs. 70000 (Half Yearly)"],
      },
      {
        title: "Couple Membership",
        prices: ["Rs. 100000 (Yearly)", "Rs. 60000 (Half Yearly)"],
      },
    ],
  },
  {
    id: 6,
    category: "Limited Time Offer",
    plans: [
      {
        title: "Gym + Zumba + Cardio",
        prices: ["Rs. 8500 per month"],
        features: [
          "Full Gym access",
          "Daily Zumba dance parties",
          "Guided Cardio burn sessions",
          "Access 6 Days/week",
          "Certified trainers to push you forward.",
        ],
      },
    ],
  },
];
export default pricing_data;
