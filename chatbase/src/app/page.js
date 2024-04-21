import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Welcome to AI Chat Assistants
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6">
          We provide AI-powered chat assistants for startups.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-10">
        <div className="m-4 max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" src="/chatbot.png" alt="Chatbot" width={400} height={200} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">AI Chatbot</div>
            <p className="text-gray-700 text-base">
              Our AI chatbot can handle customer inquiries 24/7, providing instant support and freeing up your team's time.
            </p>
          </div>
        </div>

        <div className="m-4 max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" src="/analytics.png" alt="Analytics" width={400} height={200} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Analytics</div>
            <p className="text-gray-700 text-base">
              Get insights into customer interactions, understand their needs better, and improve your service based on data.
            </p>
          </div>
        </div>

        <div className="m-4 max-w-sm rounded overflow-hidden shadow-lg">
          <Image className="w-full" src="/integration.png" alt="Integration" width={400} height={200} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Easy Integration</div>
            <p className="text-gray-700 text-base">
              Easily integrate our AI chatbot with your existing systems and platforms for a seamless experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}