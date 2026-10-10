import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  demoNotice,
  enquirySchema,
  services,
  submitEnquiry,
  type Enquiry,
} from "@/lib/brand-config";
import { Reveal } from "./Reveal";

type Values = { name: string; email: string; company: string; description: string };
type Errors = Partial<
  Record<"name" | "email" | "company" | "needs" | "description", string | undefined>
>;

export function Contact() {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    company: "",
    description: "",
  });
  const [needs, setNeeds] = useState<string[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [brief, setBrief] = useState<Enquiry | null>(null);
  const [copyState, setCopyState] = useState<string | null>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      const service = (event as CustomEvent<string>).detail;
      if (!service) return;
      setNeeds((current) => (current.includes(service) ? current : [...current, service]));
      setBrief(null);
    };
    window.addEventListener("brandit:service", handler);
    return () => window.removeEventListener("brandit:service", handler);
  }, []);

  const setField =
    (name: keyof Values) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [name]: event.target.value }));
      setErrors((current) => ({ ...current, [name]: undefined }));
    };

  const toggleNeed = (service: string) => {
    setNeeds((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
    setErrors((current) => ({ ...current, needs: undefined }));
    setBrief(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const candidate = { ...values, needs };
    const result = enquirySchema.safeParse(candidate);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]) as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      const first = result.error.issues[0];
      if (first) {
        const target =
          first.path[0] === "needs"
            ? document.getElementById("needs-field")
            : (event.currentTarget.elements.namedItem(String(first.path[0])) as HTMLElement | null);
        target?.focus();
      }
      return;
    }
    const response = await submitEnquiry(result.data);
    setErrors({});
    setBrief(result.data);
    setCopyState(null);
    void response;
  };

  const briefText = () => {
    if (!brief) return "";
    return [
      "Project brief — the brandit. (concept demonstration)",
      `Name: ${brief.name}`,
      `Email: ${brief.email}`,
      `Company: ${brief.company || "—"}`,
      `Services: ${brief.needs.join(", ")}`,
      "",
      "Project:",
      brief.description.replace(/\n\nDemo only[^\n]*$/, ""),
    ].join("\n");
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(briefText());
      setCopyState("Brief copied to your clipboard.");
    } catch {
      setCopyState("Copy failed — your browser blocked clipboard access.");
    }
  };

  const inputProps = (name: keyof Values, label: string, type: string, required: boolean) => ({
    id: name,
    name,
    type,
    required,
    value: values[name],
    onChange: setField(name),
    "aria-invalid": Boolean(errors[name]),
    ...(errors[name] ? { "aria-describedby": `${name}-error` } : {}),
  });

  return (
    <section
      id="contact"
      className="dark-section contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container contact-grid">
        <Reveal className="contact-intro">
          <p className="eyebrow">05 — Start a project</p>
          <h2 id="contact-heading">
            Let&rsquo;s make
            <br />
            your next move
            <br />
            matter.
            <ArrowUpRight className="contact-arrow" />
          </h2>
          <p className="contact-copy">
            Tell us what you&rsquo;re building — we&rsquo;ll shape it into a brief together. Prefer
            email once the studio details are confirmed? The contact block updates as soon as
            verified details exist.
          </p>
        </Reveal>
        <Reveal delay={100} className="contact-form-col">
          <span className="demo-note">Frontend demo — nothing is sent</span>
          {brief ? (
            <div className="brief-panel" role="status">
              <p className="eyebrow">Your project brief</p>
              <h3>Ready when you are.</h3>
              <dl className="brief-list">
                <div>
                  <dt>Name</dt>
                  <dd>{brief.name}</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>{brief.email}</dd>
                </div>
                <div>
                  <dt>Company</dt>
                  <dd>{brief.company || "—"}</dd>
                </div>
                <div>
                  <dt>Services</dt>
                  <dd>{brief.needs.join(", ")}</dd>
                </div>
                <div>
                  <dt>Project</dt>
                  <dd>{brief.description}</dd>
                </div>
              </dl>
              <div className="brief-actions">
                <Button variant="studio" onClick={() => void copyBrief()}>
                  Copy brief <Copy />
                </Button>
                <Button variant="editorial" onClick={() => setBrief(null)}>
                  Edit your entries <Pencil />
                </Button>
              </div>
              <p className="copy-status" aria-live="polite">
                {copyState ?? demoNotice}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input
                    {...inputProps("name", "Name", "text", true)}
                    maxLength={100}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p className="field-error" id="name-error">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    {...inputProps("email", "Email", "email", true)}
                    maxLength={255}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="field-error" id="email-error">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="company">
                  Company <span>(optional)</span>
                </label>
                <input
                  {...inputProps("company", "Company", "text", false)}
                  maxLength={150}
                  autoComplete="organization"
                />
              </div>
              <fieldset
                className="needs-fieldset"
                aria-describedby={errors.needs ? "needs-error" : undefined}
              >
                <legend id="needs-field">What do you need?</legend>
                {services.map((service) => (
                  <label key={service.name} className="need-chip">
                    <input
                      type="checkbox"
                      name="needs"
                      value={service.name}
                      checked={needs.includes(service.name)}
                      onChange={() => toggleNeed(service.name)}
                    />
                    <span>{service.short}</span>
                  </label>
                ))}
                {errors.needs && (
                  <p className="field-error" id="needs-error">
                    {errors.needs}
                  </p>
                )}
              </fieldset>
              <div className="form-field">
                <label htmlFor="description">A little about your project</label>
                <textarea
                  {...inputProps("description", "Project description", "text", true)}
                  rows={4}
                  maxLength={2000}
                  placeholder="What are you building, and what should it feel like?"
                />
                {errors.description && (
                  <p className="field-error" id="description-error">
                    {errors.description}
                  </p>
                )}
              </div>
              <div className="form-submit-row">
                <Button variant="studio" type="submit">
                  Preview project brief <ArrowUpRight />
                </Button>
                <p className="form-disclosure">
                  This is a frontend demonstration — nothing is sent or stored. You&rsquo;ll get a
                  brief summary you can copy.
                </p>
              </div>
              <p className="form-status" aria-live="polite">
                <Check size={12} aria-hidden="true" /> {demoNotice}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
