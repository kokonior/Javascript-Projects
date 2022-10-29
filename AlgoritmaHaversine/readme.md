untuk dapat menghitung jarak antara dua titik kordinat di bumi, maka akan digunakan formula haversine agar menemukan jarak terdekat dari dua titik dalam sebuah bola

RUMUS HAVERSINE :

![haversine formula](https://bsierad.com/wp-content/uploads/2015/04/Haversine-method-bakhtyiar.png)

dimana disini r seharusnya adalah jari jari bumi 6371 Km

![earth](https://www.igismap.com/wp-content/uploads/2015/02/calculategeographicdistanceonearth.jpg)

### Source : [Wikipedia](https://en.wikipedia.org/wiki/Haversine_formula)

---

### Test :

```typescript
/**
 * data format is [lat,lon]
 */
const TEST_DATA = [
  {
    x: [-6.8797, 109.1256], //tegal
    y: [-6.6899, 108.4751], //cirebon
    lineDistance: "75 Km", //expected distance
  },
  {
    x: [-6.6899, 108.4751], //cirebon
    y: [-6.9175, 107.6191], //bandung
    lineDistance: "98 Km", //expected distance
  },
  {
    x: [-6.9175, 107.6191], //bandung
    y: [-6.2088, 106.8456], //jakarata
    lineDistance: "116 Km", //expected distance
  },
];

const runTest = () => {
  TEST_DATA.forEach(({ x, y, lineDistance }, i) => {
    console.log(`${i + 1} : `, {
      expected: lineDistance,
      result: countLineDistance(x, y),
    });
  });
};

runTest();

//OUTPUT :
// 1 :  { expected: '75 Km', result: 74.8621726398223 }
// 2 :  { expected: '98 Km', result: 97.84223880951394 }
// 3 :  { expected: '116 Km', result: 116.23639863667307 }
```
