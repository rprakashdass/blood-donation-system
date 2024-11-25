import { useState, useRef } from "react";
import { requestBlood } from "../services/Api";
import { Link } from "react-router-dom";

const BloodRequest = () => {
  const [loading, setLoading] = useState(false);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
  const formRef = useRef(null);

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "A1B+", "A1B-"];

  const handleBloodGroupClick = (group) => {
    setSelectedBloodGroup(group);
    if (formRef.current) {
      formRef.current.bloodGroup.value = group;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: formRef.current.name.value,
      emergency: formRef.current.emergency.value,
      location: formRef.current.location.value,
      age: formRef.current.age.value,
      gender: formRef.current.gender.value,
      bloodGroup: formRef.current.bloodGroup.value,
    };

    try {
      const response = await requestBlood(formData);
      console.log("Form submitted successfully", response);
      alert("Request submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-1  py-10 space-y-8 lg:space-y-0">

      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          How to Request Blood
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          If you or a loved one is in need of blood for medical treatment, surgery, or emergency care, we are here to help. Blood requests are handled quickly and efficiently to ensure that patients receive the care they need without delay.        </p>
        <p className="text-gray-500 text-sm mb-4">
          To submit a blood request, simply fill out the form with the patient’s details, including their name, age, blood group, and location. Once your request is submitted, our team will process it and connect you with nearby blood banks or donors.        </p>
        <button
          className="bg-red-500 text-white font-bold px-6 py-3 rounded-md hover:bg-red-600 transition duration-300"
        >
          <Link to="/learnmore">Learn How You Can Help</Link>
        </button>
      </div>



      {/* Right Section with Form */}
      <div className="lg:w-1/2 flex flex-col items-center lg:h-[50%]">
        <div className="w-full lg:w-[85%] flex flex-col items-center bg-white p-6 shadow-lg rounded-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Request Blood</h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Patient Name"
              className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
              required
              aria-label="Patient Name"
            />

            <select
              name="emergency"
              className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
              defaultValue="Emergency"
              required
              aria-label="Emergency Level"
            >
              <option value="Emergency">Emergency</option>
              <option value="Non-Emergency">Non-Emergency</option>
            </select>

            <input
              type="text"
              name="location"
              placeholder="Location"
              className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
              required
              aria-label="Location"
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
              required
              aria-label="Age"
            />

            <select
              name="gender"
              className="p-3 bg-gray-100 w-full rounded-md outline-none focus:border-b-2 border-red-500"
              defaultValue="Male"
              required
              aria-label="Gender"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>

            {/* Blood Group Selection */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              {bloodGroups.map((group) => (
                <button
                  type="button"
                  key={group}
                  onClick={() => handleBloodGroupClick(group)}
                  className={`p-3 border rounded-md flex flex-col items-center justify-center text-lg font-bold ${selectedBloodGroup === group
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-red-100"
                    }`}
                  aria-label={`Blood Group ${group}`}
                >
                  <span className="text-2xl p-1">🩸</span>
                  {group}
                </button>
              ))}
            </div>

            <input type="hidden" name="bloodGroup" />

            <button
              type="submit"
              disabled={loading}
              className={`mt-6 bg-red-500 text-white px-6 py-3 rounded-md text-lg font-bold hover:bg-red-600 transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BloodRequest;
