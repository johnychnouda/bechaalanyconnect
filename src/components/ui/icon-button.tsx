import clsx from "clsx";
import ButtonLink, { ButtonLinkProps } from "./button-link";
import Image from "next/image";

type Props = {
  icon: string | React.ReactNode;
  iconContainerClassName?: string;
  childrenClassName?: string;
} & ButtonLinkProps;

export function IconButton({
  children,
  icon,
  className,
  iconContainerClassName,
  childrenClassName,
  ...props
}: Props) {
  return (
    <ButtonLink
      {...props}
      className={clsx(className, "flex items-center gap-2")}
    >
      {/* <div className={clsx(iconContainerClassName)}>{icon}</div> */}
      {/* <div className={clsx(iconContainerClassName)}>{icon}</div> */}
      {typeof icon === "string" ? (
        <Image className={clsx(iconContainerClassName)} src={icon} alt="Icon" width={24} height={24} />
      ) : (
        <div className={clsx(iconContainerClassName)}>{icon}</div>
      )}
      <p className={clsx("font-semibold text-[16px]", childrenClassName)}>
        {children}
      </p>
    </ButtonLink>
  );
}
