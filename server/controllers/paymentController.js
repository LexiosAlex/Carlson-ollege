const stripe = require("stripe")("sk_test_xxVCSMp0CkdEjwztJYWOkgyb00bKVdcXUY");
const uuid = require("uuid/v4");

export const chargeCard = async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { orderedRoom, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();

    const charge = await stripe.charges.create(
      {
        amount: orderedRoom.totalPrice * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Ordered the ${orderedRoom.name} room`,
      },
      {
        idempotency_key
      }
    );

    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }
  res.json({ error, status });
};
