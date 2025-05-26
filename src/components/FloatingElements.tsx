
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-ai-300/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-peach-300/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-60 left-1/4 w-3 h-3 bg-neon-300/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 right-10 w-5 h-5 bg-ai-300/30 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-60 left-20 w-4 h-4 bg-peach-300/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      
      {/* Larger floating blobs */}
      <div className="absolute top-1/3 left-1/6 w-32 h-32 bg-gradient-to-r from-ai-200/20 to-peach-200/20 rounded-full blur-xl animate-blob"></div>
      <div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-gradient-to-r from-neon-200/20 to-ai-200/20 rounded-full blur-xl animate-blob" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default FloatingElements;
