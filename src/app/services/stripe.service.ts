import { Injectable } from '@angular/core';
import { loadStripe, Stripe } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private stripePromise: Promise<Stripe | null>;

  constructor() {
    this.stripePromise = loadStripe('pk_test_51PNvJ0RxY70dd5nc1QQOmNYWpbWCdGvM8aGsmiCnDpveacIitqBZZiAXjLn460pDw9MT4RYm0bRQDEfnfMq0FP2G000PWMPMju'); // Replace with your Stripe public key
  }

  getStripe() {
    return this.stripePromise;
  }
}
