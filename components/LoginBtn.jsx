'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Button from './ui/Button';

export default function LoginBtn() {
  const { data: session } = useSession();
  return (
    <div className="">
      {JSON.stringify(session, null, 2)}
      {session ? (
        <Button
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </Button>
      ) : (
        <Button onClick={() => signIn()}>Sign in</Button>
      )}
      <Button
        onClick={() => {
          signOut();
        }}
      >
        always Sign out
      </Button>
    </div>
  );
}
