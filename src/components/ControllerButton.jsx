export default function ControllerButton({ children, ...props }) {
  return (
    <button
      className="mt-3 cursor-pointer text-[#fff] bg-[#B35E3F] hover:bg-[#CC937F] py-2 px-4 rounded-sm"
      {...props}
    >
      {children}
    </button>
  );
}
