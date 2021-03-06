export default {
	"routes": {
		"cancel_subscription": "/billing/cancel",
		"resume_subscription": "/billing/resume",
		"change_plan": "/billing/change",
		"form_post_subscribe": "http://127.0.0.1:8056/web/stripe?r=subscribe",
		"form_post_update": "/billing/update"
	},
	"stripe_form": {
		"stripe_key": "pk_test_DQJh40uZJzDNqwCVM6cWUSbp",
		"csrf_token": "",
		"app_name": "INQUID ERP",
		"user_email":"contact@inquid.co"
	},
	"plans": [
		{"id": "product-9-monthly",  "name": "Freelancer", "price": 9,  "interval": "monthly", "features": ["1 user", "Unlimited Awesome", "Great Support"]},
		{"id": "product-29-monthly", "name": "Small Team", "price": 29, "interval": "monthly", "features": ["5 users", "Unlimited Awesome", "Great Support"]},
		{"id": "product-59-monthly", "name": "Big Team",   "price": 59, "interval": "monthly", "features": ["15 users", "Unlimited Awesome", "Great Support"]}
	],
	"subscription": {},
	"payment_info": {},
	"invoices": [],
	"coupon": ""
}
