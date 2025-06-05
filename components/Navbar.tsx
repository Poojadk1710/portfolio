"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../app/page.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",
      gap: "24px",
      padding: "16px",
      borderBottom: "1px solid var(--gray-alpha-200)",
      background: "var(--gray-alpha-100)",
      backdropFilter: "blur(4px)",
      position: "sticky",
      top: 0,
      zIndex: 10,
    }}>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href ? styles.primary : styles.secondary}
          style={{
            padding: "6px 14px",
            borderRadius: "20px",
            fontWeight: 500,
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
