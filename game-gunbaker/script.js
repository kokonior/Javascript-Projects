class Game {
  constructor() {
    this.playerName = "Kamu";
    this.botName = "B-Bot";
    this.pBatu = document.querySelector(".batu-p1");
    this.pKertas = document.querySelector(".kertas-p1");
    this.pGunting = document.querySelector(".gunting-p1");
    this.bBatu = document.querySelector(".batubot");
    this.bKertas = document.querySelector(".kertasbot");
    this.bGunting = document.querySelector(".guntingbot");
    this.ulangGame = document.querySelector(".ulang-game");
    this.versus = document.querySelector(".vs");
    this.infoGame = document.querySelector(".infogame");
    this.hasilGame = document.querySelector(".hasil-game");
    this.playerChoice = "";
    this.botChoice = "";
  }

  playerBatu() {
    this.pBatu.addEventListener("click", () => {
      this.playerChoice = this.pBatu.className;
      this.pBatu.classList.add("jari-player");
      console.log(`${this.playerName} memilih ${this.playerChoice}`);
      this.botBrain();
      console.log(`${this.botName} memilih ${this.botChoice}`);
      this.winMomen();
      console.log(this.winMomen());
      setTimeout(() => {
        this.gameInfo();
      }, 800);
      setTimeout(() => {
        this.botBackground();
      }, 500);
      this.disablePilihan();
    });
  }

  playerKertas() {
    this.pKertas.addEventListener("click", () => {
      this.playerChoice = this.pKertas.className;
      this.pKertas.classList.add("jari-player");
      console.log(`${this.playerName} memilih ${this.playerChoice}`);
      this.botBrain();
      console.log(`${this.botName} memilih ${this.botChoice}`);
      this.winMomen();
      console.log(this.winMomen());
      setTimeout(() => {
        this.gameInfo();
      }, 800);
      setTimeout(() => {
        this.botBackground();
      }, 500);
      this.disablePilihan();
    });
  }

  playerGunting() {
    this.pGunting.addEventListener("click", () => {
      this.playerChoice = this.pGunting.className;
      this.pGunting.classList.add("jari-player");
      console.log(`${this.playerName} memilih ${this.playerChoice}`);
      this.botBrain();
      console.log(`${this.botName} memilih ${this.botChoice}`);
      this.winMomen();
      console.log(this.winMomen());
      setTimeout(() => {
        this.gameInfo();
      }, 800);
      setTimeout(() => {
        this.botBackground();
      }, 500);
      this.disablePilihan();
    });
  }

  botBrain() {
    const option = ["batubot", "kertasbot", "guntingbot"];
    this.botChoice = option[Math.floor(Math.random() * option.length)];
    return this.botChoice;
  }

  winMomen() {
    if (this.botChoice === "kertasbot" && this.playerChoice === "gunting-p1") {
      return `Hore ${this.playerName} Menang!`;
    } else if (this.botChoice === "kertasbot" && this.playerChoice === "batu-p1") {
      return `Yah, ${this.botName} Menang!`;
    } else if (this.botChoice === "guntingbot" && this.playerChoice === "kertas-p1") {
      return `Yah, ${this.botName} Menang!`;
    } else if (this.botChoice === "guntingbot" && this.playerChoice === "batu-p1") {
      return `Hore ${this.playerName} Menang!`;
    } else if (this.botChoice === "batubot" && this.playerChoice === "kertas-p1") {
      return `Hore ${this.playerName} Menang!`;
    } else if (this.botChoice === "batubot" && this.playerChoice === "gunting-p1") {
      return `Yah, ${this.botName} Menang!`;
    } else {
      return "wkwkwk tidak ada yang menang";
    }
  }

  botBackground() {
    if (this.botChoice === "batubot") {
      this.bBatu.classList.add("jari-player");
    } else if (this.botChoice === "kertasbot") {
      this.bKertas.classList.add("jari-player");
    } else if (this.botChoice === "guntingbot") {
      this.bGunting.classList.add("jari-player");
    }
  }

  disablePilihan() {
    this.pBatu.classList.add("disable-pilihan");
    this.pGunting.classList.add("disable-pilihan");
    this.pKertas.classList.add("disable-pilihan");
  }

  gameInfo() {
    this.hasilGame.innerHTML = this.winMomen();
    this.infoGame.classList.add("kotak-hasil");
    this.versus.style.display = "none";
  }
}

const nugi = new Game();
nugi.playerBatu();
nugi.playerKertas();
nugi.playerGunting();
nugi.botBackground();
