import React, { useState } from "react";
import "./Edituser.css";

const Edituser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        bookings: [],
        // other user details...
    });

    const updateProfile = (newDetails) => {
        setUser({ ...user, ...newDetails });
    };

    const resetPassword = (newPassword) => {
        setUser({ ...user, password: newPassword });
    };

    const viewDashboard = () => {
        console.log(user.bookings);
    };

    const requestSwap = (bookingId) => {
        // Request a swap for a booking
        // This needs to be implemented
    };

    const approveSwap = (swapRequestId) => {
        // Approve a swap request
        // This needs to be implemented
    };

    return (
      <div className="profile-container">
        <label className="profile-label">
          Update Username:
          <input
            className="profile-input"
            type="text"
            value={user.name}
            onChange={(e) => updateProfile({ name: e.target.value })}
          />
        </label>
        <label className="profile-label">
          Update Email:
          <input
            className="profile-input"
            type="email"
            value={user.email}
            onChange={(e) => updateProfile({ email: e.target.value })}
          />
        </label>
        <label className="profile-label">
          Update Password:
          <input
            className="profile-input"
            type="password"
            value={user.password}
            onChange={(e) => resetPassword(e.target.value)}
          />
        </label>
        <button className="profile-button" onClick={viewDashboard}>
          View Dashboard
        </button>{" "}
        {/* Replace 1 with actual swapRequestId */}
      </div>
    );
};

export default Edituser;
