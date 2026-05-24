const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
const MAILCHIMP_DC     = process.env.MAILCHIMP_DC;

export default async function handler(req, res) {
  const { email, model, domain } = JSON.parse(req.body);

  const data = {
    email_address: email,
    status: 'subscribed',
    tags: ['pl_diagnostic', `model_${model}`, `domain_${domain}`],
  };

  await fetch(
    `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  res.status(200).json({ ok: true });
}
