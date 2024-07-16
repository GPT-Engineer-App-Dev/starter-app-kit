import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="text-center py-12">
          <h1 className="text-3xl font-bold mb-4">Your Blank Canvas</h1>
          <p className="text-lg">Chat with the agent to start making edits.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;