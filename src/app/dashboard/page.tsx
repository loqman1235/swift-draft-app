import CreateEmailForm from "./_components/CreateEmailForm";

const DashboardPage = () => {
  return (
    <div>
      {/* HEADER */}
      <div className="mb-10 flex flex-col gap-1">
        <h2 className="text-xl font-bold tracking-tight">
          Compose a new email with AI
        </h2>
        <p className="text-text-muted">
          Swiftly draft professional emails tailored to your needs.
        </p>
      </div>

      <CreateEmailForm />
    </div>
  );
};

export default DashboardPage;
