export default function AdminLayout({ children }) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="w-full max-w-md p-8">
            {children}
          </div>
        </div>
      </body>
    </html>

  );
}
