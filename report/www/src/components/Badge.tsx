import classNames from "classnames";
import React, { CSSProperties } from "react";
import { useRouter } from "next/router";

import styles from "./badge.module.scss";

type BadgeProps = {
  variant: string;
  className?: string;
  to?: string;
  style?: CSSProperties;
};

const Badge: React.FC<BadgeProps> = ({
  children,
  variant,
  className,
  to,
  style,
}) => {
  const router = useRouter();
  return (
    <button
      type="button"
      className={classNames(className, styles[variant])}
      onClick={() => {
        if (to) {
          router.push(to);
        }
      }}
      style={style}
    >
      {children}
    </button>
  );
};

export default Badge;
