import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Stripe, StripeCardElement, loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  bookingDetails: any;
  stripe: Stripe | null = null;
  cardElement: StripeCardElement | null = null;
  paymentForm: FormGroup;
  flight: any

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.flight = navigation.extras.state?.['flight'];
    }

    this.paymentForm = this.fb.group({
      cardName: ['']
    });
  }

  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_51PNvJ0RxY70dd5nc1QQOmNYWpbWCdGvM8aGsmiCnDpveacIitqBZZiAXjLn460pDw9MT4RYm0bRQDEfnfMq0FP2G000PWMPMju');

    const elements = this.stripe?.elements();
    if (elements) {
      this.cardElement = elements.create('card');
      this.cardElement.mount('#card-element');
    }
  }

  async handlePayment(event: Event) {
    if(this.paymentForm.valid){
    alert("FLIGHT PAYMENT SUCCESSFULL");
    }
    event.preventDefault();
    if (!this.stripe || !this.cardElement) {
      return;
    }

    const { error, paymentIntent } = await this.stripe.confirmCardPayment('sk_test_51PNvJ0RxY70dd5ncs6rDdfY7daf4DQNrnXOZOjPz2Sv7rhPSlGZvoF7f1nljFpls07nbhSHZkrn3YvNvSCB4Czt000gQLfRTZO', {
      payment_method: {
        card: this.cardElement,
        billing_details: {
          name: this.paymentForm.get('cardName')?.value
        }
      }
    });

    if (error) {
      console.error('Payment failed', error);
    } else if (paymentIntent) {
    alert("FLIGHT PAYMENT SUCCESSFULL")
      console.log('Payment succeeded', paymentIntent);
    }
  }

}
