import { SocketProvider } from 'context/SocketContext';
import LayOutWrap from './LayOutWrap';

export default function RootLayout({ children }) {
  return (
    <SocketProvider>
      <LayOutWrap>
        {children}
      </LayOutWrap>
    </SocketProvider>
  );
}
