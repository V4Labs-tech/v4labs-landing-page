

interface BookingButtonProps {
    calLink: string;
    text: string;
}

const Button = ({ calLink, text }:BookingButtonProps) => {
  return (
    <button
      data-cal-link={calLink}
      className="bg-primary text-gray-800 px-6 py-4 rounded-xl text-md font-semibold"
    >
      {text}
    </button>
  );
};

export default Button;