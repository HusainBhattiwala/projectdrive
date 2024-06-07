import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import AuthButtons from './AuthButtons';

export const dynamic = 'force-dynamic';

const fetchAuthProviders = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/login-demo');
  }

  const providers = await getProviders();

  return {
    providers: Object.values(providers) ?? [],
  };
};

export default async function Page() {
  const providers = await fetchAuthProviders();
  return (
    <div className="py-20">
      <AuthButtons providers={providers} />
    </div>
  );
}
