import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please select a PDF");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      // Upload PDF
      const response = await axios.post(
        "http://localhost:5000/api/resume/upload",
        formData
      );

      const filename = response.data.file.filename;

      localStorage.setItem("resume", filename);

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      await axios.post(
        "http://localhost:5000/api/resume/save",
        {
          email: user.email,
          resume: filename,
        }
      );

      toast.success("Resume Uploaded Successfully");
      setFile(null);

    } catch (error) {
      console.log(error);
      toast.error("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>

      <div className="max-w-3xl mx-auto">

        <Card>

          <h1 className="text-3xl font-bold">
            Upload Resume
          </h1>

          <p className="text-gray-500 mt-2">
            Upload your latest resume in PDF format.
          </p>

          <form
            onSubmit={handleUpload}
            className="mt-8"
          >

            <label
              className="
                border-2
                border-dashed
                border-blue-300
                rounded-2xl
                p-12
                flex
                flex-col
                items-center
                justify-center
                cursor-pointer
                hover:border-blue-500
                hover:bg-blue-50
                transition
              "
            >

              <span className="text-6xl">
                📄
              </span>

              <h2 className="text-xl font-semibold mt-4">
                Choose Resume
              </h2>

              <p className="text-gray-500 mt-2">
                PDF files only
              </p>

              <input
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) =>
                  setFile(e.target.files[0])
                }
              />

            </label>

            {file && (

              <div className="mt-6 bg-gray-100 rounded-xl p-4">

                <p className="font-semibold">
                  Selected File
                </p>

                <p className="text-gray-600 mt-2">
                  {file.name}
                </p>

              </div>

            )}

            <Button
              type="submit"
              className="w-full mt-8"
              disabled={loading}
            >
              {loading
                ? "Uploading..."
                : "Upload Resume"}
            </Button>

          </form>

        </Card>

      </div>

    </DashboardLayout>
  );
}

export default UploadResume;