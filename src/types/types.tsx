import { JSX } from "react";

export interface link {
  label: string;
  link: string;
}

export interface projectsProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface contactIconsProps {
  icon: JSX.Element;
  link: string;
}