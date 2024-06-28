var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2640,
      "initialViewParameters": {
        "yaw": -1.0937788831813826,
        "pitch": 0.08314071162281245,
        "fov": 1.3742373460664081
      },
      "linkHotspots": [
        {
          "yaw": -0.23733164967359954,
          "pitch": 0.23254652295423206,
          "rotation": 0,
          "target": "1-starbucks"
        },
        {
          "yaw": 0.07438237469303033,
          "pitch": 0.0639435105451387,
          "rotation": 0,
          "target": "2-escalator"
        },
        {
          "yaw": -0.44489823890208946,
          "pitch": 0.07544370751004692,
          "rotation": 0,
          "target": "3-bakery"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0987128849247245,
          "pitch": 0.06031969017974781,
          "title": "현. 일식당 '어가'",
          "text": "일식당으로 운영 중인 '어가'<div>→ 푸드코트 존으로 변경 운영</div>"
        },
        {
          "yaw": -1.6519944789212087,
          "pitch": 0.00526409912589898,
          "title": "벽체 부분",
          "text": "기존 벽체를 유리 벽체로 교체 시공하여 시선 차단 및 단절된 느낌을<div>개선하고 개방감을 더한 공간의</div><div>확장성을 확보해 미흡한 부분 개선</div>"
        }
      ]
    },
    {
      "id": "1-starbucks",
      "name": "Starbucks",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2640,
      "initialViewParameters": {
        "yaw": -0.3425504521914835,
        "pitch": 0.08390599173047875,
        "fov": 1.3742373460664081
      },
      "linkHotspots": [
        {
          "yaw": -3.1380024276889813,
          "pitch": 0.18815435481990406,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.6571448856587203,
          "pitch": 0.12248226105022297,
          "rotation": 0,
          "target": "2-escalator"
        },
        {
          "yaw": -0.5384276857605848,
          "pitch": 0.18777449442001704,
          "rotation": 0,
          "target": "3-bakery"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.30770819500303936,
          "pitch": -0.00723445030308234,
          "title": "현. 베이커리 주방",
          "text": "<div>베이커리 주방 위치 이동 및</div><div>패스트푸드&amp;카페존으로 변경 운영</div><div>(개방된 공간 환경 조성)</div>"
        },
        {
          "yaw": -2.7782446487364325,
          "pitch": -0.0033156096002855406,
          "title": "현. 일식당 '어가'",
          "text": "<div>일식당으로 운영 중인 '어가'</div><div>→ 푸드코트 존으로 변경 운영</div>"
        },
        {
          "yaw": -1.8502428137146616,
          "pitch": -0.044013779551697496,
          "title": "벽체 부분",
          "text": "<div>기존 벽체를 유리 벽체로 교체 시공하여 시선 차단 및 단절된 느낌을</div><div>개선하고 개방감을 더한 공간의</div><div>확장성을 확보해 미흡한 부분 개선</div>"
        },
        {
          "yaw": -2.042335997055062,
          "pitch": 0.292197149684835,
          "title": "테이블 및 의자 추가 배치",
          "text": "푸드코트 및 베이커리 이용객을<div>위한 테이블 추가 배치</div>"
        }
      ]
    },
    {
      "id": "2-escalator",
      "name": "escalator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2640,
      "initialViewParameters": {
        "yaw": -0.7123756521548863,
        "pitch": 0.17454024952518488,
        "fov": 1.3742373460664081
      },
      "linkHotspots": [
        {
          "yaw": -2.7013044863001436,
          "pitch": 0.1199356379995713,
          "rotation": 0,
          "target": "1-starbucks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.10365257186443344,
          "pitch": 0.14550466144668306,
          "title": "현. 베이커리 주방",
          "text": "<div>베이커리 주방 위치 이동 및</div><div>패스트푸드&amp;카페존으로 변경 운영</div><div>(개방된 공간 환경 조성)</div>"
        }
      ]
    },
    {
      "id": "3-bakery",
      "name": "Bakery",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2640,
      "initialViewParameters": {
        "yaw": -0.7940898309306839,
        "pitch": 0.161030791191898,
        "fov": 1.3742373460664081
      },
      "linkHotspots": [
        {
          "yaw": 1.6312905017970127,
          "pitch": 0.12457866304503895,
          "rotation": 0,
          "target": "2-escalator"
        },
        {
          "yaw": 2.561628861140921,
          "pitch": 0.2014867125114641,
          "rotation": 0,
          "target": "1-starbucks"
        },
        {
          "yaw": 2.7736638410897267,
          "pitch": 0.08299243961602265,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.0967466241079542,
          "pitch": -0.004009981280606922,
          "title": "현. 베이커리 주방",
          "text": "<div>베이커리 주방 위치 이동 및</div><div>패스트푸드&amp;카페존으로 변경 운영</div><div>(개방된 공간 환경 조성)</div>"
        },
        {
          "yaw": -2.614928660914618,
          "pitch": -0.013401271997764752,
          "title": "벽체 부분",
          "text": "<div>기존 벽체를 유리 벽체로 교체 시공하여 시선 차단 및 단절된 느낌을</div><div>개선하고 개방감을 더한 공간의</div><div>확장성을 확보해 미흡한 부분 개선</div>"
        },
        {
          "yaw": -1.228220918209324,
          "pitch": -0.03867065773246914,
          "title": "현. 일식당 '어가'",
          "text": "기존 베이커리 주방의 위치를<div>베이커리 옆으로 옮겨 동선 편의성</div><div>확대 및 공간 연결성 확보</div>"
        },
        {
          "yaw": -2.0471665124665908,
          "pitch": 0.17690517090500357,
          "title": "테이블 및 의자 추가 배치",
          "text": "<div>푸드코트 및 베이커리 이용객을</div><div>위한 테이블 추가 배치</div>"
        }
      ]
    },
    {
      "id": "4-diamond",
      "name": "diamond",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2640,
      "initialViewParameters": {
        "yaw": 2.271190595079675,
        "pitch": 0.005889222153747653,
        "fov": 1.3742373460664081
      },
      "linkHotspots": [
        {
          "yaw": 2.5535718107366794,
          "pitch": 0.08655845252220296,
          "rotation": 0,
          "target": "1-starbucks"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3654247380357862,
          "pitch": 0.002991288485077348,
          "title": "현. 베이커리 주방",
          "text": "<div>베이커리 주방 위치 이동 및</div><div>패스트푸드&amp;카페존으로 변경 운영</div><div>(개방된 공간 환경 조성)</div>"
        },
        {
          "yaw": -2.47368430979801,
          "pitch": -0.03374375010377406,
          "title": "현. 일식당 '어가'",
          "text": "<div>기존 베이커리 주방의 위치를</div><div>베이커리 옆으로 옮겨 동선 편의성</div><div>확대 및 공간 연결성 확보</div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
