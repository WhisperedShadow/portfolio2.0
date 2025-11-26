"use client";

import Link from "next/link";
import { link } from "@/types/types";
import styles from "./PrimaryLinks.module.css";

const PrimaryLinks = (link: link) => {
  return (
    <Link key={link.label} href={link.link} className={styles.link}>
      {link.label}
    </Link>
  );
};

export default PrimaryLinks;
