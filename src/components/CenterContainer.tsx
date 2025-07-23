function CenterContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-start justify-center pt-20 pb-10">
      <div className="w-full max-w-2xl bg-gray-500 rounded-lg p-6 shadow">{children}</div>
    </div>
  );
}

export default CenterContainer;
