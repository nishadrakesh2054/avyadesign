const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Service",
    link: "/service",
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Support",
    link: "/team",
    sub_menus: [
      { link: "/team", title: "TEAM" },
      { link: "/faq", title: "FAQ " },
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/blog",

  },

  {
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "Gallery",
    link: "/gallery",
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
];
export default menu_data;
