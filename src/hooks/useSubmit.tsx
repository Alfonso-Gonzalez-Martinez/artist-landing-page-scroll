import {useState} from "react";

interface SubmitResponse {
  type: 'success' | 'error';
  message: string;
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<SubmitResponse | null>(null);

  const submit = async (url: string, data: {firstName : string}): Promise<void> => {
    const random = Math.random();
    setLoading(true);
    try {
      await wait(2000);
      if (random < 0.5) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
