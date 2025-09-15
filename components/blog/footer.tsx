export const Footer = () => {
  return (
    <footer className="bg-background border-t border-dashed border-neutral-400">
      <div className="mx-auto max-w-7xl p-6 text-center">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Ditin Agrawal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
