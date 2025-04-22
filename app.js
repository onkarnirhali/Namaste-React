// imported react and reactdom from nodemodule folder
import React from 'react';
import ReactDOM from 'react-dom/client';

  const heading = React.createElement("h1",{id:"heading"},"Hello World")
  const jsxHeading = <h1 id='random'>Hello World JSX and TSX master</h1>
  const resData =[{
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        "header": {
          "title": "What's on your mind?",
          "headerStyling": {
            "padding": {
              "left": 16,
              "top": 16,
              "bottom": 4
            }
          }
        },
        "layout": {
          "rows": 1,
          "columns": 10,
          "horizontalScrollEnabled": true,
          "itemSpacing": 24,
          "widgetPadding": {},
          "containerStyle": {
            "containerPadding": {
              "left": 8,
              "top": 8,
              "right": 12,
              "bottom": 4
            }
          },
          "scrollBar": {},
          "widgetTheme": {
            "defaultMode": {
              "backgroundColour": "#FFFFFF",
              "theme": "THEME_TYPE_LIGHT"
            },
            "darkMode": {
              "theme": "THEME_TYPE_DARK"
            }
          }
        },
        "imageGridCards": {
          "info": [
            {
              "id": "750131",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                "text": "Dosa",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for dosa",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750643",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                "text": "Idli",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for idly",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750571",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
                "text": "Pure Veg",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for veg",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750561",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/9a22cf0d-f44c-4345-a48d-29033aa19729_Vada.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                "text": "Vada",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for vada",
                "altTextCta": "open"
              },
              "entityId": "80425",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750587",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                "text": "Chinese",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurant curated for chinese",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750604",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80493?collection_id=80493&tags=layout_CCS_Tea&type=rcv2",
                "text": "Tea",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for tea",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=80493&tags=layout_CCS_Tea",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750598",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83907?collection_id=83907&tags=layout_CCS_Coffee&type=rcv2",
                "text": "Coffee",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for coffee",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83907&tags=layout_CCS_Coffee",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750543",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_upma.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80411?collection_id=80411&tags=layout_BAU_Contextual%2Cupma&type=rcv2",
                "text": "Upma",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for upma",
                "altTextCta": "open"
              },
              "entityId": "80411",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750248",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
                "text": "Shawarma",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurant curated for shawarma",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750225",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                "text": "Salad",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurant curated for salad",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "2594473",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_waffle.png",
              "action": {
                "link": "https://www.swiggy.com/collections/116178?collection_id=116178&tags=dessert&type=rcv2",
                "text": "Waffle",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for waffle",
                "altTextCta": "open"
              },
              "entityId": "116178",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750228",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_samosa.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80396?collection_id=80396&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                "text": "Samosa",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for samosa",
                "altTextCta": "open"
              },
              "entityId": "80396",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750591",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                "text": "Biryani",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for biryani",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750229",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poha.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80373?collection_id=80373&tags=layout_CCS_Poha&type=rcv2",
                "text": "Poha",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for poha",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=80373&tags=layout_CCS_Poha",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750637",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Orange juice.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80445?collection_id=80445&tags=layout_Juices_Contextual&type=rcv2",
                "text": "Juice",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for juice",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=80445&tags=layout_Juices_Contextual",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750197",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pancakes.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80471?collection_id=80471&tags=layout_BAU_Contextual%2Cpancake&type=rcv2",
                "text": "Pancakes",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurant curated for pancake",
                "altTextCta": "open"
              },
              "entityId": "80471",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750118",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_dhokla.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80422?collection_id=80422&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2",
                "text": "Dhokla",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for dhokla",
                "altTextCta": "open"
              },
              "entityId": "80422",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750579",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                "text": "Pizzas",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for pizza",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "749760",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
              "action": {
                "link": "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                "text": "Khichdi",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for khichdi",
                "altTextCta": "open"
              },
              "entityId": "80455",
              "frequencyCapping": {},
              "externalMarketing": {}
            },
            {
              "id": "750222",
              "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
              "action": {
                "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
                "text": "Rolls",
                "type": "WEBLINK"
              },
              "entityType": "BANNER",
              "accessibility": {
                "altText": "restaurants curated for roll",
                "altTextCta": "open"
              },
              "entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
              "frequencyCapping": {},
              "externalMarketing": {}
            }
          ],
          "style": {
            "width": {
              "type": "TYPE_RELATIVE",
              "value": 0.2941,
              "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
            },
            "height": {
              "type": "TYPE_RELATIVE",
              "value": 1.2444,
              "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
            }
          }
        },
        "id": "whats_on_your_mind",
        "gridElements": {
          "infoWithStyle": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
            "info": [
              {
                "id": "750131",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
                  "text": "Dosa",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for dosa",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750643",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80440?collection_id=80440&tags=layout_CCS_Idli&type=rcv2",
                  "text": "Idli",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for idly",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80440&tags=layout_CCS_Idli",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750571",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
                  "text": "Pure Veg",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for veg",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80435&tags=layout_CCS_PureVeg",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750561",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/2/4/9a22cf0d-f44c-4345-a48d-29033aa19729_Vada.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80425?collection_id=80425&tags=layout_BAU_Contextual%2Cvada&type=rcv2",
                  "text": "Vada",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for vada",
                  "altTextCta": "open"
                },
                "entityId": "80425",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750587",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
                  "text": "Chinese",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for chinese",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83636&tags=layout_CCS_Chinese",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750604",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80493?collection_id=80493&tags=layout_CCS_Tea&type=rcv2",
                  "text": "Tea",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for tea",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80493&tags=layout_CCS_Tea",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750598",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83907?collection_id=83907&tags=layout_CCS_Coffee&type=rcv2",
                  "text": "Coffee",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for coffee",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83907&tags=layout_CCS_Coffee",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750543",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_upma.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80411?collection_id=80411&tags=layout_BAU_Contextual%2Cupma&type=rcv2",
                  "text": "Upma",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for upma",
                  "altTextCta": "open"
                },
                "entityId": "80411",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750248",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
                  "text": "Shawarma",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for shawarma",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80402&tags=layout_Shawarma_Contextual",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750225",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/186ebf5c-d9ad-4d2b-a2b0-77795e19241f_Salad2.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80394?collection_id=80394&tags=layout_CCS_Salad&type=rcv2",
                  "text": "Salad",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for salad",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80394&tags=layout_CCS_Salad",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "2594473",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_waffle.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/116178?collection_id=116178&tags=dessert&type=rcv2",
                  "text": "Waffle",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for waffle",
                  "altTextCta": "open"
                },
                "entityId": "116178",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750228",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_samosa.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80396?collection_id=80396&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                  "text": "Samosa",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for samosa",
                  "altTextCta": "open"
                },
                "entityId": "80396",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750591",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                  "text": "Biryani",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for biryani",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani&search_context=biryani",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750229",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poha.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80373?collection_id=80373&tags=layout_CCS_Poha&type=rcv2",
                  "text": "Poha",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for poha",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80373&tags=layout_CCS_Poha",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750637",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Orange juice.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80445?collection_id=80445&tags=layout_Juices_Contextual&type=rcv2",
                  "text": "Juice",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for juice",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=80445&tags=layout_Juices_Contextual",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750197",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pancakes.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80471?collection_id=80471&tags=layout_BAU_Contextual%2Cpancake&type=rcv2",
                  "text": "Pancakes",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurant curated for pancake",
                  "altTextCta": "open"
                },
                "entityId": "80471",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750118",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_dhokla.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80422?collection_id=80422&tags=layout_BAU_Contextual%2Cdhokla&type=rcv2",
                  "text": "Dhokla",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for dhokla",
                  "altTextCta": "open"
                },
                "entityId": "80422",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750579",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                  "text": "Pizzas",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for pizza",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza&search_context=pizza",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "749760",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/80455?collection_id=80455&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                  "text": "Khichdi",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for khichdi",
                  "altTextCta": "open"
                },
                "entityId": "80455",
                "frequencyCapping": {},
                "externalMarketing": {}
              },
              {
                "id": "750222",
                "imageId": "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png",
                "action": {
                  "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
                  "text": "Rolls",
                  "type": "WEBLINK"
                },
                "entityType": "BANNER",
                "accessibility": {
                  "altText": "restaurants curated for roll",
                  "altTextCta": "open"
                },
                "entityId": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls",
                "frequencyCapping": {},
                "externalMarketing": {}
              }
            ],
            "style": {
              "width": {
                "type": "TYPE_RELATIVE",
                "value": 0.2941,
                "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
              },
              "height": {
                "type": "TYPE_RELATIVE",
                "value": 1.2444,
                "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
              }
            }
          }
        }
      }
    }
  }]


  //React Elements
  const title = (
    <h1>
      This is a react Element
    </h1>
  )

  //React Functional Component
  const Header = () => (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src='https://logowik.com/content/uploads/images/free-food-delivery8485.logowik.com.webp'></img>
      </div>
      <div className='nav-container'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )

  const RestaurantCard = ({resName, resCuisine}) => {

    
    return(<div className='restaurant-card' style={{backgroundColor:"#f0f0f0", padding:"20px", borderRadius:"10px"}}>
      <h2>{resName}</h2>
      <img className='restaurant-logo' src='https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_thumb,w_1537,h_480/f_auto/q_auto/dpr_1.0/d_uk:cuisines:chicken-3.jpg/v1/uk/restaurants/116583.jpg'></img>
      <h3>{resCuisine}</h3>
      <h4>4.4 Stars</h4>
      <h4>30 mins</h4>
    </div>
  )}

  const Body = () => (
    <div className='body'>
      <div>
        <div className='search-container'>
          Search
        </div>
        <div className='restaurant-container'>
          <RestaurantCard resName="Meghna Foods" resCuisine="Biryani"/>
          <RestaurantCard resName="Phat Bros" resCuisine="Middle East" />
        </div>
      </div>

    </div>
  )

  const AppLayout = () => (
    <div className='app-layout'>
      <Header/>
      <Body/>
    </div>
  )

  const HeadingComponet  = () => (
    <div className='randomHeading'>
      <h1 className='randomComponent'>trying the new Functional Component</h1>
    </div>
  ) 
    
 

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render([<AppLayout/>]);