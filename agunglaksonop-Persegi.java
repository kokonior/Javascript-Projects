package program;

public class lingkaran implements BangunDatar {
    private int r;

    public int getR() {
        return r;
    }

    public void setR(int r) {
        this.r = r;
    }
public lingkaran(int r) {
        this.r = r;
    }

    @Override
    public void luas() {
        float luas;
       luas = (float) (3.14 * r * r);
        System.out.println("Luas Lingkaran: "+luas);
    }

    @Override
    public void keliling() {
    float keliling;
    keliling = (float) (2* 3.14 * r);
        System.out.println("Keliling Lingkaran: "+keliling);
    }

}
