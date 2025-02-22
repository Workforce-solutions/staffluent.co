export const metadata = {
	title: 'Staffluent CMS | Admin Studio',
	description: 'Content Management System for Staffluent landing page',
	robots: 'noindex, nofollow' // Best practice for admin interfaces
  };
  
  export default function RootLayout({
	children,
  }: {
	children: React.ReactNode;
  }) {
	return (
	  <html lang='en'>
		<body>{children}</body>
	  </html>
	);
  }