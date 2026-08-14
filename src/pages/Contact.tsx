
export default function Contact() {

    return (
        <div className="max-w-3xl mx-auto mt-25 p-6 lg:mb-60">
            <h1 className="text-3xl font-bold mb-6">
                Contact Us
            </h1>

            <div className="mb-6 text-2xl space-y-3">
                <p className=""><span className="font-bold  text-left">Email</span>: support@example.com</p>
                <p><span className="font-bold text-left">Phone</span>: +91 9876543210</p>
                <p> <span className="font-bold text-left">Location</span>: Chennai</p>
            </div>

            <form className="flex flex-col gap-4 space-y-3">
                <input
                    type="text"
                    placeholder="Name"
                    className="border border-gray-400 p-3 rounded"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-400 p-3 rounded"
                />

                <textarea
                    placeholder="Message"
                    className="border  border-gray-400 p-3 rounded"
                    rows={5}
                />

                <button
                    className="bg-blue-500 text-white p-3 rounded"
                >
                    Send Message
                </button>
            </form>
        </div>)
}
