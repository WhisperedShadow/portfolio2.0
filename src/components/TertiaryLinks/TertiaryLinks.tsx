import Link from "next/link";
import { link } from "@/types/links";
import styles from "./TertiaryLinks.module.css";

interface secondaryLink extends link {
  dowloadble: boolean;
}

const TertiaryLinks = (link: secondaryLink) => {
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

export default TertiaryLinks;