'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  nom: Yup.string().min(8, 'Le nom doit contenir au moins 8 caractères').required('Nom requis'),
  cin: Yup.string().matches(/^\d{8}$/, 'Le CIN doit contenir exactement 8 chiffres').required('CIN requis'),
  email: Yup.string().email('Email invalide').required('Email requis'),
  password: Yup.string().min(6, 'Mot de passe trop court').required('Mot de passe requis'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas').required('Confirmation requise'),
  accepted: Yup.boolean().oneOf([true], 'Vous devez accepter les conditions')
});

const InscriptionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    alert('Inscription réussie !');
    console.log('Données :', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-2">
      <div className="bg-white shadow-2xl rounded-xl max-w-lg w-full p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center text-color1 mb-6">Créer un compte</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Nom */}
          <div>
            <label className="block text-sm font-semibold text-secondary">Nom complet</label>
            <input
              {...register('nom')}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Entrez votre nom"
            />
            {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>}
          </div>

          {/* CIN */}
          <div>
            <label className="block text-sm font-semibold text-secondary">CIN</label>
            <input
              {...register('cin')}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Ex : 12345678"
            />
            {errors.cin && <p className="text-red-500 text-sm mt-1">{errors.cin.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-secondary">Email</label>
            <input
              type="email"
              {...register('email')}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="email@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Mot de passe */}
          <div>
            <label className="block text-sm font-semibold text-secondary">Mot de passe</label>
            <input
              type="password"
              {...register('password')}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="******"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirmation */}
          <div>
            <label className="block text-sm font-semibold text-secondary">Confirmer le mot de passe</label>
            <input
              type="password"
              {...register('confirmPassword')}
              className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="******"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Conditions */}
          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('accepted')}
              className="mt-1 mr-2"
            />
            <label className="text-sm text-secondary">J'accepte les <span className="underline text-blue-600">conditions d'utilisation</span></label>
          </div>
          {errors.accepted && <p className="text-red-500 text-sm mt-1">{errors.accepted.message}</p>}

          {/* Bouton */}
         <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-md hover:opacity-90 transition duration-200 font-semibold"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default InscriptionForm;
