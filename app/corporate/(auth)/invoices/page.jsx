import { metadata } from 'components/utils/metadata';
import InvoicePage from './InvoicePage';
import AuthWrap from '../AuthWrap';

export function generateMetadata() {
  return metadata({
    title: 'Invoices | Roldrive Corporate Chauffeur Services',
    description:
      'Contact us to book an airport transfers chauffeur London. We are your trusted ground transfer partners.',
  });
}
export default function Page() {
  return (
    <AuthWrap>
      <InvoicePage />
    </AuthWrap>
  );
}
