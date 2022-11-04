export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <div>
      <small>About</small>
      <div>
        {children}
      </div>
    </div>
  );
}
