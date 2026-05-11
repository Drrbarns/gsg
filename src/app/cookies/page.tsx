import type { Metadata } from 'next';
import LegalPageLayout, { type LegalSection } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How GSG Brands uses cookies and similar technologies on gsgbrands.com.gh and related GSG service domains.',
  alternates: { canonical: '/cookies' },
};

const EFFECTIVE_DATE = '11 May 2026';

const sections: LegalSection[] = [
  {
    id: 'about',
    number: '01',
    title: 'About this policy',
    content: (
      <p>
        This Cookie Policy explains how GSG Brands uses cookies and similar technologies on{' '}
        <a href="https://gsgbrands.com.gh">gsgbrands.com.gh</a> and our related service domains. It should be read
        together with our <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    ),
  },
  {
    id: 'what-cookies-are',
    number: '02',
    title: 'What cookies are',
    content: (
      <p>
        Cookies are small text files that a website stores on your device when you visit it. They are widely used to
        make websites work efficiently, remember preferences, and provide information to the site owner. We also use
        similar technologies such as pixels, local storage, and web beacons. For simplicity we refer to all of these
        as &ldquo;<strong>cookies</strong>&rdquo;.
      </p>
    ),
  },
  {
    id: 'why',
    number: '03',
    title: 'Why we use cookies',
    content: (
      <>
        <p>We use cookies to:</p>
        <ul>
          <li>keep you signed in across pages and visits;</li>
          <li>remember items in your cart, language preference, and recent activity;</li>
          <li>secure your session against tampering and abuse;</li>
          <li>measure how the site is used so we can improve speed, reliability, and content;</li>
          <li>show you relevant information across our platform.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'categories',
    number: '04',
    title: 'Categories of cookies',
    content: (
      <>
        <h3>Strictly necessary</h3>
        <p>
          Essential for the site to function — for example, session and security cookies. These cannot be switched
          off without affecting your ability to use the Services.
        </p>

        <h3>Functional</h3>
        <p>
          Remember preferences and choices so we can give you a more personalised experience — for example, language,
          region, and accessibility settings.
        </p>

        <h3>Performance &amp; analytics</h3>
        <p>
          Collect aggregated information about how visitors interact with our pages so that we can measure
          performance and improve the experience over time.
        </p>

        <h3>Marketing &amp; advertising</h3>
        <p>
          Where applicable, used to measure the effectiveness of our campaigns and to show you relevant content. We
          seek your consent for these cookies where required.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    number: '05',
    title: 'Third-party cookies',
    content: (
      <p>
        Some cookies are set by third parties we work with — for example, hosting providers, analytics tools,
        payment processors, and customer-support widgets. Their use of cookies is governed by their own privacy and
        cookie policies; please consult them directly.
      </p>
    ),
  },
  {
    id: 'manage',
    number: '06',
    title: 'Managing cookies',
    content: (
      <>
        <p>You can manage cookies in several ways:</p>
        <ul>
          <li>
            <strong>Browser settings</strong> — most browsers let you accept, reject, or delete cookies, either
            entirely or per site.
          </li>
          <li>
            <strong>Cookie controls on our site</strong> — where offered, our cookie banner lets you choose which
            non-essential categories to allow.
          </li>
          <li>
            <strong>Device controls</strong> — mobile operating systems offer their own ad-tracking and analytics
            controls.
          </li>
        </ul>
        <p>Disabling cookies may affect the functionality of parts of the Services.</p>
      </>
    ),
  },
  {
    id: 'changes',
    number: '07',
    title: 'Changes',
    content: (
      <p>
        We may update this Cookie Policy from time to time. Material changes will be notified through our usual
        channels.
      </p>
    ),
  },
  {
    id: 'contact',
    number: '08',
    title: 'Contact',
    content: (
      <p>
        For questions about cookies on our platforms, please contact{' '}
        <a href="mailto:info@gsgbrands.com.gh">info@gsgbrands.com.gh</a>.
      </p>
    ),
  },
];

export default function CookiesPage() {
  return (
    <LegalPageLayout
      category="Legal · Cookies"
      title="Cookie Policy"
      intro={
        <p>
          How GSG Brands uses cookies and similar technologies on gsgbrands.com.gh and our related service domains —
          alongside the choices you have to manage them.
        </p>
      }
      effectiveDate={EFFECTIVE_DATE}
      sections={sections}
    />
  );
}
