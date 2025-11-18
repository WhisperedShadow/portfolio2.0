import Link from "next/link";
import { link } from "@/types/links";
import styles from "./SecondaryLinks.module.css";

interface secondaryLink extends link {
  dowloadble: boolean;
}

const SecondaryLinks = (link: secondaryLink) => {
  return (
    <Link
      key={link.label}
      href={link.link}
      className={styles.link}
      download={link.dowloadble ? "" : undefined}
    >
      {link.label}
    </Link>
  );
};

export default SecondaryLinks;
