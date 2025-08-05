import {
  useState
} from 'react';

const useEmailJs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      formData.append('service_id',
        import.meta.env.VITE_EMAILJS_SERVICE_ID);
      formData.append('template_id',
        import.meta.env.VITE_EMAILJS_TEMPLATEN_ID);
      formData.append('user_id',
        import.meta.env.VITE_EMAILJS_USER_ID);

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        body: formData,
      });

      // Improved error handling
      if (!response.ok) {
        let errorBody;
        try {
          errorBody = await response.json(); // Attempt to parse JSON
        } catch (jsonError) {
          errorBody = await response.text(); // Fallback to plain text
        }
        throw new Error(`Sending email failed: ${errorBody.error || errorBody}`);
      }

      alert('Your mail is sent!');
    } catch (error) {
      console.error('Email sending error:', error);
      alert(`Oops... ${error.message}`);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendEmail,
    isLoading,
    error
  };
};

export default useEmailJs;