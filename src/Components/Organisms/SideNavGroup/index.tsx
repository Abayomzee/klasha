import Typography from "Components/Atoms/Typography";
import SideNavLink from "Components/Molecules/SideNavLink";
import React from "react";
import { Wrapper } from "./style";

interface SideNavGroupProps {
  title: string;
  links?: Array<{ icon?: JSX.Element; label?: string; to?: string }>;
}
const SideNavGroup: React.FC<SideNavGroupProps> = ({ title, links }) => {

  return (
    <Wrapper>
      {title && <Typography as="h6" className="heading-1" text={title} />}
      {links?.map((link) => (
        <SideNavLink
          key={link.label}
         
          {...link}
        />
      ))}
    </Wrapper>
  );
};

export default SideNavGroup;
