import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div className="h-[100vh] bg-blue-400 flex items-center justify-center">
      <div className="text-xl font-bold">Hello World!</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
