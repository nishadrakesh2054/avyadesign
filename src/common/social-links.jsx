import Link from "next/link";

const social_links = [
  {
    link: "https://www.facebook.com/AvyaClub",
    target: "_blank",
    icon: "fab fa-facebook-f",
  },
  {
    link: "https://www.instagram.com/avyaclub/",
    target: "_blank",
    icon: "fab fa-instagram",
  },

  {
    link: "https://www.youtube.com/channel/UCj1t80ccui3Y0wjBEmGnwMg",
    target: "_blank",
    icon: "fab fa-youtube",
  },
  {
    link: "https://www.tiktok.com/discover/avya-club?lang=en",
    target: "_blank",
    icon: "fab fa-tiktok",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a
          key={i}
          href={l.link}
          className={l.color}
          target={l.target ? l.target : ""}
        >
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;

const copy_right_text = {
  copy_right: (
    <>
      Copyright © {new Date().getFullYear()}{" "}
      <a href="#" target="_blank" rel="noopener noreferrer">
        avya.club
      </a>
      . All Rights Reserved. | Powered by{" "}
      <a href="https://1or8.com.np" target="_blank" rel="noopener noreferrer" style={{color: '#CA2B2E', fontWeight: 'bold'}}>
       1or8
      </a>
    </>
  ),
};
const { copy_right } = copy_right_text;

export const CopyRight = () => {
  return <>{copy_right}</>;
};

// home 04 social link
const social_links_two = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
    color: "1",
  },
  {
    link: "https://www.instagram.com",
    target: "_blank",
    icon: "fab fa-instagram",
    color: "2",
  },

  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
    color: "3",
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "fab fa-linkedin-in",
    color: "4",
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_two.map((link, i) => (
        <Link
          key={i}
          target={link.target}
          className={`icon-color-${link.color}`}
          href={link.link}
        >
          <i className={link.icon}></i>
          <span></span>
        </Link>
      ))}
    </>
  );
};
