import Link from "next/link";
import React from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  calUser: string;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  calUser,
}) => {
  if (!isOpen) {
    return null;
  }

  // UPDATED: The meetingDurations array now includes the specific URL path for each meeting.
  const meetingDurations = [
    { text: "15 Minute Quick Chat", path: "15min" },
    { text: "30 Minute Discovery Call", path: "30min" },
    { text: "45 Minute Strategy Session", path: "mid-duration" },
    { text: "60 Minute Consultation", path: "long-duration" },
  ];

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-blur backdrop-blur-md"
      onClick={onClose} // Close modal when clicking the backdrop
    >
      {/* Modal Content */}
      <div
        className="relative w-full max-w-md p-8 bg-[#111111] border border-gray-700 rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Select a Meeting Duration
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Choose the time that works best for you.
        </p>

        <div className="flex flex-col space-y-4">
          {meetingDurations.map((meeting) => (
            <Link
              key={meeting.path} // Use path as key since it's unique
              // UPDATED: The href now uses the specific path for each meeting.
              href={`https://cal.com/${calUser}/${meeting.path}`}
              target="_blank" // Open in a new tab
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary hover:bg-opacity-90 text-gray-900 font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              {meeting.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
