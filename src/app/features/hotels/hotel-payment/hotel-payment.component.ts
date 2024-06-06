import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loadStripe, Stripe, StripeCardElement } from '@stripe/stripe-js';

@Component({
  selector: 'app-hotel-payment',
  templateUrl: './hotel-payment.component.html',
  styleUrls: ['./hotel-payment.component.scss']
})
export class HotelPaymentComponent implements OnInit {
  bookingDetails: any;
  paymentForm: FormGroup;

  cardElement: StripeCardElement | null = null;
  stripe: Stripe | null = null;

  constructor(private router: Router, private fb: FormBuilder) { 
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      
      this.bookingDetails = navigation?.extras?.state?.['bookingDetails'].data[0];
    }
    this.paymentForm = this.fb.group({
      cardName: ['']
    });
  }

  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_51PNvJ0RxY70dd5nc1QQOmNYWpbWCdGvM8aGsmiCnDpveacIitqBZZiAXjLn460pDw9MT4RYm0bRQDEfnfMq0FP2G000PWMPMju');
  }

  async handlePayment(event: Event) {
    if(this.paymentForm.valid){
      alert("FLIGHT PAYMENT SUCCESSFULL");
      }
    event.preventDefault();
    if (!this.stripe) {
      return;
    }

    const { paymentIntent, error } = await this.stripe.confirmCardPayment('sk_test_51PNvJ0RxY70dd5ncs6rDdfY7daf4DQNrnXOZOjPz2Sv7rhPSlGZvoF7f1nljFpls07nbhSHZkrn3YvNvSCB4Czt000gQLfRTZO', {
      payment_method: {
        card: this.cardElement!,
        billing_details: {
          name: 'Customer Name',
        },
      }
    });

    if (error) {
      console.error('Payment failed', error);
    } else if (paymentIntent) {
      console.log('Payment succeeded', paymentIntent);
    }
  }
}
