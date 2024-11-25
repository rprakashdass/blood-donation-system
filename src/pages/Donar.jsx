import React, { useRef, useState } from 'react';
import { donateBlood, sendEmail } from '../services/Api';
import { Link } from 'react-router-dom';

const Donar = () => {
  const [visible, setVisible] = useState(false);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
  const formRef = useRef(null);
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "A1B+", "A1B-"];

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleBloodGroupClick = (group) => {
    setSelectedBloodGroup(group);
    if (formRef.current) {
      formRef.current.bloodGroup.value = group;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donarData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      age: formRef.current.age.value,
      gender: formRef.current.gender.value,
      location: formRef.current.location.value,
      bloodGroup: formRef.current.bloodGroup.value,
    };

    try {
      console.log("Donar", donarData);
      const response = await donateBlood(donarData);
      console.log("Form submitted successfully", response);

      const emailResponse = await sendEmail({
        email: donarData.email,
        name: donarData.name,
        bloodGroup: donarData.bloodGroup,
        location: donarData.location,
      });
      console.log('Email sent successfully:', emailResponse);
      alert("Thank you! A confirmation email has been sent to you.");
      setVisible(!visible);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit request");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-1  py-10 space-y-8 lg:space-y-0">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Give Blood, Save Lives
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Your donation can save someone's life. A simple act of kindness goes a long way. Join our mission to help those in need.
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Every donation counts. Whether you're new to blood donation or a regular donor, your contribution matters. Thank you for your selflessness!
        </p>
        <button
          onClick={handleClick}
          className="bg-red-500 text-white font-bold px-6 py-3 rounded-md hover:bg-red-600 transition duration-300"
        >
          <Link to="/learnmore">Learn How You Can Help</Link>
        </button>
      </div>

      {/* Right Section (Form) */}
      <div className="lg:w-1/2 flex flex-col items-center lg:h-[50%]">
        <div className="w-full lg:w-[85%] flex flex-col items-center bg-white p-6 shadow-lg rounded-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Donate Blood</h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              required
              className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
            />
            <select
              name="gender"
              className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
              defaultValue="Male"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            <input
              type="text"
              name="location"
              placeholder="Location"
              required
              className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
            />
            <div className="grid grid-cols-4 gap-4 mt-4">
              {bloodGroups.map((group) => (
                <button
                  type="button"
                  key={group}
                  onClick={() => handleBloodGroupClick(group)}
                  className={`p-3 border rounded-md flex flex-col items-center justify-center text-lg font-bold ${
                    selectedBloodGroup === group
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-red-100"
                  }`}
                >
                  <span className="text-2xl p-1">🩸</span>
                  {group}
                </button>
              ))}
            </div>
            <input type="hidden" name="bloodGroup" />
            <button
              type="submit"
              className="mt-6 bg-red-500 text-white font-bold px-6 py-3 rounded-md hover:bg-red-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donar;
