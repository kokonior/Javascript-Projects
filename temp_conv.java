/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author adrian
 */
import java.util.Scanner;
public class temp_conv {
    public static void main (String [] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Convert dari suhu : "); 
        String suhu_awal = input.nextLine(); //input initial temp
        System.out.print("Ke suhu : ");
        String suhu_akhir = input.nextLine(); //final temp
        System.out.print("Berapa derajat : "); 
        int suhu = input.nextInt(); //how many degree
        double hasil = 0;
        // if else
        if (suhu_awal.equals("celcius")) {
            if (suhu_akhir.equals("fahrenheit")) { 
                hasil = suhu * 1.8 + 32;
                //System.out.print("Hasil dari convert" + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + " °C" );
                System.out.print("Hasil dari convert " + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + " °F" );
            }
         else { 
            if (suhu_akhir.equals("kelvin")) { 
                hasil = suhu + 273.15;
                System.out.print("Hasil dari convert " + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + " K");
            
            } else {
                if (suhu_akhir.equals("reamur")) {
                    hasil = suhu * 0.8;
                    System.out.print("Hasil dari convert " + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + " °R" );
                } else {
                    System.out.println("error");
                }
            }
        }
        
        
    } else  {
            if (suhu_awal.equals("fahrenheit")) {
            if (suhu_akhir.equals("celcius")) {
                hasil = (suhu-32) / 1.8;
                System.out.print("Hasil dari convert " + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + " °C" );
                
            }
         else {
            if (suhu_akhir.equals("reamur")) { 
                hasil = (suhu - 32)/2.25;
            System.out.print("Hasil dari convert " + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + " °R" );
            } else {
                if (suhu_akhir.equals("kelvin")) {
                    hasil = (suhu + 459.67) / 1.8;
                    System.out.print("Hasil dari convert " + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + " K");
                } else {
                    System.out.println("error");
                }
            }
        }
        
        
    }
            
        } 
                if (suhu_awal.equals("kelvin")) {
            if (suhu_akhir.equals("celcius")) {
                hasil = suhu - 273.15;
                System.out.print("Hasil dari convert " + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + "°C");
                
            }
         else {
            if (suhu_akhir.equals("fahrenheit")) { 
                hasil = suhu * 1.8 - 459.67;
            System.out.print("Hasil dari convert " + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + " °F" );
            } else {
                if (suhu_akhir.equals("reamur")) {
                    hasil = (suhu - 273.15) * 0.8;
                    System.out.print("Hasil dari convert " + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + " °R" );
                } else {
                    System.out.println("error");
                }
            }
        }
    
    } else {
                     if (suhu_awal.equals("reamur")) {
            if (suhu_akhir.equals("celcius")) {
                hasil = suhu * 1.25;
                System.out.print("Hasil dari convert " + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + " °C" );
            }
         else {
            if (suhu_akhir.equals("kelvin")) { 
                hasil =  suhu * 1.25 + 273.15;
                System.out.print("Hasil dari convert " + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + " K" );
            
            } else {
                if (suhu_akhir.equals("fahrenheit")) {
                    hasil = suhu * 2.25 + 32;
                    System.out.print("Hasil dari convert " + suhu_awal + " ke " + suhu_akhir + " adalah " + hasil + " °F" );
                } else {
                    System.out.println("error");
                }
            }
        }
                }
                }
}
}
