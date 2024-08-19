import React from 'react';
import { WhatsApp } from '@mui/icons-material';

const WhatsAppCheckout = ({ cart }) => {

  let phoneNumber = 2349135557010;

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const generateWhatsAppMessage = () => {
    let message = "🛒🛒🛒 \n\nHello! I'd like to place an order for the following items:\n\n";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Quantity: ${item.quantity} - Price: $${item.price}\n`;
    });
    message += `\nTotal: $${cart.reduce((total, item) => total + item.price * item.quantity, 0)}`;
    return encodeURIComponent(message);
  };

  return (
    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-2 
    rounded mt-3 flex justify-center items-center gap-3"
      onClick={handleCheckout}>
      Checkout via WhatsApp
      <WhatsApp/>
    </button>
  );
};

export default WhatsAppCheckout;
