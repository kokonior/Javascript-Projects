class Pedagang {
  constructor() {
    this.pensil = 1000;
    this.bolpoint = 2000;
    this.penghapus = 5000;
  }

  total(paramPensil, paramBolpoit, paramPenghapus) {
    const totalPedapatan = paramPensil * this.pensil + paramBolpoit * this.bolpoint + paramPenghapus * this.penghapus;

    console.log(`Total pendapatan anda adalah = ${totalPedapatan}`);
  }
}

const ahmad = new Pedagang();

ahmad.total(2, 4, 5);
