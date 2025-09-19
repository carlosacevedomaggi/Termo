export default function Contact() {
  return (
    <div className="container-edge py-14 grid lg:grid-cols-2 gap-10">
      <div>
        <h1 className="text-3xl font-semibold mb-4">Contact</h1>
        <p className="opacity-80">We'd love to hear from you. Fill out the form and we'll get back to you.</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="text-sm opacity-70">Name</label>
          <input className="mt-1 w-full rounded-lg border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>
        <div>
          <label className="text-sm opacity-70">Email</label>
          <input type="email" className="mt-1 w-full rounded-lg border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>
        <div>
          <label className="text-sm opacity-70">Message</label>
          <textarea rows={4} className="mt-1 w-full rounded-lg border border-border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
        </div>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  )
}


