'use client';

import { signIn } from 'next-auth/react';
import Button from 'components/ui/Button';

export default function AuthButtons({ providers }) {
  return (
    <>
      {providers.providers.map((provider) => (
        <div key={provider.id}>
          <Button onClick={() => signIn(provider.id)}>
            Sign in with
            {' '}
            {provider.name}
          </Button>
        </div>
      ))}
    </>
  );
}
