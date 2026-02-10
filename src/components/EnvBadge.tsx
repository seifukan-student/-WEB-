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
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : label === "preview"
        ? "bg-amber-50 text-amber-700 border-amber-200"
        : "bg-slate-100 text-slate-700 border-slate-200";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${colorClass}`}
    >
      <span className="uppercase tracking-wide">ENV</span>
      <span className="capitalize">{label}</span>
    </span>
  );
};

