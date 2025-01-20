// src/components/InvitationDetails.jsx
import React from "react";

const InvitationDetails = () => {
  return (
    <div className="w-full bg-ivory p-6 rounded-lg shadow-md">
      <h2 className="text-center text-2xl font-calligraphy text-gold mb-4">
        You're Invited!
      </h2>

      {/* Event Name */}
      <div className="mb-4 text-center">
        <h3 className="text-xl font-semibold text-mutedOlive">
          The Wedding of
        </h3>
        <h4 className="text-3xl font-bold text-mutedOlive mt-2">
          John & Jane
        </h4>
      </div>

      {/* Event Details */}
      <div className="text-center mb-4">
        <p className="text-lg text-softGray">Date: <span className="text-mutedOlive">February 25, 2025</span></p>
        <p className="text-lg text-softGray">Time: <span className="text-mutedOlive">6:00 PM</span></p>
        <p className="text-lg text-softGray">Location: <span className="text-mutedOlive">Temple Hall, New Delhi</span></p>
      </div>

      {/* Additional Information */}
      <div className="text-center mt-6">
        <p className="text-sm text-mutedOlive">
          We are excited to have you join us in celebrating this special day.
        </p>
        <p className="text-sm text-mutedOlive mt-2">
          Please RSVP and let us know if you’ll be able to attend. We look forward to seeing you!
        </p>
      </div>
    </div>
  );
};

export default InvitationDetails;
