import React from "react";
import Link from "next/link";

interface AuthFooterProps {
  description: string;
  linkText: string;
  linkHref: string;
}

export default function AuthFooter({ description, linkText, linkHref }: AuthFooterProps) {
  return (
    <p className="text-center mt-8 text-neutral-400 text-sm">
      {description}{" "}
      <Link 
        href={linkHref} 
        className="text-blue-400 font-bold hover:text-blue-300 transition-colors"
      >
        {linkText}
      </Link>
    </p>
  );
}