export const Container = ({ children }) => {
  return (
    <div className="z-10 mx-auto min-h-screen max-w-4xl border-r border-l border-neutral-300 bg-white transition-colors duration-300 dark:border-neutral-700 dark:bg-neutral-900">
      {children}
    </div>
  );
};
