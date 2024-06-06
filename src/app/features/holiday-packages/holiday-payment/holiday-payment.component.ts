import { Component, OnInit } from '@angular/core';
import { StripeService } from 'src/app/services/stripe.service';
import { Stripe, StripeCardElement } from '@stripe/stripe-js';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-holiday-payment',
  templateUrl: './holiday-payment.component.html',
  styleUrls: ['./holiday-payment.component.scss']
})
export class HolidayPaymentComponent implements OnInit {
  stripe: Stripe | null = null;
  cardElement: StripeCardElement | null = null;
  searchCriteria:any
  paymentForm: FormGroup;

  constructor(private stripeService: StripeService,
    private route: ActivatedRoute,private fb: FormBuilder) {
      this.paymentForm = this.fb.group({
        cardName: ['']
      });
    }

  async ngOnInit() {
    this.stripe = await this.stripeService.getStripe();
    if (this.stripe) {
      const elements = this.stripe.elements();
      this.cardElement = elements.create('card');
      this.cardElement.mount('#card-element');
    }
    this.route.queryParams.subscribe(params => {
      this.searchCriteria = params;
      
    });
  }

  async handlePayment(event: Event) {
    event.preventDefault();
    if(this.paymentForm.valid){
      alert("FLIGHT PAYMENT SUCCESSFULL");
      }
    if (!this.stripe || !this.cardElement) {
      return;
    }

    const { paymentIntent, error } = await this.stripe.confirmCardPayment('sk_test_51PNvJ0RxY70dd5ncs6rDdfY7daf4DQNrnXOZOjPz2Sv7rhPSlGZvoF7f1nljFpls07nbhSHZkrn3YvNvSCB4Czt000gQLfRTZO', {
      payment_method: {
        card: this.cardElement,
        billing_details: {
          name: 'Customer Name'
        }
      }
    });

    if (error) {
      console.error(error);
      document.getElementById('card-errors')!.textContent = error.message!;
    } else {
      alert('Payment successful!');
    }
  }
}
