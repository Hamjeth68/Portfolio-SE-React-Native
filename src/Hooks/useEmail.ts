import { useState } from "react";

const useEmailJs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const sendEmail = async (formData: FormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Using explicit references so CRA inlines them at build time.
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      // EmailJS renamed "user_id" to "public key"; support both env names.
      const userId = process.env.REACT_APP_EMAILJS_USER_ID || process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      const privateKey = process.env.REACT_APP_EMAILJS_PRIVATE_KEY;

      if (!serviceId || !templateId || !userId) {
        throw new Error("EmailJS environment variables are missing.");
      }

      formData.append("service_id", serviceId);
      formData.append("template_id", templateId);
      formData.append("user_id", userId);
      if (privateKey) {
        formData.append("private_key", privateKey);
      }

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        // Clone the response so we don't double-read the original stream.
        const clone = response.clone();
        let message: string | undefined;
        try {
          const errorJson = await response.json();
          message = (errorJson as { error?: string; message?: string })?.error || errorJson?.message;
        } catch (_) {
          message = await clone.text();
        }
        throw new Error(`Sending email failed: ${message || response.statusText || "Unknown error"}`);
      }

      alert("Your mail is sent!");
    } catch (err) {
      const safeError = err instanceof Error ? err : new Error("Unexpected error while sending email.");
      console.error("Email sending error:", safeError);
      alert(`Oops... ${safeError.message}`);
      setError(safeError);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendEmail,
    isLoading,
    error,
  };
};

export default useEmailJs;
