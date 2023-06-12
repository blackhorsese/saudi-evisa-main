import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './../component/step/CheckoutForm';
import Navbar from "../component/navbar";
import Steppers from "../component/stepper";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetchConfig = async () => {
      const response = await fetch("/config");
      const { publishableKey } = await response.json();
      setStripePromise(loadStripe(publishableKey));
    };

    fetchConfig();
  }, []);

  useEffect(() => {
    const createPaymentIntent = async () => {
      const response = await fetch("/create-payment-intent", {
        method: "POST",
        body: JSON.stringify({}),
      });
      const { clientSecret } = await response.json();
      setClientSecret(clientSecret);
    };

    createPaymentIntent();
  }, []);

  return (
    <>
    <Navbar/>
        <div
          className="-z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] md:fixed  md:w-[25%] w-[90%] mx-auto "
          // style={{ height: "100vh", overflowY: "scroll" }}
        >
          <Steppers />
        </div>
        <div className="grid-cols-2 flex justify-center gap-20 my-10 mx-auto">
          <div className="w-96">
            <p className="text-lg">Visa Fee</p>
            <p className="font-medium text-lg bg-gray-100 p-2 text-end">
              1 x 300.00 = 300.00 SAR
            </p>
            
            <p className="text-lg py-2">Insurance Fee</p>
            <p className="font-medium text-lg bg-gray-100 p-2 text-end">
              1 × 156.52 = 156.52 SAR
            </p>

            <p className="text-lg py-2">VAT 15%</p>
            <p className="font-medium text-lg bg-gray-100 p-2 text-end">
              1 × 68.48 = 68.48 SAR
            </p>

            <p className="text-lg py-2"> Associated transaction Fee</p>
            <p className="font-medium text-lg bg-gray-100 p-2 text-end">
              1 × 9.98 = 9.98 SAR
            </p>
            <p className="text-lg p-2 py-8 font-semibold">
              Total Amount 534.98 SAR
            </p>
          </div>
          <div className="w-96">
            {clientSecret && stripePromise && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm
                  className="py-2 px-4 text-sm bg-[#07203a] text-white rounded-lg hover:bg-[#07203a] hover:text-white"
                >
                  Pay Now
                </CheckoutForm>
              </Elements>
            )}
          </div>
        </div>
    </>
  );
}

export default Payment;