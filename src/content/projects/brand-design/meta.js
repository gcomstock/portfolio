import coverImageMobile from './images/home-branddesign-mobile.jpg';
import thumbImage from './images/home-branddesign-web.jpg';
import thumbImageMobile from './images/home-branddesign-mobile.jpg';
import scrollDemoHeader from './images/summit-web-header.jpg';
import scrollDemoContent from './images/summit-web-body.jpg';

export default {
  kind: 'project',
  order: 12,
  company: '',
  title: 'Brand Design',
  subtitle: 'Identity, conference materials, and microsite design and development for Netflix.',
  accent: 'green',
  coverImageMobile,
  thumbImage,
  thumbImageMobile,
  coverScrollDemo: { headerSrc: scrollDemoHeader, contentSrc: scrollDemoContent },
  metadata: [
    { label: 'Role', value: 'Designer\nDeveloper' },
    { label: 'Team', value: 'Solo' },
    { label: 'Industry', value: 'Developer Productivity\n& Tooling' },
    { label: 'Tooling', value: 'HubSpot\nFigma\nPhotoshop, Illustrator\nHTML, CSS, JavaScript' },
  ],
};
