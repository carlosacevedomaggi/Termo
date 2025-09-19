export default function FAQ() {
  const faqs = [
    { q: 'What is your return policy?', a: '30-day hassle-free returns for unused items.' },
    { q: 'Do you ship internationally?', a: 'Yes, we ship to most countries.' },
    { q: 'How can I contact support?', a: 'Use the contact form or email support@termo.io.' },
  ]
  return (
    <div className="container-edge py-14">
      <h1 className="text-3xl font-semibold mb-6">FAQ</h1>
      <div className="divide-y divide-border border border-border rounded-xl">
        {faqs.map((f) => (
          <details key={f.q} className="p-5">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 opacity-80">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}


