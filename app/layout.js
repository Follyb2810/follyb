// import { Inter } from 'next/font/google'
import ThemeRegistry from '@/component/style/ThemeRegistry';
import './../component/style/globals.css'

import { Container } from "@mui/material";
import { Inter } from 'next/font/google';
// import { Container } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export const metadata = { 
  title: 'folly',
  description: 'Working with folly',
}

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en">
// //       <body className={inter.className}>{children}</body>
// //     </html>
// //   )
// // }

// export default function RootLayout(props) {
//   const { children } = props;
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//       <ThemeRegistry options={{ key: 'mui' }}>
//       <Appbar/>

//       {children}
      
//       </ThemeRegistry>
//       </body>
//     </html>
//   );
// }

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
    <body  className={inter.className}>
      <ThemeRegistry options={{ key: 'mui' }}>
      {children}
      </ThemeRegistry>
    </body>
    </html>
  );
}

// <body  style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} >
//       <ThemeRegistry options={{ key: 'mui' }}>
      
//          <Appbar/>
//          <div style={{ flex: 1 }}>
//          {children}
//          </div>
//         <Footer/>
//         </ThemeRegistry>
//       </body>