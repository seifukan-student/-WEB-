type EnvLabel = "local" | "preview" | "production";

const getEnvLabel = (): EnvLabel => {
  const vercelEnv = process.env.VERCEL_ENV;
  if (vercelEnv === "production") return "production";
  if (vercelEnv === "preview") return "preview";
  return "local";
};

export const EnvBadge = () => {
  const label = getEnvLabel();

  const colorClass =
    label === "production"
      ? "bg-brand-500 text-white border-brand-500 shadow-sm"
      : "bg-brand-50 text-brand-700 border-brand-200";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide ${colorClass}`}
    >
      <span className="uppercase">ENV</span>
      <span className="capitalize">{label}</span>
    </span>
  );
};

