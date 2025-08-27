import classNames from "classnames";

interface FooterLinksProps {
  links: string[];
}
export default function FooterLinks({ links }: FooterLinksProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      {links.map((link, index) => (
        <span
          key={index}
          className={classNames({ "font-semibold": index === 0 })}
        >
          {link}
        </span>
      ))}
    </div>
  );
}
