package program;

public class Persegi implements BangunDatar {
    private int s;

    public Persegi(int s) {
        this.s = s;
    }

    @Override
    public void luas() {
    float luas;
    luas = s * s ;
        System.out.println("Luas Persegi: "+luas);
    }

    @Override
    public void keliling() {
    float keliling;
    keliling = 4*s;
        System.out.println("Keliling Persegi: "+keliling);
    }

    public int getS() {
        return s;
    }

    public void setS(int s) {
        this.s = s;
    }
    
    

    
}
