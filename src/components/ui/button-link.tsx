import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { HTMLAttributes } from "react";

type Props = { href?: Url } & HTMLAttributes<HTMLElement>;

export default function ButtonLink({ children, href, ...props }: Props) {
  if (href) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return <div {...props}>{children}</div>;
}
