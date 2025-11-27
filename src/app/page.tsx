export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center overflow-hidden relative">
        {/* Confetti-like decorations */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        {/* Animated Success Checkmark */}
        <div className="relative mb-8 mt-4">
          <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <svg
              className="w-16 h-16 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          {/* Decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-36 h-36 border-4 border-green-200 rounded-full animate-ping opacity-30"></div>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          🎉 Congratulations!
        </h1>
        
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-xl p-6 my-6 border border-blue-100">
          <p className="text-lg text-gray-700 font-medium leading-relaxed">
            Your account has been authenticated.
          </p>
          <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold mt-3">
            Enjoy using QLogs! 🚀
          </p>
        </div>

        {/* Additional Info */}
        <p className="text-gray-500 text-sm mb-4">
          ✨ You now have full access to all features
        </p>

        {/* Footer */}
        <p className="mt-2 text-gray-400 text-xs">
          Welcome to the QLogs family! 💙
        </p>
      </div>
    </div>
  );
}
