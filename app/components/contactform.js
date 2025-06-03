'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('Email invalide').required('Email est requis'),
  phone: yup
    .string()
    .matches(/^\d{8}$/, 'Le numéro doit contenir exactement 8 chiffres')
    .required('Numéro est requis'),
  message: yup.string().max(30, 'Le message ne peut dépasser 30 caractères').required('Message est requis'),
});

export default function StylishContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    alert(`Envoyé !\nEmail: ${data.email}\nTéléphone: ${data.phone}\nMessage: ${data.message}`);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-8 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-xl shadow-lg space-y-6"
      noValidate
    >
      <h2 className="text-3xl font-extrabold text-secondary text-center">Contactez-nous</h2>

      {/* Email */}
      <div className="relative">
        <input
          type="email"
          id="email"
          placeholder=" "
          {...register('email')}
          className={`peer w-full border-b-2 bg-transparent py-2 px-0 text-gray-900 placeholder-transparent focus:outline-none
            ${errors.email ? 'border-red-500' : 'border-secondary'}
            focus:border-indigo-700`}
        />
        <label
          htmlFor="email"
          className={`absolute left-0 -top-6 text-sm transition-all
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
            ${errors.email ? 'text-red-500' : 'text-secondary'}`}
        >
          Email
        </label>
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Téléphone */}
      <div className="relative">
        <input
          type="text"
          id="phone"
          placeholder=" "
          maxLength={8}
          {...register('phone')}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/\D/g, '');
          }}
          className={`peer w-full border-b-2 bg-transparent py-2 px-0 text-gray-900 placeholder-transparent focus:outline-none
            ${errors.phone ? 'border-red-500' : 'border-secondary'}
            focus:border-indigo-700`}
        />
        <label
          htmlFor="phone"
          className={`absolute left-0 -top-6 text-sm transition-all
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
            ${errors.phone ? 'text-red-500' : 'text-secondary'}`}
        >
          Numéro de téléphone
        </label>
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          id="message"
          placeholder=" "
          rows={3}
          maxLength={30}
          {...register('message')}
          className={`peer w-full border-b-2 bg-transparent py-2 px-0 text-gray-900 placeholder-transparent resize-none focus:outline-none
            ${errors.message ? 'border-red-500' : 'border-secondary'}
            focus:border-indigo-700`}
        />
        <label
          htmlFor="message"
          className={`absolute left-0 -top-6 text-sm transition-all
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
            ${errors.message ? 'text-red-500' : 'text-secondary'}`}
        >
          Message
        </label>
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || !isValid}
        className={`w-full py-3 rounded-full text-white font-semibold transition
          ${isValid ? 'bg-secondary hover:bg-indigo-700' : 'bg-secondary cursor-not-allowed'}`}
      >
        {isSubmitting ? 'Envoi...' : 'Envoyer'}
      </button>
    </form>
  );
}
