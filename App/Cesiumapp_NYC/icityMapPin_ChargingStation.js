var Data_ChargingStuttgart = [
    ['Charging Station' , 9.162263	,48.786768  ],
['Charging Station' , 9.194918	,48.77935   ],
['Charging Station' , 9.161959	,48.764805  ],
['Charging Station' , 9.16815	,48.765702  ],
['Charging Station' , 9.163984	,48.772632  ],
['Charging Station' , 9.156514	,48.773186  ],
['Charging Station' , 9.191297	,48.780541  ],
['Charging Station' , 9.176176	,48.781309  ],
['Charging Station' , 9.179553	,48.782475  ],
['Charging Station' , 9.157928	,48.783211  ],
['Charging Station' , 9.160494	,48.778833  ],
['Charging Station' , 9.180765	,48.790333  ],
['Charging Station' , 9.190064	,48.783881  ],
['Charging Station' , 9.16182	,48.766012  ],
['Charging Station' , 9.179249	,48.766171  ],
['Charging Station' , 9.185701	,48.776707  ],
['Charging Station' , 9.197894	,48.78603   ],
['Charging Station' , 9.181984	,48.776565  ],
['Charging Station' , 9.175505	,48.778773  ],
['Charging Station' , 9.175567	,48.77884   ],
['Charging Station' , 9.173554	,48.776629  ],
['Charging Station' , 9.173602	,48.776669  ],
['Charging Station' , 9.180045	,48.770612  ],
['Charging Station' , 9.1633	,48.786393  ],
['Charging Station' , 9.159337	,48.774147  ],
['Charging Station' , 9.17976	,48.782756  ],
['Charging Station' , 9.170275	,48.77438   ],
['Charging Station' , 9.170133	,48.774611  ],
['Charging Station' , 9.170096	,48.774635  ],
['Charging Station' , 9.170058	,48.774659  ],
['Charging Station' , 9.201835	,48.791633  ],
['Charging Station' , 9.166991	,48.785359  ],
['Charging Station' , 9.172933	,48.767907  ],
['Charging Station' , 9.162493	,48.768858  ],
['Charging Station' , 9.166537	,48.770311  ],
['Charging Station' , 9.154414	,48.770204  ],
['Charging Station' , 9.201921	,48.78924   ]
];
var ChargingEntities = [];
for (let i = 0; i < 37; i++) {
    var nameub = Data_ChargingStuttgart[i][0];
    var lonub = Data_ChargingStuttgart[i][1];
    var latub = Data_ChargingStuttgart[i][2];
    ChargingEntities[i] = viewer.entities.add({
        name: nameub,
        position: Cesium.Cartesian3.fromDegrees(lonub, latub),
        description: nameub,
        billboard: {
            image: pinBuilder.fromMakiIconId('fuel', Cesium.Color.BLUEVIOLET.withAlpha(0.8), 60),
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            heightReference: "CLAMP_TO_GROUND",
            show: false
        }
    });
}