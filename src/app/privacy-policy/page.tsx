import type { Metadata } from 'next';
import LegalPageLayout, { type LegalSection } from '@/components/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How GSG Brands collects, uses, and protects your personal information in compliance with the Data Protection Act, 2012 (Act 843) of Ghana.',
  alternates: { canonical: '/privacy-policy' },
};

const EFFECTIVE_DATE = '11 May 2026';

const sections: LegalSection[] = [
  {
    id: 'about',
    number: '01',
    title: 'About this policy',
    content: (
      <>
        <p>
          This Privacy Policy explains how GSG Brands (&ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>
          &rdquo;, &ldquo;<strong>our</strong>&rdquo;) collects, uses, shares, and protects personal information
          (&ldquo;<strong>information</strong>&rdquo;) about visitors, customers, vendors, riders, affiliates, and
          other people who interact with our Services.
        </p>
        <p>
          It applies to <a href="https://gsgbrands.com.gh">gsgbrands.com.gh</a>, the related GSG service domains, and
          every customer-facing channel we operate (WhatsApp, Telegram, email, phone, in-person, and partner
          channels).
        </p>
        <p>
          We are committed to compliance with the <strong>Data Protection Act, 2012 (Act 843)</strong> of the
          Republic of Ghana, and other applicable Ghanaian and international data-protection laws.
        </p>
      </>
    ),
  },
  {
    id: 'controller',
    number: '02',
    title: 'Data controller & contact',
    content: (
      <>
        <p>GSG Brands acts as the data controller for the information described in this policy.</p>
        <ul>
          <li>Data protection contact — privacy@gsgbrands.com.gh</li>
          <li>Customer Experience (general) — info@gsgbrands.com.gh</li>
          <li>Postal address — GSG Brands, Accra, Ghana</li>
          <li>Phone — +233 (0) 246 033 792 / +233 (0) 579 033 792</li>
        </ul>
        <p>You may also contact our Data Protection Officer via the privacy email above.</p>
      </>
    ),
  },
  {
    id: 'collected',
    number: '03',
    title: 'Information we collect',
    content: (
      <>
        <p>
          We collect information you provide directly, information generated as you use the Services, and limited
          information from carefully selected third parties.
        </p>

        <h3>Identity &amp; contact information</h3>
        <p>
          Name, photo or avatar, gender (where you provide it), date of birth (where required), phone number, email
          address, delivery address, billing address, and alternative contacts.
        </p>

        <h3>Account &amp; verification information</h3>
        <p>
          Username, password (stored as a salted hash), verification documents where required by law (for example,
          for higher-value escrow transactions or affiliate payouts), and tax identification numbers where
          applicable.
        </p>

        <h3>Transaction information</h3>
        <p>
          Items ordered, sourcing requests, courier waybills, escrow contracts, fees paid, mobile-money references,
          card BIN data (we do not store full card numbers — these are tokenised by our payment partners), refunds,
          and chargeback records.
        </p>

        <h3>Communications information</h3>
        <p>
          Messages you send us via WhatsApp, Telegram, email, phone, and in-app forms, plus call recordings where
          lawful and disclosed at the start of the call.
        </p>

        <h3>Device, log &amp; usage information</h3>
        <p>
          IP address, device type, operating system, browser type, language, referring URLs, pages visited, click
          paths, error logs, and approximate location based on IP. See our <a href="/cookies">Cookie Policy</a> for
          cookie-specific information.
        </p>

        <h3>Location information</h3>
        <p>
          Where you provide it (for example, an address you ask us to deliver to, or a live pin shared during a
          courier handover).
        </p>

        <h3>Sensitive information</h3>
        <p>
          We do not seek to collect sensitive personal information (such as health, religion, political views, or
          ethnic origin). Where context requires it (for example, dietary needs for StreetCuisine or a
          community-support enrolment for GSG-AID), we collect only what is necessary and with your explicit
          consent.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    number: '04',
    title: 'How we use information',
    content: (
      <>
        <p>We use information to:</p>
        <ul>
          <li>create and operate your account;</li>
          <li>process orders, sourcing requests, courier deliveries, and escrow transactions;</li>
          <li>communicate confirmations, dispatch updates, reminders, and customer-support responses;</li>
          <li>run the Affiliates programme and pay affiliate earnings;</li>
          <li>detect, investigate, and prevent fraud, abuse, and security incidents;</li>
          <li>meet legal, tax, and regulatory obligations;</li>
          <li>improve and personalise the Services based on usage patterns;</li>
          <li>contact you with operational service messages and, where you have agreed, with marketing;</li>
          <li>run analytics and produce de-identified statistics.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'legal-bases',
    number: '05',
    title: 'Legal bases for processing',
    content: (
      <>
        <p>Under the Data Protection Act, 2012 we rely on the following grounds:</p>
        <ul>
          <li>
            <strong>Performance of a contract</strong> — to deliver the Service you have ordered or signed up for.
          </li>
          <li>
            <strong>Consent</strong> — where you have explicitly opted in, for example to marketing communications or
            precise-location features.
          </li>
          <li>
            <strong>Legal obligation</strong> — to comply with tax, regulatory, and law-enforcement obligations.
          </li>
          <li>
            <strong>Legitimate interests</strong> — to operate, secure, and improve our Services in a way that takes
            your rights and expectations into account.
          </li>
          <li>
            <strong>Vital interests / public interest</strong> — in rare safety emergencies.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'sharing',
    number: '06',
    title: 'Sharing & disclosure',
    content: (
      <>
        <p>We share information only as necessary and only with parties who are bound to keep it confidential:</p>
        <ul>
          <li>
            <strong>Service providers and processors</strong> — for payment, hosting, mapping, SMS, email, analytics,
            and support tooling, under contracts that require confidentiality and limited use.
          </li>
          <li>
            <strong>Courier partners and riders</strong> — for delivery, pickup, and field support.
          </li>
          <li>
            <strong>Vendors and shoppers</strong> — where required to fulfil your order (for example, sharing your
            delivery address with the assigned shopper).
          </li>
          <li>
            <strong>Escrow counterparties</strong> — limited identity and order detail necessary to operate Sell-Safe
            Buy-Safe.
          </li>
          <li>
            <strong>Group companies</strong> — affiliates within the GSG Brands ecosystem, under this same Privacy
            Policy.
          </li>
          <li>
            <strong>Regulators, law-enforcement, courts, and other authorities</strong> — where compelled by law, or
            to protect rights, life, or property.
          </li>
          <li>
            <strong>Successors</strong> — in connection with a merger, acquisition, financing, or reorganisation, with
            appropriate safeguards.
          </li>
        </ul>
        <p>We do not sell your personal information.</p>
      </>
    ),
  },
  {
    id: 'international',
    number: '07',
    title: 'International transfers',
    content: (
      <p>
        Some of our service providers are based outside Ghana. Where information is transferred internationally, we
        only use providers that adopt appropriate technical and organisational safeguards, and we contractually
        require ongoing compliance with Ghanaian data-protection standards.
      </p>
    ),
  },
  {
    id: 'cookies',
    number: '08',
    title: 'Cookies & tracking',
    content: (
      <p>
        We use cookies and similar technologies (such as pixels and local storage). For details on what we use, why,
        and how to manage them, please see our <a href="/cookies">Cookie Policy</a>.
      </p>
    ),
  },
  {
    id: 'retention',
    number: '09',
    title: 'Data retention',
    content: (
      <>
        <p>
          We keep information only as long as necessary for the purposes described above, or as required by tax,
          accounting, or other regulatory law. As a general guide:
        </p>
        <ul>
          <li>transaction records — up to 6 years to meet legal and accounting obligations;</li>
          <li>support correspondence — up to 24 months after the matter is closed;</li>
          <li>marketing preferences — until you withdraw consent;</li>
          <li>inactive accounts — anonymised or deleted after 24 months of inactivity, on request or by routine review.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'security',
    number: '10',
    title: 'Security',
    content: (
      <p>
        We use a combination of administrative, technical, and physical controls to protect information — including
        encrypted transport (HTTPS), restricted internal access, salted-and-hashed passwords, payment tokenisation,
        and audit logging. No system is perfectly secure, so we encourage you to use a strong, unique password and to
        alert us at privacy@gsgbrands.com.gh if you suspect unauthorised access.
      </p>
    ),
  },
  {
    id: 'rights',
    number: '11',
    title: 'Your rights',
    content: (
      <>
        <p>Subject to the Data Protection Act, 2012 you have the right to:</p>
        <ul>
          <li>
            <strong>access</strong> the information we hold about you;
          </li>
          <li>
            <strong>request correction</strong> of inaccurate or outdated information;
          </li>
          <li>
            <strong>request deletion</strong> where the information is no longer needed and we do not have a
            compelling legal basis to retain it;
          </li>
          <li>
            <strong>restrict or object</strong> to processing in certain circumstances;
          </li>
          <li>
            <strong>withdraw consent</strong> for processing based on consent — without affecting earlier lawful
            processing;
          </li>
          <li>
            <strong>lodge a complaint</strong> with Ghana&rsquo;s Data Protection Commission (
            <a href="https://www.dataprotection.org.gh" target="_blank" rel="noopener noreferrer">
              dataprotection.org.gh
            </a>
            ) if you believe your rights have been infringed.
          </li>
        </ul>
        <p>
          To exercise these rights, contact privacy@gsgbrands.com.gh. We may need to verify your identity before
          acting on a request and will respond within a reasonable period, typically within 30 days.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    number: '12',
    title: 'Children',
    content: (
      <p>
        Our Services are not directed to children under 18. We do not knowingly collect personal information from
        children. If you believe a child has provided information to us, please contact privacy@gsgbrands.com.gh so
        we can delete it.
      </p>
    ),
  },
  {
    id: 'marketing',
    number: '13',
    title: 'Marketing',
    content: (
      <p>
        We will only send marketing communications where you have agreed to receive them (or where applicable
        Ghanaian law otherwise allows it). Every marketing message will include a clear way to opt out, such as an
        unsubscribe link or a &ldquo;STOP&rdquo; keyword.
      </p>
    ),
  },
  {
    id: 'third-party-links',
    number: '14',
    title: 'Third-party links',
    content: (
      <p>
        Our platforms may link to third-party sites or services. Their privacy practices are their own; please
        review their policies before sharing information with them.
      </p>
    ),
  },
  {
    id: 'changes',
    number: '15',
    title: 'Changes to this policy',
    content: (
      <p>
        We may update this Privacy Policy from time to time. Where the changes are material, we will notify you (for
        example, by email, banner, or in-app notice) before they take effect.
      </p>
    ),
  },
  {
    id: 'contact',
    number: '16',
    title: 'Contact',
    content: (
      <>
        <ul>
          <li>General privacy questions — privacy@gsgbrands.com.gh</li>
          <li>General customer support — info@gsgbrands.com.gh</li>
          <li>Phone — +233 (0) 246 033 792 / +233 (0) 579 033 792</li>
          <li>
            Regulator —{' '}
            <a href="https://www.dataprotection.org.gh" target="_blank" rel="noopener noreferrer">
              Data Protection Commission, Ghana
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      category="Legal · Privacy"
      title="Privacy Policy"
      intro={
        <p>
          How GSG Brands collects, uses, shares, and protects your personal information — in compliance with the
          Data Protection Act, 2012 (Act 843) of Ghana.
        </p>
      }
      effectiveDate={EFFECTIVE_DATE}
      sections={sections}
    />
  );
}
