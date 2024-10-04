import { UseFormRegister } from "react-hook-form";

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  as: React.ElementType;
  href?: string;
  type?: string;
}

export interface InputFieldProps {
  type: string;
  name: "userName" | "password";
  register: UseFormRegister<{ userName: string; password: string }>;
}

export interface LoginProps {
  userName: string;
  password: string;
}

export interface LoginResponse {
  message: string;
}

interface BlogTitle {
  rendered: string;
}

interface BlogMediaDetails {
  width: number;
  height: number;
  filesize: number;
}

interface BlogFeaturedMediaObject {
  id: number;
  title: string;
  caption: string;
  description: string;
  media_details: BlogMediaDetails;
  source_url: string;
}

interface BlogCategory {
  id: number;
  name: string;
  slug: string;
}

interface BlogContent {
  rendered: string;
  protected: boolean;
}

interface BlogExcerpt {
  rendered: string;
  protected: boolean;
}

export interface BlogProps {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  title: BlogTitle;
  content: BlogContent;
  excerpt: BlogExcerpt;
  categories: BlogCategory[];
  featured_media_object: BlogFeaturedMediaObject;
}
