export const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-4xl min-h-screen border-l border-r border-neutral-300 bg-white transition-colors duration-300 dark:border-neutral-700 dark:bg-neutral-900">
      {children}
    </div>
  );
};
