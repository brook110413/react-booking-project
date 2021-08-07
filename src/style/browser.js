const size = {
  mobile: '375px',
  tablet: '768px',
  desktop: '992px',
  wideDesktop: '1200px',
};

export const device = {
  mobile: `@media (max-width: ${size.mobile})`,
  tablet: `@media (max-width: ${size.tablet})`,
  desktop: `@media (max-width: ${size.desktop})`,
  wideDesktop: `@media (max-width: ${size.wideDesktop})`,
};
