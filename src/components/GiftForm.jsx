import { FaGift } from "react-icons/fa";

function GiftForm({ formData, setFormData, onSubmit }) {
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-[#120808] px-4 py-8 text-white">
            <div className="w-full max-w-md sm:max-w-lg rounded-3xl border border-amber-400/20 bg-white/[0.06] p-6 shadow-2xl sm:p-10">

                <div className="mb-6 text-center">
                    <div className="mb-4 flex justify-center">
                        <FaGift className="text-5xl text-amber-400 sm:text-6xl" />
                    </div>

                    <h1 className="text-2xl font-bold text-amber-400 sm:text-3xl">
                        A Little Diwali Surprise!
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-white/60 sm:text-base">
                        Someone special deserves a special Diwali gift.
                        Fill in the details to create a surprise! ✨
                    </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-5">

                    {/* Recipient Name */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-amber-100">
                            Recipient's Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter their real name"
                            required
                            className="w-full rounded-xl border border-amber-400/20 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-amber-400"
                        />
                    </div>

                    {/* Nickname */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-amber-100">
                            What do you call them?
                        </label>

                        <input
                            type="text"
                            name="nickname"
                            value={formData.nickname}
                            onChange={handleChange}
                            placeholder="Enter their nickname"
                            required
                            className="w-full rounded-xl border border-amber-400/20 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-amber-400"
                        />
                    </div>

                    {/* Relationship */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-amber-100">
                            Your Relationship
                        </label>

                        <select
                            name="relation"
                            value={formData.relation}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-amber-400/20 bg-[#241313] px-4 py-3 text-sm text-white outline-none transition focus:border-amber-400"
                        >
                            <option value="" disabled>
                                Select relationship
                            </option>

                            
                            <option value="friendGirl">Friend (Girl)</option>
                            <option value="friendBoy">Friend (Boy)</option>
                            <option value="bestFriendGirl">Best Friend (Girl)</option>
                            <option value="bestFriendBoy">Best Friend (Boy)</option>
                            <option value="brother">Brother</option>
                            <option value="sister">Sister</option>
                            <option value="jiju">Jiju</option>
                            <option value="mother">Mother</option>
                            <option value="father">Father</option>
                            <option value="girlfriend">Girlfriend</option>
                            <option value="boyfriend">Boyfriend</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 py-3.5 font-bold text-[#241313] shadow-lg shadow-amber-500/20 transition duration-300 hover:scale-[1.02] hover:from-yellow-400 hover:to-amber-300 active:scale-95"
                    >
                        Create Surprise 🎁
                    </button>

                </form>

                <p className="mt-6 text-center text-xs text-white/40">
                    Made with ❤️ and a little Diwali magic
                </p>

            </div>
        </main>
    );
}

export default GiftForm;