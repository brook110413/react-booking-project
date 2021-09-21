const size = {
  mobile: '375px',
  wideMobile: '525px',
  tablet: '768px',
  desktop: '991px',
  wideDesktop: '1200px',
};

export const device = {
  mobile: `@media (max-width: ${size.mobile})`,
  wideMobile: `@media (max-width: ${size.wideMobile})`,
  tablet: `@media (max-width: ${size.tablet})`,
  desktop: `@media (max-width: ${size.desktop})`,
  wideDesktop: `@media (max-width: ${size.wideDesktop})`,
};
