import axios from "axios";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import style from './CheckoutForm.module.css'

const CheckoutForm = (props) =>{
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });
    setLoading(true);

    try {
      if(!error){
        const {id} = paymentMethod;
  
        const {data}  = await axios.post(`payment/rooms`, {
          id,
          amount: (props.totalPayment * 100),
          description: props.descriptionPayment
        })
  
        if(!data.error){
          console.log("Pago exitoso",data);
          setSuccess("Pago exitoso");
        }else{
          setError(data.error)
        }
        elements.getElement(CardElement).clear();
        setLoading(false);
      }else{
        setError(error);
      }
    } catch (err) {
      setError(err.message);
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className={style.paymentForm}>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <CardElement />
      <button disabled={!stripe}>
        {loading ? "Cargando" : "Reservar"}
      </button>
    </form>
  )
}

export default CheckoutForm;