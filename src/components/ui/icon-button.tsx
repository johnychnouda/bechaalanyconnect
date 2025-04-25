import clsx from "clsx";
import ButtonLink, { ButtonLinkProps } from "./button-link";

type Props = {
  icon?: React.ReactNode;
  iconContainerClassName?: string;
  childrenClassName?: string;
} & ButtonLinkProps;

export function IconButton({
  children,
  icon,
  iconContainerClassName,
  childrenClassName,
  ...props
}: Props) {
  return (
    <ButtonLink {...props} className="flex items-center gap-2">
      <div className={clsx(iconContainerClassName)}>{icon}</div>
      <p className={clsx("font-semibold text-[16px]", childrenClassName)}>
        {children}
      </p>
    </ButtonLink>
  );
}
