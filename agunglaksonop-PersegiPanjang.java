package program;

public class Persegi panjang implements BangunDatar {
private int p,l;

 public int getP() {
        return p;
    }

    public void setP(int p) {
        this.p = p;
    }

    public int getL() {
        return l;
    }

    public void setL(int l) {
        this.l = l;
    }

public PersegiPanjang(int p,int l) {
        this.p = p;
        this.l = l;
    }

    @Override
    public void luas() {
        float luas;
       luas = p*l;
        System.out.println("Luas Persegi Panjang: "+luas);
    }

    @Override
    public void keliling() {
    float keliling;
    keliling = 2*(p+l);
        System.out.println("Keliling Persegi Panjang: "+keliling);
    }


   


}
