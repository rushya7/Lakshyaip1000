import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../component/layout/header";
import Footer from "../component/layout/footer";
import PageHeader from "../component/layout/pageheader";

const title = "Create Admin User";

function AdminUserCreation() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const [step, setStep] = useState(1); // 🔹 step state
  const [submittedData, setSubmittedData] = useState(null);

  const watchPatent = watch("patent");
  const watchIdeas = watch("innovativeIdeas");

  const onSubmit = (data) => {
    console.log("✅ User Created:", data);
    setSubmittedData(data);
  };


  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <>
      <Header />
      <PageHeader title={title} curPage={"admin-create-user"} />
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 pt-32">
        <div className="relative w-full max-w-4xl bg-white/30 backdrop-blur-lg shadow-2xl rounded-2xl p-10 border border-white/40">
          <h1 className="text-3xl font-bold text-center text-black mb-6">
            🚀  Admin User Registration
          </h1>

          {/* Step Indicator */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${
                  step === s ? "bg-pink-600" : "bg-gray-400"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* ---------------- Step 1 ---------------- */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">First Name</label>
                  <input
                    {...register("firstName", { required: "Required" })}
                    className="w-full p-3 rounded-lg border"
                  />
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 font-medium">Last Name</label>
                  <input
                    {...register("lastName", { required: "Required" })}
                    className="w-full p-3 rounded-lg border"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">TLC City</label>
                  <input
                    {...register("tlcCity")}
                    className="w-full p-3 rounded-lg border"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">WhatsApp</label>
                  <input
                    {...register("whatsapp")}
                    className="w-full p-3 rounded-lg border"
                  />
                </div>
              </div>
            )}

            {/* ---------------- Step 2 ---------------- */}
            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Contact</label>
                  <input {...register("contact")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Alt Email</label>
                  <input {...register("altEmail")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Pincode</label>
                  <input {...register("pincode")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">City</label>
                  <input {...register("city")} className="w-full p-3 border rounded-lg" />
                </div>
              </div>
            )}

            {/* ---------------- Step 3 ---------------- */}
            {step === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">State</label>
                  <input {...register("state")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Country</label>
                  <input {...register("country")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Startup?</label>
                  <select {...register("startup")} className="w-full p-3 border rounded-lg">
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Govt. Funding?</label>
                  <select {...register("govFunding")} className="w-full p-3 border rounded-lg">
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            )}

            {/* ---------------- Step 4 ---------------- */}
            {step === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Innovation Field</label>
                  <input {...register("innovationField")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">If Other</label>
                  <input {...register("innovationOther")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Patents Filed?</label>
                  <select {...register("patent")} className="w-full p-3 border rounded-lg">
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Patent Count</label>
                  <input type="number" {...register("patentCount")} className="w-full p-3 border rounded-lg" />
                </div>
              </div>
            )}

            {/* ---------------- Step 5 ---------------- */}
            {step === 5 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Innovative Ideas?</label>
                  <select {...register("innovativeIdeas")} className="w-full p-3 border rounded-lg">
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Ideas Count</label>
                  <input type="number" {...register("ideasCount")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Source</label>
                  <input {...register("ideaSource")} className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Book Time Slot</label>
                  <input type="datetime-local" {...register("timeSlot")} className="w-full p-3 border rounded-lg" />
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-400 text-white rounded-lg"
                >
                  ⬅ Prev
                </button>
              )}
              {step < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-6 py-3 bg-pink-500 text-white rounded-lg"
                >
                  Next ➡
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-6 py-3 bg-green-600 text-white rounded-lg"
                >
                  ✅ Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminUserCreation;
