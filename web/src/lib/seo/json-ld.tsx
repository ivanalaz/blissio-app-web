type JsonLdRecord = Record<string, unknown>;

type JsonLdProps = {
  data: JsonLdRecord | JsonLdRecord[];
};

/**
 * Renders JSON-LD for search engines. Pass one object or an array of graphs.
 * Keep payloads serializable (no functions, no Date — use ISO strings).
 */
export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload.length === 1 ? payload[0] : payload),
      }}
    />
  );
}
