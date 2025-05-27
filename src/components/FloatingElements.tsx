
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Premium gradient orbs - larger and more sophisticated */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-ai-200/10 to-peach-200/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-r from-neon-200/10 to-ai-200/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-ai-100/5 to-peach-100/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
      
      {/* Subtle line elements for premium feel */}
      <div className="absolute top-20 left-20 w-px h-32 bg-gradient-to-b from-ai-300/20 to-transparent animate-float"></div>
      <div className="absolute bottom-40 right-32 w-px h-24 bg-gradient-to-b from-peach-300/20 to-transparent animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-20 w-px h-28 bg-gradient-to-b from-neon-300/20 to-transparent animate-float" style={{ animationDelay: '3s' }}></div>
    </div>
  );
};

export default FloatingElements;
